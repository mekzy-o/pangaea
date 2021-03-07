import styled from 'styled-components';

export const PageContainer = styled.div`
    margin:0;
    padding: 0;
    position: relative;
`
export const TopContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 50px;
    div{
        display: flex;
        flex-direction: column;
        select{
            padding: 10px;
            width: 300px;
            border: 1px solid #CDD1CE;
            background: none;
        }
    }
    .filter-container{
        justify-content: flex-end;
    }
    .all-products{
       font-size: 30px;
       font-family:"Times New Roman";
       font-weight: none;
    }
    .products-info-text{
        font-size: 14px;
        margin-top: 10px;
    }
`

export const ContentContainer = styled.div`
    height:100%;
    background: #E3E6E3;
    overvflow-y: auto;
    padding-top: 100px;
`

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >* {
        width: 33%;
    }
    .child {
        display: flex;
        justify-content: center;
        flex: 0 0 33%;
    }
`