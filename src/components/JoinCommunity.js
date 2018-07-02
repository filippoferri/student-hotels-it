import React from "react"
import Instafeed from "react-instafeed"
import Link from 'gatsby-link'
import PropTypes from "prop-types";

const instafeedTarget = "instafeed"


const JoinCommunity = ( {api} ) => {
  return (
    <section className="section has-margin-bottom">
      <div className="container is-centered">

        <h3 className="title is-h3">Unisciti alla community</h3>
        <p>Condividi la tua esperienza su Instagram <Link to="" className="has-text-primary">@studenthotels</Link></p>

        <div id={instafeedTarget} className="is-small">
          <Instafeed
            limit='4'
            resolution='thumbnail'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            userId={api.userId}
            clientId={api.clientId}
            accessToken={api.accessToken}
          />
        </div>
      </div>
    </section>
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

