import React from "react";
import CategoryStyle from "../styles/Category.module.css";

const Category = () => {
  return (
    <div>
      <div className={CategoryStyle.space}>
        <h2 className="container">
          <u>Categories</u>
        </h2>
      </div>
      <div className="container">
        <p className={CategoryStyle.shine}>general</p>
        <p className={CategoryStyle.shine}>science</p>
        <p className={CategoryStyle.shine}>sports</p>
        <p className={CategoryStyle.shine}>technology</p>
        <p className={CategoryStyle.shine}>business</p>
        <p className={CategoryStyle.shine}>entertainment</p>
        <p className={CategoryStyle.shine}>health</p>
      </div>
    </div>
  );
};

export default Category;
