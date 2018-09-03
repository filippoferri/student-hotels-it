import React from 'react';
import Disqus from 'disqus-react';

class addDisqus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const disqusShortname = 'studenthotels-it';
    const disqusConfig = {
      url: this.props.url,
      identifier: this.props.title,
      title: this.props.title,
    };

    return (
      <div className="is-content-section">
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default addDisqus;