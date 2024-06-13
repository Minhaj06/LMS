import React, { Fragment, useContext, useEffect } from "react";
import "./FullScreenLoader.css";
import { AuthContext } from "../../context/auth";

const FullScreenLoader = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <Fragment>
      <div className={`LoadingOverlay${isLoading ? "" : " hidden"}`}>
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FullScreenLoader;
