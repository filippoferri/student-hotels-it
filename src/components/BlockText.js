import React from "react";

const BlockText = ({ content }) => {

  return (
    <section className="section container is-medium block-text">
      <div className="columns is-6">
        <div className="column">
          <h2 className="title is-2 has-text-right">{content.heading}</h2>
        </div>
        <div className="column">
          <article>{content.description}</article>
        </div>
      </div>
    </section>
  );
  
};

export default BlockText;