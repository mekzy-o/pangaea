import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GETPRODUCTS } from '../../graphqlQueries/getProducts';
import {GET_CURRENCIES} from '../../graphqlQueries/getCurrencies';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { TopContainer, ContentContainer, ProductContainer, PageContainer } from './styles';

const Home = () => {
    const [currency, setCurrency] = useState([]);
    const [cart, setCart] = useState([]);
    const [exchangeRate, setExchangeRate] = useState("USD")
    const {data, loading, refetch, error} = useQuery(GETPRODUCTS, {
        variables:{
            currency:exchangeRate
        }
    });
    const {data:currencyData, loading: currenciesLoading, error: currencyError} = useQuery(GET_CURRENCIES);
   useEffect(() =>{
        if(!currenciesLoading){
            setCurrency(currencyData.currency);
        }
   }, [currencyData, currenciesLoading, exchangeRate, currency, cart])
 return(
     <PageContainer>
     <Header cart={cart}/>
     <TopContainer>
         <div className='products-info'>
             <p className='all-products'>All Products</p>
             <p className='products-info-text'>A 360<sup>o</sup> look at Lumin</p>
         </div>
         <div className='filter-container'>
          <select>
              <option>Filter by</option>
          </select>
         </div>
     </TopContainer>
     <ContentContainer>
    <ProductContainer>
    {loading && (<p>Products Loading......</p>)}
    {!loading && data?.products.map((item, i) => (
       <div className='child' key={item.id}>
        <Product label={item.title} image={item.image_url} price={item.price} cart={cart} setCart={setCart} currency={currency} exchangeRate={exchangeRate} setExchangeRate={setExchangeRate} refetch={refetch}/>
        </div>
    ))}
    </ProductContainer>
     </ContentContainer>
     
     </PageContainer>
 )
}

export default Home;