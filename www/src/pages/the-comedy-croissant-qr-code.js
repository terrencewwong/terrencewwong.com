import React from "react";
import QRCode from "qrcode.react";
import SEO from "../components/seo";
import { css } from "@emotion/core";

export default function TheComedyCroissantQRCode() {
  return (
    <div
      css={css`
        display: flex;
        height: calc(100vh - 64px);
        justify-content: center;
        align-items: center;
      `}
    >
      <SEO title="The Comedy Croissant QR Code" />
      <QRCode
        value="https://www.facebook.com/pg/thecomedycroissant/events"
        size="100%"
        bgColor="#fafafa"
        fgColor="#000c"
        level={"L"}
        includeMargin={false}
        renderAs={"svg"}
      />
    </div>
  );
}
