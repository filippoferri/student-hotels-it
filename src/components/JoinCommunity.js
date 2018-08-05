import React from "react"
import Instafeed from "react-instafeed"
import PropTypes from "prop-types";

const instafeedTarget = "instafeed"


const JoinCommunity = ( {api} ) => {
  return (
    <div className="is-image-wrapper has-position-absolute">
        <div id={instafeedTarget}>
          <Instafeed
            limit="1"
            resolution="standard_resolution"
            sortBy="most-recent"
            target={instafeedTarget}
            template="
            <a href='{{link}}' target='_blank' class='instafeed__item'></a>
            <div class='is-image-wrapper has-position-absolute has-background'>
              <img class='instafeed__item__background' src='{{image}}' />
            </div>"
            userId={api.userId}
            clientId={api.clientId}
            accessToken={api.accessToken}
          />
        </div>
    </div>
  );
}

JoinCommunity.propTypes = {
  api: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired
  })
};

export default JoinCommunity;

