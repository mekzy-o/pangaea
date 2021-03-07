/* eslint-disable react/prop-types */
import React, {useState} from "react";
import Modal from "../Modal";
import {Container} from "./styles";

const Product = ({
  cart,
  setCart,
  label,
  image,
  price,
  currency,
  exchangeRate,
  setExchangeRate,
}) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(1);

  const handleModalShow = () => {
    const findElement = cart.findIndex((item) => item.label === label);
    findElement >= 0
      ? setCart(
          cart.map((item, index) => {
            if (index === findElement) {
              return {
                ...item,
                count: item.count + 1,
                totalCost: (item.count + 1) * price,
              };
            }
            return item;
          })
        )
      : setCart((prevState) => [
          ...prevState,
          {label, image, price, count: count, totalCost: price},
        ]);
    setShowModal(!showModal);
  };
  return (
    <>
      <Container>
        <div className="product-container">
          <p className="images">
            <img src={image} alt="image" className="photo" />
          </p>
        </div>
        <div className="product-info">
          <p>{label}</p>
          <p>
            From {exchangeRate} {price}
          </p>
          <button onClick={handleModalShow}>Add to Cart</button>
        </div>
      </Container>
      <Modal
        cart={cart}
        setCart={setCart}
        show={showModal}
        setShow={setShowModal}
        currency={currency}
        exchangeRate={exchangeRate}
        setExchangeRate={setExchangeRate}
        price={price}
      />
    </>
  );
};

export default Product;
