// src/components/withTitle.js
import React from "react";

const withTitle = (Component, title) => {
  return function WrappedComponent(props) {
    return (
      <div>
        <h1>{title}</h1>
        <Component {...props} />
      </div>
    );
  };
};

export default withTitle;
