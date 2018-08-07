import React from "react";
import Link from "gatsby-link";

import Img from "gatsby-image";

const Tile = ({ post, style, hasbg }) => {

  const title = post.node.frontmatter.title;
  const date = post.node.frontmatter.date;
  const url = post.node.fields.slug;
  const img = post.node.frontmatter.heroImage.childImageSharp.sizes;

  return (
    <div className="tile is-parent">
      <article
        className={"tile is-child notification has-min-height" + (style ? " " + style : "") + (hasbg ? " has-background" : " is-animated")}>
        {hasbg ?
          <div className="is-image-wrapper has-position-absolute"><Img sizes={img}/></div>
          : null}
        <p className="tile-title title is-4">{title}</p>
        <span className="tile-date">{date}</span>
        <Link className="tile-link" to={url}></Link>
      </article>
    </div>
  );

};

const LatestNews = ({ content,posts }) => {

  return (
    <section id="latest-news" className="section has-margin-bottom">
      <div className="container">

        <div className="is-centered has-margin-bottom">
          <h3 className="title has-text-weight-bold is-3">{content.posts.title}</h3>
          <p className="">{content.posts.subtitle}</p>
        </div>

        <div className="tile is-ancestor has-column-tablet">

          <div className="tile is-vertical is-9-desktop">
            <div className="tile">

              <Tile post={posts[0]} hasbg/>

              <div className="tile is-8 is-vertical">

                <div className="tile">

                  <Tile post={posts[1]}/>

                  <div className="tile is-parent">
                    <article className="tile is-child notification is-primary is-animated has-min-height">
                      <Link className="tile-solo-link title is-3 is-uppercase has-text-weight-bold" to="/blog"><span>Tutte le notizie</span></Link>
                    </article>
                  </div>

                </div>

                <Tile post={posts[2]} hasbg/>

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


