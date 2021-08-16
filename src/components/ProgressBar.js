import React from "react";

function ProgressBar(props) {
  const ProgressIdeterminate = () => {
    return (
      <div
        className="progress-bar progress-bar-striped progress-bar-animated "
        role="progressbar"
        style={{ width: "100%" }}
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    );
  };

  const ProgressDeterminate = () => {
    return (
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${props.now}%` }}
        aria-valuenow={props.now}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    );
  };

  const ProgressVariant = () => {
    const isIndeterminate = props.variant;
    if (isIndeterminate) {
      return <ProgressIdeterminate />;
    } else {
      return <ProgressDeterminate />;
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center m-2">
      <div className="progress w-75">
        <ProgressVariant />
      </div>
    </div>
  );
}

export default ProgressBar;
