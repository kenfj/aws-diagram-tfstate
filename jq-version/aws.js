
function main(container) {
    if (!mxClient.isBrowserSupported()) {
        mxUtils.error('Browser is not supported!', 200, false);
        return;
    }

    // Disables the built-in context menu
    // mxEvent.disableContextMenu(container);

    var graph = setupGraph(container);

    // Enables rubberband selection
    new mxRubberband(graph);

    setupGraphStyles(graph);

    var layout = setupGraphLayout(graph);

    // sample xml from folding.html
    // var xml = '<mxGraphModel><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="2" value="col1" vertex="1" parent="1"><mxGeometry width="120" height="30" as="geometry" /></mxCell><mxCell id="3" value="1" vertex="1" parent="2"><mxGeometry width="100" height="30" as="geometry" /></mxCell><mxCell id="4" value="1.1" vertex="1" parent="3"><mxGeometry width="80" height="30" as="geometry" /></mxCell><mxCell id="5" value="1.1.1" vertex="1" parent="4"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="6" value="1.1.2" vertex="1" parent="4"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="7" value="1.2" vertex="1" parent="3"><mxGeometry width="80" height="30" as="geometry" /></mxCell><mxCell id="8" value="col2" vertex="1" parent="1"><mxGeometry width="120" height="30" as="geometry" /></mxCell><mxCell id="9" value="2" vertex="1" parent="8"><mxGeometry width="100" height="30" as="geometry" /></mxCell><mxCell id="10" value="2.1" vertex="1" parent="9"><mxGeometry width="80" height="30" as="geometry" /></mxCell><mxCell id="11" value="2.1.1" vertex="1" parent="10"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="12" value="2.1.2" vertex="1" parent="10"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="13" value="2.2" vertex="1" parent="9"><mxGeometry width="80" height="30" as="geometry" /></mxCell><mxCell id="14" value="3" vertex="1" parent="8"><mxGeometry width="100" height="30" as="geometry" /></mxCell><mxCell id="15" value="3.1" vertex="1" parent="14"><mxGeometry width="80" height="30" as="geometry" /></mxCell><mxCell id="16" value="3.1.1" vertex="1" parent="15"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="17" value="3.1.2" vertex="1" parent="15"><mxGeometry width="60" height="30" as="geometry" /></mxCell><mxCell id="18" value="3.2" vertex="1" parent="14"><mxGeometry width="80" height="30" as="geometry" /></mxCell></root></mxGraphModel>';

    var xml = '<mxGraphModel><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="arn:aws:elasticloadbalancing:ap-northeast-1:999999999999:loadbalancer/app/tf-example-app/69903bda5ff22e56" value="ALB.main" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="80" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="arn:aws:elasticloadbalancing:ap-northeast-1:999999999999:loadbalancer/app/tf-example-app/69903bda5ff22e56" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="tf-example-app" value="ecr_repository.main [ap-northeast-1]&lt;br&gt;(999999999999.dkr.ecr.ap-northeast-1.amazonaws.com/tf-example-app)" vertex="1" parent="1"><mxGeometry width="180" height="80" as="geometry" /></mxCell><mxCell id="igw-0924f86b97534e02d" value="IGW.gw" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="80" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="igw-0924f86b97534e02d" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="nat-0b935fff2d56c450c" value="NGW.gw.0" vertex="1" parent="subnet-04ddaf3018670d990"><mxGeometry width="80" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="nat-0b935fff2d56c450c" target="subnet-04ddaf3018670d990"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="nat-0d3547141ea86ccba" value="NGW.gw.1" vertex="1" parent="subnet-093f789a253f64036"><mxGeometry width="80" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="nat-0d3547141ea86ccba" target="subnet-093f789a253f64036"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="subnet-086693c8744470be2" value="subnet.private.0 [ap-northeast-1a]&lt;br&gt;(172.17.0.0/24)" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="230" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="subnet-086693c8744470be2" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="subnet-08ae33de89284149a" value="subnet.private.1 [ap-northeast-1c]&lt;br&gt;(172.17.1.0/24)" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="230" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="subnet-08ae33de89284149a" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="subnet-04ddaf3018670d990" value="subnet.public.0 [ap-northeast-1a]&lt;br&gt;(172.17.2.0/24)" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="230" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="subnet-04ddaf3018670d990" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="subnet-093f789a253f64036" value="subnet.public.1 [ap-northeast-1c]&lt;br&gt;(172.17.3.0/24)" vertex="1" parent="vpc-08e1f0506b24ff24f"><mxGeometry width="230" height="80" as="geometry" /></mxCell><mxCell value="" edge="1" parent="1" source="subnet-093f789a253f64036" target="vpc-08e1f0506b24ff24f"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="vpc-08e1f0506b24ff24f" value="VPC.main [ap-northeast-1]&lt;br&gt;(172.17.0.0/16)" vertex="1" parent="1"><mxGeometry width="300" height="80" as="geometry" /></mxCell></root></mxGraphModel>';

    // Adds cells to the model in a single step
    graph.getModel().beginUpdate();

    try {
        loadXML(xml, graph);
        // note: when you load xml, layout.execute shoud be outside
    } finally {
        graph.getModel().endUpdate();
    }

    layout.execute(graph.getDefaultParent());

    // var layout = new mxHierarchicalLayout(graph);
    // layout.execute(graph.getDefaultParent());

    // debug print xml
    if (false) {
        var encoder = new mxCodec();
        var node = encoder.encode(graph.getModel());
        mxUtils.popup(mxUtils.getPrettyXml(node), true);
    }
};

function setupGraph(container) {
    // Creates the graph inside the given container
    var graph = new mxGraph(container);

    graph.setDropEnabled(true);
    graph.setResizeContainer(true);
    graph.setHtmlLabels(true);

    // Disables global features
    graph.foldingEnabled = false;
    graph.collapseToPreferredSize = false;
    graph.recursiveResize = true;
    graph.border = 30;

    return graph;
};

function setupGraphStyles(graph) {
    var style = graph.getStylesheet().getDefaultVertexStyle();
    style[mxConstants.STYLE_ROUNDED] = true;
    style[mxConstants.STYLE_ABSOLUTE_ARCSIZE] = '1';
    style[mxConstants.STYLE_SHADOW] = true;
    style[mxConstants.STYLE_FILLCOLOR] = 'white';
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;

    var eStyle = graph.getStylesheet().getDefaultEdgeStyle();
    eStyle[mxConstants.STYLE_ROUNDED] = true;
    eStyle[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';
};

function setupGraphLayout(graph) {
    // Installs auto layout for all levels
    var layout = new mxStackLayout(graph, true);
    layout.border = graph.border;
    layout.resizeParent = true;

    var layoutMgr = new mxLayoutManager(graph);
    layoutMgr.getLayout = function (cell) {
        if (cell.collapsed) {
            return null;
        }

        if (cell.getValue() && cell.getValue().startsWith("subnet.public.0")) {
            var geometry = cell.getGeometry();
            geometry.height = 80;
            layout.horizontal = true;
            layout.spacing = 10;
        } else if (cell.parent == graph.model.root) {
            layout.horizontal = true;
            layout.spacing = 40;
        } else {
            layout.horizontal = false;
            layout.spacing = 20;
        }

        return layout;
    };

    return layout;
};

function loadXML(xml, graph) {
    var doc = mxUtils.parseXml(xml);
    var codec = new mxCodec(doc);
    codec.decode(doc.documentElement, graph.getModel());
};
