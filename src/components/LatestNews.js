import React from "react";
import Link from "gatsby-link";

const LatestNews = ({ posts }) => (
  <section id="latest-news" className="section has-margin-bottom">
    <div className="container">
      <div className="is-centered has-margin-bottom">
        <h3 className="title has-text-weight-bold is-3">Novità dal mondo</h3>
        <p className="">Il mondo degli Student Hotels guarda al futuro.<br/>Rimani aggiornato sulle ultime
          novità.</p>
      </div>

      <div className="tile is-ancestor">
        {posts.map(({ node: post }) => (
          <div className="tile is-parent" key={post.id}>
            <article className="tile is-child is-preview has-text-centered">

              <Link to={post.fields.slug}>
                <figure className="image is-16by9">
                  <img className="tile-img" src="/img/chemex.jpg" alt={post.frontmatter.title} />
                </figure>
              </Link>

              <small className="tile-date">{post.frontmatter.date}</small>
              <p className="tile-title is-5 has-text-centered">
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestNews;


