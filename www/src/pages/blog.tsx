import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";

import TerrenceWongPhoto from "../components/TerrenceWongPhoto";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Blog" />
    <aside
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 64px;

        & > :not(:last-child) {
          margin-right: 8px;
        }

        h3,
        p {
          margin: 0;
        }
      `}
    >
      <TerrenceWongPhoto size="small" />
      <div>
        <h3>blog</h3>
        <p>terrence wong</p>
      </div>
    </aside>
    <main>
      {data.blogPosts.edges.map(({ node }) => (
        <article
          css={css`
            margin-bottom: 48px;
          `}
          key={node.id}
        >
          <header
            css={css`
              h2 {
                margin-bottom: 4px;
              }
            `}
          >
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <small>{node.frontmatter.date}</small>
          </header>
          <p>{node.frontmatter.description}</p>
        </article>
      ))}
    </main>
  </div>
);
export default IndexPage;

export const query = graphql`
  query {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(formatString: "MMM DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
