import React from "react";
import "../../styles/skeletonSetUp.css";

export default function SkeletonParts({ type }) {
  const skeleton = "skeleton " + type;
  return <div className={skeleton}></div>;
}
