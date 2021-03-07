import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background:rgba(0, 0, 0, 0.25);
    transition: 0.3s;
`
export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    background:#F2F2EF;
    padding: 0px 15px 0px 15px;
`
export const ModalHeader = styled.div`
    display: flex;
    padding: 10px;
    .modal-title{
        text-transform: uppercase;
        color: #C6C7C5;
        font-weight: 600;
        margin-right: 180px;
    }
    .icon-box{
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid #BCBCBC;
        height: 30px;
        width: 30px;
        margin: 10px;
        cursor: pointer;
    }
    margin-right: auto;
}
`
export const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 700px;
    .modal-content{
        width: 500px;
        overflow-y: scroll;
        p {
            margin: 0;
            padding: 0;
        }
    }
`
export const ModalFooter = styled.div`
  div{
      display: flex;
      justify-content: space-between;
      .subscription, .proceed {
          width: 100%;
          border: none;
          margin-bottom: 10px;
          text-transform: uppercase;
      }
      .subscription {
        border: 1px solid;
        background: #FFFFFF;
        color:#B6B6B5;
        padding: 15px 0px; 
      }
      .proceed {
          background: #4B5548;
          color:#AAAEA9;
          padding: 15px 0px;
      }
  }
`