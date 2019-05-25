import React from "react";
import Img from "gatsby-image";
import Cross from "../components/Cross";
import ArrowBack from "../components/ArrowBack";
import ArrowForward from "../components/ArrowForward";
import pokemon from "./pokemon.json";
import "./styles.css";

const IndexPage = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  React.useEffect(() => {
    const listener = document.body.addEventListener("click", e => {
      if (e.target.id === "js-modal") setSelectedIndex(null);
    });
    const keypressListener = document.body.addEventListener("keydown", e => {
      if (e.keyCode === 37) {
        // left
        setSelectedIndex(index => mod(index - 1, 151));
      } else if (e.keyCode === 39) {
        // right
        setSelectedIndex(index => mod(index + 1, 151));
      } else if (e.keyCode === 27) {
        // esc
        setSelectedIndex(null);
      }
    });
    return () => {
      document.body.removeEventListener("click", listener);
      document.body.removeEventListener("keydown", keypressListener);
    };
  }, []);
  React.useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const selectedPokemon = parsedUrl.searchParams.get("pokemon");
    const index = pokemon.indexOf(selectedPokemon);
    if (index >= 0) {
      setSelectedIndex(index);
    }
  }, []);
  React.useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (typeof history !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const searchParamsPokemon = searchParams.get("pokemon");
      const selectedPokemon = pokemon[selectedIndex];
      if (selectedPokemon && searchParamsPokemon !== selectedPokemon) {
        searchParams.set("pokemon", selectedPokemon);
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, "", "/?" + searchParams.toString());
      }
    }
  }, [selectedIndex]);

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
            onClick={() => setSelectedIndex(index)}
          >
            <Img fixed={n.fixed} style={{ width: 200, height: 200 }} />
            <div>{pokemon[index]}</div>
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div id="js-modal" className="modal z-index-1">
          <div className="large-pokemon position-relative">
            <button className="minimal-button minimal-button-secondary position-absolute top-right-corner z-index-1">
              <Cross
                width={32}
                height={32}
                onClick={() => setSelectedIndex(null)}
              />
            </button>
            <button className="minimal-button position-absolute middle left z-index-1">
              <ArrowBack
                width={32}
                height={32}
                onClick={() => setSelectedIndex(mod(selectedIndex - 1, 151))}
              />
            </button>
            <button className="minimal-button position-absolute middle right z-index-1">
              <ArrowForward
                width={32}
                height={32}
                onClick={() => setSelectedIndex(mod(selectedIndex + 1, 151))}
              />
            </button>
            <Img
              fixed={nodes[selectedIndex].fixed}
              className="large-pokemon__image"
            />
            <h3>{pokemon[selectedIndex]}</h3>
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

function mod(a, b) {
  return ((a % b) + b) % b;
}
