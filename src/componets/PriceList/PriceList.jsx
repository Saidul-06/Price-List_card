import React, { useState } from 'react';

const PriceList = () => {
    const [prices,setPrices]= useState([]);
    return (
        <div className='text-7xl bg-purple-700 font-bold p-4 text-center  text-purple-300'>
            <h1>Awsome price</h1>
        </div>
    );
};

export default PriceList;