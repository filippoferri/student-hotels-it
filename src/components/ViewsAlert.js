import React from "react";

const PastWeek = ({num}) => (
  <span className="has-text-small">L'hotel è stato visto <b>{num}</b> volte nell'ultima settimana <span className="sh-message-icon high-demand"></span></span>
)

const Actually = ({num}) => (
  <span className="has-text-small"><b>{num}</b> altre persone stanno guardando questo hotel. <span className="sh-message-icon high-traffic"></span></span>
)

const OnDemand = ({num}) => (
  <span className="has-text-small"><b>{num}</b> persone hanno prenotato nelle ultime 48 ore. <span className="sh-message-icon high-booking"></span></span>
)


class ViewsAlert extends React.Component {

  variation(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addMessage() {
    var message;
    const num = this.variation(1,3);
    const high = this.variation(100,150);
    const medium = this.variation(10,25);
    const low = this.variation(2,5);

    switch(num) {
      case 1:
        message = <PastWeek num={high}/>;
        break;
      case 2:
        message = <Actually num={medium}/>;
        break;
      default:
        message = <OnDemand num={low}/>;
    }

    return message;
  }

  render() {

    return(
      <div className="notification has-icon-right">
        {this.addMessage()}
      </div>
    )
  }
}

export default ViewsAlert;
