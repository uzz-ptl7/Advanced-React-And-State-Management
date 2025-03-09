import React from "react";

const withTitle = (WrappedComponent, title) => {
  return (props) => (
    <div>
      <h2>{title}</h2>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withTitle;
