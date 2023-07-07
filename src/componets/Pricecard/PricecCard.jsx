import React from 'react';
import Feature from '../Feature/Feature';


const PricecCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
           <h2 >
            <span className='text-5xl text-purple-500 font-extrabold'> {price.price}</span>
           <span className='text-2xl'>/mon</span>
           </h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
            <p className='font-bold text-white underline '> Features :</p>
              <p>
                {
                    price.features.map((feature,idx) => <Feature
                    key={idx}
                    feature ={feature}>

                    </Feature> )
                }
                <button className=' mt-auto hover:bg-green-300 w-full bg-green-400 rounded-md'>Buy Now</button>
              
                  
              </p>
        </div>
        
    );
};

export default PricecCard;