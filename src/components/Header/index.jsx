/* eslint-disable react/prop-types */
import React from "react";
import cartIcon from "../../assets/image/cart.png";
import {Container} from "./styles";

const Header = ({cart}) => {
  const totalCount = cart.reduce((acc, d) => {
    acc += d.count;
    return acc;
  }, 0);

  return (
    <Container>
      <div>
        <p className="title">LUMIN</p>
      </div>
      <div className="left-container">
        <p>Shop</p>
        <p>Learn</p>
      </div>

      <div className="right-container">
        <p>Account</p>
        <p>
          <img src={cartIcon} alt="cart" height={"20px"} width={"20px"} />
          <sup>{totalCount}</sup>
        </p>
      </div>
    </Container>
  );
};

export default Header;
