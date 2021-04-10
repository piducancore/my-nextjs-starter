/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import Link from "next/link";
import React from "react";

export default function Hello() {
  return (
    <React.Fragment>
      <Themed.h1>Welcome again</Themed.h1>
      <Themed.p>This is another example page, this time in JSX.</Themed.p>
      <Themed.p>
        Go back to{" "}
        <Link href="/">
          <Themed.a>home</Themed.a>
        </Link>
      </Themed.p>
    </React.Fragment>
  );
}
