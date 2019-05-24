import React from "react";
import Img from "gatsby-image";

import pokemon from "./pokemon.json";

const fontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

const IndexPage = ({ data }) => {
  const nodes = data.allImageSharp.nodes.sort((a, b) =>
    a.parent.name < b.parent.name ? -1 : 1
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {nodes.map((n, index) => (
        <div style={{ textAlign: "center", padding: "16px" }}>
          <Img id={n.id} fixed={n.fixed} style={{ width: 400, height: 400 }} />
          <div style={{ fontFamily }}>{pokemon[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        id
        parent {
          ... on File {
            name
          }
        }
        fixed(width: 700, height: 700) {
          base64

          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
