import React from "react";
import "./BreadCrum.css";
import arrow_icon from "../../Assets/breadcrum_arrow.png";
const BreadCrum = (props) => {
  const { product } = props;
  // console.log(product.name)
  return (
    <div className="breadcrum">
      <img src={arrow_icon} alt="" />
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrum;
