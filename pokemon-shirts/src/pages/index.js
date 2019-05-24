import React from "react";
import Img from "gatsby-image";
import pokemon from "./pokemon.json";
import "./styles.css";

const IndexPage = ({ data }) => {
  const [current, setCurrentImage] = React.useState(null);
  React.useEffect(() => {
    const listener = document.body.addEventListener("click", e => {
      if (e.target.id === "js-modal") setCurrentImage(null);
    });
    return () => document.body.removeEventListener("click", listener);
  }, []);

  const nodes = data.allImageSharp.nodes.sort((a, b) =>
    a.parent.name < b.parent.name ? -1 : 1
  );

  return (
    <>
      <div className="text-align-center">
        <h1>Pokemon Shirts</h1>
        <p>
          order from{" "}
          <a href="https://originalstitch.com/pokemon">Original Stitch</a>
        </p>
      </div>
      <div className="container">
        {nodes.map((n, index) => (
          <div
            key={n.id}
            className="pokemon text-align-center"
            onClick={() => setCurrentImage({ image: n, name: pokemon[index] })}
          >
            <Img fixed={n.fixed} style={{ width: 200, height: 200 }} />
            <div>{pokemon[index]}</div>
          </div>
        ))}
      </div>
      {current && (
        <div id="js-modal" className="modal">
          <div className="large-pokemon">
            <Img
              fixed={current.image.fixed}
              style={{ width: "70vh", height: "70vh" }}
            />
            <h3>{current.name}</h3>
          </div>
        </div>
      )}
    </>
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
