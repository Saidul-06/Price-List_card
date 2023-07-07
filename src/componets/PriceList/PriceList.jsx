import React, { useEffect, useState } from 'react';
import PricecCard from '../Pricecard/PricecCard';

const PriceList = () => {
    const [prices,setPrices]= useState([]);
    useEffect (()=>{
        fetch('prices.json')
        .then(res=> res.json())
        .then(data=> setPrices(data));

    },[])
    return (
        <div className='mx-12'>
            <h1 className='text-7xl bg-purple-700 font-bold p-4 text-center  text-purple-300'>Awsome Affordable Price</h1>
          <div className='grid md:grid-cols-4 gap-3'>
          {
                prices.map(price => <PricecCard
                key={price.id}
                price = {price}
                ></PricecCard>)
            }
          
          </div>
        </div>
    );
};

export default PriceList;