import React from "react";
import bgBlock from "../img/tile-hotels.jpg";

const BlockTextImage = ({ dir, style }) => {

  return (
    <section className={"block-text-image is-medium " + dir + " has-background-" + style}>

      <div className="">
        <div className="columns">

          {dir === "is-left" &&
          <div className="column is-5">
            <div className="block-image"
                 style={{ backgroundImage: `url(${bgBlock})` }}>></div>
          </div>
          }

          <div className={dir === 'is-left' ? "column is-3 is-offset-1" : "column is-3  is-offset-2" }>
            <article>
              <h3 className="title">We work tirelessly to build world-class board and executive leadership teams for
                companies around the globe</h3>
              <p>Incomparable Candidate Experience
                Game-Changing Leaders
                Innovative and Flexible
                Your Brand Ambassadors
                Partners With A Shared Goal</p>
            </article>
          </div>

          {dir === "is-right" &&
            <div className="column is-offset-1">
              <div className="block-image"
                   style={{ backgroundImage: `url(${bgBlock})` }}>></div>
            </div>
          }


        </div>
      </div>

    </section>
  );
};

export default BlockTextImage;