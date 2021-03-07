import styled from 'styled-components'

export const Container = styled.div`
    background: #FCFCFA;
    display: flex;
    padding: 0px 20px 0px 20px;
    box-shadow: 0 2px 3px -3px grey;
  
   div{
    display: flex;
    justify-content: center;
    align-items: center;
    >*{
        margin-right: 20px;
        font-size: 14px;
    }
    .title {
        font-size: 20px;
        letter-spacing: 10px;
     }
   }
   .left-container{
       margin-right: auto;

   }
`