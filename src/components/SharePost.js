import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';

class SharePost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const shareUrl = this.props.shareUrl;
    const title = this.props.title;

    return (<div className="social-share">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="button"
        >
          <FacebookIcon
            size={32}
            round={false}/>
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="button">
          <TwitterIcon
            size={32}
            round={false}/>
        </TwitterShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="button">
          <EmailIcon
            size={32}
            round={false}/>
        </EmailShareButton>
    </div>)
  }
};

export default SharePost;
