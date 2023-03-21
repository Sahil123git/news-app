import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <h1 className="bg-dark text-light text-center p-1">Newzy </h1>
    </div>
  );
};

export default Header;
