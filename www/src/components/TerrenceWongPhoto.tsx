import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const TerrenceWongPhoto = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "terrence-wong-photo.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 384) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ borderRadius: "50%" }}
      />
    )}
  />
);
export default TerrenceWongPhoto;
