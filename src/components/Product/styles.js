import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
    p {
        margin:0;
    }
    .product-info {
        button{
            width: 200px;
            padding: 20px 30px 20px 30px;
            border: none;
            background:#4B5548;
            color:white;
        }
        p {
            margin: 10px;
        }
        margin-bottom: 100px;
    }
    .product-container{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
       .photo{
        max-width: 250px;
        max-height: 200px;
       }
        
    }

`