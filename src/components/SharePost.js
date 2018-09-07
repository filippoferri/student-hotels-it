import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  PinterestIcon,
  EmailIcon
} from 'react-share';

class SharePost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const shareUrl = this.props.shareUrl;
    const media = "https://studenthotels.it" + this.props.media
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
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="button">
          <WhatsappIcon
            size={32}
            round={false}/>
        </WhatsappShareButton>
        <PinterestShareButton
          url={shareUrl}
          media={media}
          windowWidth={1000}
          windowHeight={730}
          className="button">
          <PinterestIcon
            size={32}
            round={false}/>
        </PinterestShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body= { "Questo articolo è molto interessante: " + shareUrl}
          className="button">
          <EmailIcon
            size={32}
            round={false}/>
        </EmailShareButton>
    </div>)
  }
};

export default SharePost;
