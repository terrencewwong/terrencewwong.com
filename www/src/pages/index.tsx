import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import TerrenceWongPhoto from "../components/TerrenceWongPhoto";
import SEO from "../components/seo";

const IndexPage = () => (
  <div
    css={css`
      margin-top: 128px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  >
    <SEO title="Home" />
    <div
      css={css`
        width: 192px;
        margin-bottom: 16px;
      `}
    >
      <TerrenceWongPhoto />
    </div>
    <h1>Terrence Wong</h1>
    <ul
      css={css`
        list-style: none;
        margin: 0;

        li:not(:last-child) {
          margin-right: 16px;
        }

        a {
          text-decoration: none;
        }
      `}
    >
      <li>
        <a href="https://twitter.com/@terrencito">
          <span role="img" aria-label="Twitter">
            🐤
          </span>{" "}
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/terrencewwong">
          <span role="img" aria-label="GitHub">
            🐙
          </span>{" "}
          GitHub
        </a>
      </li>
      <li>
        <Link to="/blog">
          <span role="img" aria-label="Blog">
            ✏️
          </span>{" "}
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

export default IndexPage;
