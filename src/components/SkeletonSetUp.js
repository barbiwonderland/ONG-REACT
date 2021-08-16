import React from "react";
import SkeletonParts from "./SkeletonParts/SkeletonParts";
import SkeletonAnimation from "./SkeletonParts/SkeletonAnimation";

//component that gives a skeleton for the setup of the page, use components (SkeletonParts) for creating the content of the skeleton page. It is activade whit a boolean prop.

export default function SkeletonSetUp({ active }) {
  if (!active) return null;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <h2>Loading</h2>
      <div className="spinner-border" role="status"></div>

      <SkeletonParts type="content" />
      <SkeletonParts type="title" />
      <SkeletonParts type="text" />
      <SkeletonParts type="text" />
      <SkeletonParts type="text" />
      <SkeletonParts type="content" />
      <SkeletonParts type="content" />
      <SkeletonAnimation />
    </div>
  );
}
