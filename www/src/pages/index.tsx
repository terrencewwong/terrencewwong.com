import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import TerrenceWongPhoto from "../components/TerrenceWongPhoto";
import SEO from "../components/seo";

const IndexPage = () => (
  <div
    css={css`
      /* TODO: make this calc less hacky */
      height: calc(100vh - 64px);
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
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
  </div>
);

export default IndexPage;
