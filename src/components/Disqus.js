import React from "react";
import Disqus from "disqus-react";

import Conversation from '../img/conversation-student-hotels.svg';

class addDisqus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: false
    };
    this.getButton = this.getButton.bind(this);
    this.getDisqus = this.getDisqus.bind(this);
  }

  getButton() {
    return (
      <div className="columns">
        <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
          <div className="sh-block-icon"><img src={Conversation} alt="Mostra la conversazione"/></div>
          <button onClick={() => this.setState({ conversation: true })} type="button"
                  className="button is-large is-violet is-fullwidth is-uppercase has-text-medium has-text-weight-semibold">Mostra
            la conversazione
          </button>
        </div>
      </div>);
  }

  getDisqus() {
    const disqusShortname = "studenthotels-it";
    const disqusConfig = {
      url: this.props.url,
      identifier: this.props.title,
      title: this.props.title
    };
    return (
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
    );
  }

  render() {
    return (
      <div className="is-content-section">
        {this.state.conversation ? this.getDisqus() : this.getButton()}
      </div>
    );

  }
}

export default addDisqus;