import React from "react";

const BlockTextBoard = ({ style }) => {

  return (
    <section className={"section block-text-board is-medium is-centered " + style}>

      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <article className={"has-background-" + style}>

              <h3 className="title is-3">Tell us more</h3>

              <p>So now you know a bit about us, we’re probably going to wonder why we haven’t spoken to you before;
                we’d
                love to see you. We may be knee-deep in finding the team to build a new life-changing app or plotting
                our
                clients’ plan of global domination, but feel free to pop by the office anytime and say hello. And if you
                can’t contain yourself until then, give us a call, or an email and let it all out. It’s going to be
                amazing.</p>

            </article>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BlockTextBoard;