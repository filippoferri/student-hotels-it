import React from "react";

const BlockTextBoard = ({ content, style, size }) => {

  return (
    <section className={"section block-text-board is-centered" + (size ? " " + size : " is-medium") + " " + style}>

      <div className="container">
        <div className="columns">
          <div className="column is-10-tablet is-offset-1-tablet">
            <article className={"has-background-" + style}>

              <h3 className="title is-3">{content.heading}</h3>

              <p>{content.description}</p>

            </article>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BlockTextBoard;