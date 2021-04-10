/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { ThemeProvider, jsx, Themed } from "theme-ui";
import Prism from "@theme-ui/prism";

import ColorModeButton from "../components/ColorModeButton";
import CustomLink from "../components/CustomLink";
import theme from "../styles/theme";

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: CustomLink,
};

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme} components={components}>
        <Head>
          <title>My cool website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <div
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "container",
              mx: "auto",
              width: "100%",
            }}
          >
            My cool website
            <ColorModeButton />
          </div>
          <div
            sx={{
              flex: "1 1 auto",
              p: 3,
              width: "100%",
              maxWidth: "container",
              mx: "auto",
            }}
          >
            <Component {...pageProps} />
          </div>
          <div
            sx={{
              p: 3,
              maxWidth: "container",
              mx: "auto",
            }}
          >
            <span role="img" aria-label="copyright">
              ©️
            </span>{" "}
            {new Date().getFullYear()}{" "}
            <span role="img" aria-label="coded">
              💻
            </span>{" "}
            con{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            por
            {` `}
            <Themed.a href="https://piducan.dev">piducan.dev</Themed.a>.
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
