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

export default Tile;

