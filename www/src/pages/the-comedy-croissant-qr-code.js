import React from "react";
import QRCode from "qrcode.react";
import SEO from "../components/seo";

export default function TheComedyCroissantQRCode() {
  return (
    <>
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
    </>
  );
}
