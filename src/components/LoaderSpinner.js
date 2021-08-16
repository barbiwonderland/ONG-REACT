import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoaderSpinner = () => {
  return (
    <div className="spinner-class">
      <Loader
        type="TailSpin"
        color="#DB5752"
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
};
