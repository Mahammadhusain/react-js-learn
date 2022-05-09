import React from 'react';
// Hook (useParams) For Access Dynamic url params
// Hook (useSearchParams) Manipulate dynamic url's query params
import {useParams,useSearchParams} from 'react-router-dom'


const Products = () => {
  // Access category and it's id using useParams hook
  // do object destructuring
  let {category,id} = useParams()

  // using useSearchParams() hook you can more query parameter
  let [searchParams,setSearchparms] = useSearchParams()
  console.log(searchParams.get('price'));
  console.log(searchParams.get('sort'));
  // url for test
  // http://localhost:3000/products/mobile/1?price=150&sort=asc
  
  return(
      <>
        <h2>Products Page with category = {category}</h2>
        <h2>Products Page with category and it's Id = {id}</h2>
        <h2>Products Price Params  = {searchParams.get('price')}</h2>
        <h2>Products Sorted  = {searchParams.get('sort')}</h2>
      </>
  );
};
export default Products
