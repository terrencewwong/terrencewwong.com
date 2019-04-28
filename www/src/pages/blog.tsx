import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import TerrenceWongPhoto from "../components/TerrenceWongPhoto";
import SEO from "../components/seo";

const IndexPage = () => (
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
      <article
        css={css`
          margin-bottom: 48px;
        `}
      >
        <header
          css={css`
            h2 {
              margin-bottom: 4px;
            }
          `}
        >
          <h2>
            <Link to="/react-context-hooks-and-rerenders">
              react context, hooks, and rerenders
            </Link>
          </h2>
          <small>april 28</small>
        </header>
        <p>tldr: memoize the value passed to the provider</p>
      </article>

      <article
        css={css`
          margin-bottom: 48px;
        `}
      >
        <header
          css={css`
            h2 {
              margin-bottom: 4px;
            }
          `}
        >
          <h2>
            <Link to="/learning-french">learning french</Link>
          </h2>
          <small>march 12</small>
        </header>
        <p>learning french with a slackbot</p>
      </article>
    </main>
  </div>
);

export default IndexPage;
