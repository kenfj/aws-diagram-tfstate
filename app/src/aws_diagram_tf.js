'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tfstate: new TfState(default_tfstate),
    };
  }

  handleChange(event) {
    this.state.tfstate.setJSON(event.target.value);

    this.setState({
      tfstate: this.state.tfstate,
    }, () => this.diagram.draw(this.state.tfstate));
  }

  render() {
    return (
      <div>
        <h2>resources:</h2>
        <pre>{this.state.tfstate.getResourcesList()}</pre>

        <h2>terraform.tfstate:</h2>
        <textarea cols="80" rows="30" wrap="off"
          value={this.state.tfstate.getJSON()}
          onChange={this.handleChange} />
      </div >
    );
  }

  componentDidMount() {
    // need to create mxGraph after render()
    this.diagram = new AWSDiagram('graphContainer');
    this.diagram.draw(this.state.tfstate);
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(LikeButton), domContainer);
