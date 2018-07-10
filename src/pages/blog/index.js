import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import blogBg from "../../img/blog-bg.jpg";

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section id="blog">

        <Helmet title={`Blog | Ultime notizie dal mondo student`} />

        <div className="hero is-medium is-primary is-bold"
             style={{ backgroundImage: `url(${blogBg})` }}>
          <div className="hero-body">
            <div className="container is-centered"></div>
          </div>
        </div>

        <div className="container has-margin-bottom has-margin-top">
          <div className="columns is-multiline">
            {posts
              .map(({ node: post }, index) => (
                <div
                  className="column is-one-third"
                  key={post.id}
                >
                  <article
                    className={"notification" + (index % 3 === 1 ? " is-primary" : "") + (index % 4 === 3 ? " is-black" : "")}>
                    <div className="sh-blog-content">
                      <span className="title is-uppercase is-3">{post.frontmatter.title}</span>

                      <div className="sh-blog-date">
                        <small>{post.frontmatter.date}</small>
                      </div>
                      <p>
                        {post.excerpt}
                      </p>
                    </div>
                    <Link className="sh-blog-link"  to={post.fields.slug}></Link>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const blogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "it")
          }
        }
      }
    }
  }
`;