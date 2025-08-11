import React from "react";

const PrimaryButtonOutline = ({ children, className= '' }) => {
  return <button className={`btn btn-outline btn-primary ${className}`}>{children}</button>;
};

export default PrimaryButtonOutline;
