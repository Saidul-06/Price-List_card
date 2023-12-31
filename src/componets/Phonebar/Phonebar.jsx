import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Phonebar = () => {
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data=> setPhones(data));
        axios.get ('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const Phones = data.data.data;
           const PhonesData = Phones.map(phone => {
            const parts = phone.slug.split('-')
            const price = parseInt(parts[1]);

            const phoneInfo = {
                name : phone.phone_name,
                price : price
            }
                return phoneInfo;
            
           })
           console.log(PhonesData);
           setPhones(PhonesData)
        });
    },[]);



    return (
        <div>
            <BarChart
             
            width={1000}
            height ={300}
            data={phones}>
                     <Bar dataKey="price" fill="#8884d8" />
                     <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
        </div>
    );
};

export default Phonebar;