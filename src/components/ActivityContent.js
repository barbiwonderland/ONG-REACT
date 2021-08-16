import React from "react";

function ActivityContent({ content }) {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
    </div>
  );
}

export default ActivityContent;
