import React from "react";
import BodyClassName from "react-body-classname";
import Carousel from "nuka-carousel";

import Close from "../img/close.svg";
import PrevImg from "../img/left.svg";
import NextImg from "../img/right.svg";

class HotelImages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselExpanded: false,
      slidesToShow: 1.0,
      transitionMode: "fade",
      wrapAround: false
    };
    this.expandedCarousel = this.expandedCarousel.bind(this);
    this.collapsedCarousel = this.collapsedCarousel.bind(this);
  }

  expandedCarousel() {
    this.setState({ carouselExpanded: true });
  }

  collapsedCarousel() {
    this.setState({ carouselExpanded: false });
  }

  getCarousel(images) {

    if (this.state.carouselExpanded) {

      return (
        <div className="sh-carousel">
          <BodyClassName className="has-overflow-hidden"/>

          <img className="close-carousel" src={Close} onClick={this.collapsedCarousel}/>

          <div className="container">
            <Carousel slidesToShow={this.state.slidesToShow}
                      transitionMode={this.state.transitionMode}
                      wrapAround={this.state.wrapAround}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <img onClick={previousSlide} src={PrevImg} style={{ "width": "3rem" }}/>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <img onClick={nextSlide} src={NextImg} style={{ "width": "3rem" }}/>
                      )}
                      renderBottomCenterControls={({ currentSlide }) => (
                        <div></div>
                      )}>
              {images.map((image, index) => {
                return (
                  <img key={index} data-id={index}
                       src={"https://photo.hotellook.com/image_v2/limit/" + image + "/1000/520.auto"} alt={this.props.hotelName + " - Image " + index}/>
                );
              })}
            </Carousel>
          </div>

        </div>);
    }
  }

  render() {
    const imageIds = this.props.data[this.props.hotelId];
    var getDivCarousel = this.getCarousel(imageIds);

    if (imageIds.length > 3) {
      return (
        <div>
          <div className="tile is-ancestor" onClick={this.expandedCarousel}>
            <div className="tile is-8 is-parent">
              <div className="tile is-child is-fill">
                <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[0] + "/1000/520.auto"} alt=""/>
              </div>

            </div>

            <div className="tile is-vertical is-parent is-hidden-mobile">
              <div className="tile is-child is-fill">
                <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[1] + "/1000/520.auto"} alt=""/>
              </div>
              <div className="tile is-child is-fill" style={{ "position": "relative" }}>
                <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[2] + "/1000/520.auto"} alt=""/>
                <div className="sh-gallery-length">+ {imageIds.length - 3}</div>
              </div>
            </div>
          </div>

          {getDivCarousel}

        </div>
      );
    } else {
      return (
        <div>
          <div onClick={(imageIds.length > 1) ? this.expandedCarousel : null}>
            <img src={"https://photo.hotellook.com/image_v2/limit/" + imageIds[0] + "/1000/520.auto"} alt=""/>
          </div>

          {getDivCarousel}

        </div>
      );
    }
  }
}

export default HotelImages;