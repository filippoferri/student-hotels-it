import React from "react";

const BlockTextImage = ({ content, dir, style }) => {

  return (
    <section className={"block-text-image is-medium " + dir + " has-background-" + style}>

      <div className="columns">

        {dir === "is-left" &&
        <div className="column is-5">
          <div className="block-image"
               style={{ backgroundImage: `url(${content.image})` }}>
          </div>
        </div>
        }

        <div className={dir === "is-left" ? "column is-3 is-offset-1" : "column is-3  is-offset-2"}>
          <article>
            <h3 className="title">{content.heading}</h3>
            <p>{content.description}</p>
          </article>
        </div>

        {dir === "is-right" &&
        <div className="column is-offset-1">
          <div className="block-image"
               style={{ backgroundImage: `url(${content.image})` }}>
          </div>
        </div>
        }

      </div>

    </section>
  );
};

export default BlockTextImage;