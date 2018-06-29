import React from "react";
import Link from "gatsby-link";

const LatestNews = ({ posts }) => (
  <section id="latest-news" className="section has-margin-bottom">
    <div className="container">
      <div className="is-centered has-margin-bottom">
        <h3 className="title has-text-weight-bold is-3">Novità dal mondo</h3>
        <p className="">Il mondo degli Student Hotels sta guardando al futuro. Rimani aggiornato sulle ultime
          novità.</p>
      </div>

      <div className="tile is-ancestor">
        {posts.map(({ node: post }) => (
          <div className="tile is-parent" key={post.id}>
            <article className="tile is-child is-preview">

              <Link to={post.fields.slug}>
                <img src="/img/chemex.jpg" alt=""/>
              </Link>

              <small>{post.frontmatter.date}</small>
              <p className="title"><Link to={post.fields.slug}>
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


