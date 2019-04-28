import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO {...post.frontmatter} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
