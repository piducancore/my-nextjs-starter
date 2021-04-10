import React from "react";
import Link from "next/link";

export default function CustomLink(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  return isInternalLink ? (
    <Link href={href}>
      <a {...props} />
    </Link>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  );
}
