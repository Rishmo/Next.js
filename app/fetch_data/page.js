"use client"
 import {useEffect, useState} from 'react';

 export default function FetchData() {

    const[product, setProduct] = useState([]);

    useEffect(async( ) => {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        console.log(data);  //client side rendering

        setProduct(data.products);
 }, [] );
    
        return (
            <div>
                <h1>Product List</h1>
                {
                    product.map((item) => {
                        return <h1>Name: {item.title}</h1>
                    })
                }
            </div>
        )
    }
