//
// draw AWS diagram using mxGraph
//
//////////////////////////////////////////////////////////////////////

class TfState {
  constructor(tfstate) {
    this.tfstate = tfstate;
  }

  getJSON() {
    return JSON.stringify(this.tfstate, null, 2);
  }

  setJSON(tfstate_json) {
    try {
      this.tfstate = JSON.parse(tfstate_json);
    } catch (e) {
      alert(e);
    }
  }

  _getRootResources() {
    return this.tfstate.modules.find(e => e.path[0] === "root").resources;
  }

  getResourcesList() {
    const resources = this._getRootResources();
    return Object.keys(resources).join("\n");
  }

  _getResourceEntries() {
    const resources = this._getRootResources()
    return Object.entries(resources);
  }

  getResource(type) {
    return this._getResourceEntries().filter(r => r[1].type === type);
  }
}

//////////////////////////////////////////////////////////////////////

class AWSResource {
  constructor(graph) {
    this.graph = graph;
    this.parent = graph.getDefaultParent();
  }

  create(resource) {
    const self = this;
    const type = resource[1].type;

    const createResource = {
      aws_vpc: (resource) => { self._createVpc(resource); },
      aws_subnet: (resource) => { self._createSubnet(resource); },
      aws_instance: (resource) => { self._createInstance(resource); },
      aws_elb: (resource) => { self._createELB(resource); },
    }

    createResource[type](resource);
  }

  _initCreate(resource) {
    const key = resource[0];
    const id = resource[1].primary.id;
    const attr = resource[1].primary.attributes;

    return [key, id, attr];
  }

  _createVpc(resource) {
    const [key, id, attr] = this._initCreate(resource);

    const region = attr.arn.replace(/^arn:aws:ec2:/, "").replace(/:.+$/, "");
    const label = key + "<br>[" + region + "]<br>" + "(" + attr.cidr_block + ")";
    const vpc = this.graph.insertVertex(this.parent, id, label, 20, 20, 120, 80);

    this.graph.insertEdge(this.parent, null, '', this.parent, vpc);
  }

  _createSubnet(resource) {
    const [key, id, attr] = this._initCreate(resource);

    const label = key + "<br>[" + attr.availability_zone + "]<br>" + "(" + attr.cidr_block + ")"
    const subnet = this.graph.insertVertex(this.parent, id, label, 20, 20, 120, 80);

    const vpc = this.graph.getModel().getCell(attr.vpc_id);
    this.graph.insertEdge(this.parent, null, '', vpc, subnet);
  }

  _createInstance(resource) {
    const [key, id, attr] = this._initCreate(resource);

    const label = key + "<br>(" + attr.private_ip + ")<br>" + "(" + attr.public_ip + ")"
    const instance = this.graph.insertVertex(this.parent, id, label, 20, 20, 120, 80);

    const subnet = this.graph.getModel().getCell(attr.subnet_id);
    this.graph.insertEdge(this.parent, null, '', subnet, instance);
  }

  _createELB(resource) {
    const [key, id, attr] = this._initCreate(resource);

    const label = key + "<br>[" + (attr.internal == "false" ? "public" : "private") + "]";
    const elb = this.graph.insertVertex(this.parent, id, label, 20, 20, 120, 80);

    Object.entries(attr).filter(e => e[0].match(/^subnets.\d+/)).forEach(e => {
      const subnet = this.graph.getModel().getCell(e[1]);
      this.graph.insertEdge(this.parent, null, '', subnet, elb);
    });

    Object.entries(attr).filter(e => e[0].match(/^instances.\d+/)).forEach(e => {
      const instance = this.graph.getModel().getCell(e[1]);
      this.graph.insertEdge(this.parent, null, '', elb, instance);
    });
  }
}

//////////////////////////////////////////////////////////////////////

class AWSDiagram {
  constructor(elementName) {
    this.graph = this._createGraph(elementName);
    this.awsResource = new AWSResource(this.graph);
  }

  _createGraph(elementName) {
    const container = document.getElementById(elementName);
    const graph = new mxGraph(container);

    graph.setPanning(true);
    graph.panningHandler.useLeftButtonForPanning = true;
    graph.setHtmlLabels(true);
    // graph.setResizeContainer(true);
    graph.border = 60;
    graph.view.setTranslate(graph.border / 2, graph.border / 2);

    return graph;
  }

  draw(tfstate) {
    const graph = this.graph;

    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
      return;
    }

    // clear all cells
    graph.removeCells(graph.getChildCells(graph.getDefaultParent(), true, true))

    new mxRubberband(graph);

    // const layout = new mxHierarchicalLayout(graph, mxConstants.DIRECTION_WEST);
    const layout = new mxFastOrganicLayout(graph);

    const parent = graph.getDefaultParent();

    graph.getModel().beginUpdate();

    try {
      this._drawResources(tfstate);
      // updateLayout(graph, parent);

    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }

    layout.execute(parent);
  }

  _drawResources(tfstate) {
    this._drawResource(tfstate, "aws_vpc");
    this._drawResource(tfstate, "aws_subnet");
    this._drawResource(tfstate, "aws_instance");
    this._drawResource(tfstate, "aws_elb");
  }

  _drawResource(tfstate, type) {
    tfstate.getResource(type).forEach((resource) => {
      this.awsResource.create(resource);
    });
  }
}
