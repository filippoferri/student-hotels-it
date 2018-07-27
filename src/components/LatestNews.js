import React from "react";
import Link from "gatsby-link";

const Tile = ({ post, style, hasbg }) => {

  let title = post.node.frontmatter.title;
  let date = post.node.frontmatter.date;
  let url = post.node.fields.slug;
  let img = "../img/chemex.jpg"

  if (hasbg) {
    var image = {backgroundImage: `url(${img})` }
    var bg    = "has-background"
  }

  return (
    <div className="tile is-parent">
      <article className={"tile is-child notification has-min-height " + style + " " + bg}
               style={image}>
        <p className="tile-title title is-4">{title}</p>
        <span className="tile-date">{date}</span>
        <Link className="tile-link" to={url}></Link>
      </article>
    </div>
  );

};

const LatestNews = ({ posts }) => {

  return (
    <section id="latest-news" className="section has-margin-bottom">
      <div className="container">
        <div className="is-centered has-margin-bottom">
          <h3 className="title has-text-weight-bold is-3">Novità dal mondo</h3>
          <p className="">Il mondo degli Student Hotels guarda al futuro.<br/>Rimani aggiornato sulle ultime
            novità.</p>
        </div>

        <div className="tile is-ancestor has-column-tablet">

          <div className="tile is-vertical is-9-desktop">
            <div className="tile">

              <Tile post={posts[0]} hasbg />

              <div className="tile is-8 is-vertical">

                <div className="tile">

                  <Tile post={posts[1]}/>

                  <div className="tile is-parent">
                    <article className="tile is-child notification is-primary is-animated has-min-height">
                      <Link className="tile-solo-link title is-3 is-uppercase has-text-weight-bold" to="/blog"><span>Tutte le notizie</span></Link>
                    </article>
                  </div>

                </div>

                <Tile post={posts[2]} hasbg />

              </div>
            </div>
          </div>

          <Tile post={posts[3]} style={"is-black"}/>

        </div>

      </div>
    </section>
  );
};

export default LatestNews;


