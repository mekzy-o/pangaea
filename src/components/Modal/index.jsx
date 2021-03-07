/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import {
  Container,
  ModalContainer,
  ModalHeader,
  ModalContentContainer,
  ModalFooter,
} from "./styles";
import CartCard from "../CartCard";
import {svgs} from "../../assets";

const Modal = ({
  show,
  setShow,
  cart,
  setCart,
  currency,
  exchangeRate,
  setExchangeRate,
  increment,
  decrement,
}) => {
  const subTotal = cart.reduce((acc, d) => {
    acc += d.totalCost;
    return acc;
  }, 0);

  const handleCurrencyChange = (e) => {
    setExchangeRate(e.target.value);
  };

  useEffect(() => {
    if (!cart.length) {
      setShow(false);
    }
  }, [cart, setShow]);

  return !show ? null : (
    <Container>
      <ModalContainer>
        <ModalHeader>
          <div className="icon-box">
            <div onClick={() => setShow(!show)}>
              <svgs.HIDE_MODAL />
            </div>

            <select value={exchangeRate} onChange={handleCurrencyChange}>
              {currency.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <p className="modal-title">Your cart</p>
        </ModalHeader>
        <ModalContentContainer>
          <div className="modal-content">
            {cart.map((item, i) => (
              <CartCard
                key={i}
                title={item.label}
                image={item.image}
                count={item.count}
                price={item.price}
                totalCost={item.totalCost}
                cart={cart}
                setCart={setCart}
                increment={increment}
                decrement={decrement}
                exchangeRate={exchangeRate}
              />
            ))}
          </div>

          <ModalFooter>
            <hr />
            <div>
              <p>Subtotal</p>
              <p>
                {exchangeRate} {subTotal}
              </p>
            </div>
            <div>
              <button className="subscription">
                make this a subscription (save 20%)
              </button>
            </div>
            <div>
              <button className="proceed">proceed to checkout</button>
            </div>
          </ModalFooter>
        </ModalContentContainer>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
