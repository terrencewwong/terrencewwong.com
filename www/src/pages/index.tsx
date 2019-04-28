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
        margin-bottom: 16px;
      `}
    >
      <TerrenceWongPhoto />
    </div>
    <h1>terrence wong</h1>
    <ul
      css={css`
        list-style: none;
        margin: 0;

        li:not(:last-child) {
          margin-right: 16px;
        }
      `}
    >
      <li>
        <a href="https://twitter.com/@terrencito">
          <span role="img" aria-label="Twitter">
            🐤
          </span>{" "}
          twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/terrencewwong">
          <span role="img" aria-label="GitHub">
            🐙
          </span>{" "}
          github
        </a>
      </li>
      <li>
        <Link to="/blog">
          <span role="img" aria-label="Blog">
            ✏️
          </span>{" "}
          blog
        </Link>
      </li>
    </ul>
  </div>
);

export default IndexPage;
