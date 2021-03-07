import styled from "styled-components";

export const Container = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
  padding: 10px 20px;
  margin: 0px 0px 20px 0px;
  background: white;
  height: 120px;
  display: flex;
  justify-content: space-between;
  .money-box {
    align-self: flex-end;
    color: #838b8a;
    margin-bottom: 10px;
  }
  .image-box {
    align-self: center;
    margin-right: 40px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

export const ProductDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .product-title {
    color: #6b7674;
    weight: 600;
  }
  .product-count {
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border: 1px solid #bcbcbc;
    width: 80px;
    height: 40px;
    padding: 10px 0px 10px 0px;
    input {
      width: 10px;
      border: 0px;
      outline: none;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      outline: none;
    }
  }
`;
