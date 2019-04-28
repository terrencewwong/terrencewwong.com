import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

type Props = {
  size: "small" | "medium";
};
const defaultProps = {
  size: "medium"
};
const TerrenceWongPhoto = ({ size }: Props) => (
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
      <div
        css={css`
          width: ${{
            small: "48px",
            medium: "192px"
          }[size]};
        `}
      >
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{ borderRadius: "50%" }}
        />
      </div>
    )}
  />
);
TerrenceWongPhoto.defaultProps = defaultProps;
export default TerrenceWongPhoto;
