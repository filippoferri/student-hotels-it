import React from 'react';
import PropTypes from "prop-types";

class HomeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentWillUnmount() {
    this.handleOutsideClick
  }

  handleClick() {
    if(!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(
      prevState => ({
        popupVisible: !prevState.popupVisible
      })
    )
  }

  handleOutsideClick(e) {
    e.preventDefault();
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      this.setState({ popupVisible: false });
    } else {
      alert('sono qua')
    }
  }

  handleOpen() {
    this.setState({ popupVisible: false });
    const slug = "hotel-test"
    window.location = '/hotels/'+ slug;
  }

  getSuggestions() {
      return (
        <div className="sh-search-suggestion">

          <header>
            <button onClick={this.handleOpen} className="button is-primary is-rounded">Firenze</button>
          </header>

          <div className="sh-list-box">
            <span className="sh-list-box-title">Prossima apertura</span>

            <div className="sh-list-wrapper">

              <div className="sh-list-item">
                <div className="sh-list-item-inner">
                  Bologna
                </div>
              </div>
              <div className="sh-list-item">
                <div className="sh-list-item-inner">
                  Roma
                </div>
              </div>
              <div className="sh-list-item">
                <div className="sh-list-item-inner">
                  Milano
                </div>
              </div>

            </div>
          </div>

        </div>
      );
  }

  render() {

    var expandedDiv = this.getSuggestions();

    return (
      <div className="control is-bordered has-button-right has-search-icon" ref={(ref) => { this.childNode = ref; }}>

        <input className="input is-large has-icons-left " type="text" placeholder="Dove vuoi andare?" onClick={this.handleClick} readOnly/>

        {this.state.popupVisible && (
          expandedDiv
        )}

      </div>
    )
  }
}

export default HomeSearch

HomeSearch.propTypes = {
  popupVisible: PropTypes.bool
};
