import React from "react";
import Img from "gatsby-image";

const BlockTextImage = ({ content, dir, style }) => {

  console.log(content)

  return (
    <section className={"section block-text-image " + dir + " has-background-" + style}>

      <div className="container is-fluid">

        <div className="columns">

          {dir === "is-left" &&
          <div className="column is-6-desktop">
            <div className="block-image">
              <Img sizes={content.image.childImageSharp.sizes} />
            </div>
          </div>
          }

          <div className={dir === "is-left" ? "column is-4-desktop is-offset-1-desktop" : "column is-4-desktop is-offset-1-desktop"}>
            <article>
              <h3 className="title">{content.heading}</h3>
              <p>{content.description}</p>
            </article>
          </div>

          {dir === "is-right" &&
          <div className="column is-offset-1-desktop">
            <div className="block-image"><Img sizes={content.image.childImageSharp.sizes} /></div>
          </div>
          }

        </div>

      </div>


    </section>
  );
};

export default BlockTextImage;