import React from "react";

const Footer = () => {
  return (
    <div
      className="fixed-bottom"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h6
        className="text-light text-center p-1"
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        Copyright © 2009-2023 Newzy.com
      </h6>
    </div>
  );
};

export default Footer;
