import React from "react";

class HotelImages extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const imageIds = this.props.data[this.props.hotelId]

    if (imageIds.length > 3) {
      return (
        <div className="tile is-ancestor">
          <div className="tile is-8 is-parent">
            <div className="tile is-child is-fill">
              <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[0] + "/1000/520.auto"} alt=""/>
            </div>

          </div>

          <div className="tile is-vertical is-parent">
            <div className="tile is-child is-fill">
              <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[1] + "/1000/520.auto"} alt=""/>
            </div>
            <div className="tile is-child is-fill">
              <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[2] + "/1000/520.auto"} alt=""/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[0] + "/1000/520.auto"} alt=""/>
        </div>
      )
    }

  }
};

export default HotelImages;