import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import readme from "@projectRoot/README.md";
import "gfm.css/gfm.css";

const favicons = [
  {
    rel: "apple-touch-icon",
    type: "image/png",
    sizes: "180x180",
    href: "apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "favicon-16x16.png",
  },
];

const Favicon = () =>
  favicons.map(({ rel, type, sizes, href }, key) => (
    <link rel={rel} href={`/${href}`} sizes={sizes} type={type} key={key} />
  ));

const App = () => (
  <React.Fragment>
    <Head>
      <title>Dev Commons</title>
      {Favicon()}
      <link rel="manifest" href="/site.webmanifest" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div
      style={{
        textAlign: "center",
        padding: "12px",
      }}
    >
      <ReactMarkdown
        plugins={[gfm]}
        children={readme}
        allowDangerousHtml={true}
        className="markdown-body"
      />
    </div>
  </React.Fragment>
);

export default App;
