import React from "react";
import PropTypes from "prop-types";

class ReactMorePageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.expandedText = this.expandedText.bind(this);
    this.collapseText = this.collapseText.bind(this);
  }

  expandedText() {
    this.setState({ expanded: true });
  }

  collapseText() {
    this.setState({ expanded: false });
  }

  getMoreTextDiv() {
    if (this.state.expanded) {
      return (<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium ad aspernatur commodi deserunt dolorem dolorum ex natus officia quia repellat repellendus sequi sint. Dicta facilis fugiat natus nihil velit? Beatae numquam quas voluptates. Architecto dolor doloribus, enim et, facere id inventore molestias necessitatibus obcaecati, quaerat rerum ullam voluptatibus voluptatum! <br/>
        <a onClick={this.collapseText}>Leggi di meno</a></div>);
    } else {
      return (<div>
        <a onClick={this.expandedText}>Leggi più</a></div>);
    }
  }

  render() {
    var expandedDiv = this.getMoreTextDiv();

    return (
      <div>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, provident!

        {expandedDiv}

      </div>
    );
  }
}

export default ReactMorePageTemplate;

ReactMorePageTemplate.propTypes = {
  expanded: PropTypes.bool
};

