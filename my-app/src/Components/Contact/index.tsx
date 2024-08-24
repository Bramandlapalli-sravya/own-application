import React, { useEffect } from "react";
import axios from 'axios';

function Contact() {
    // using fetch method for getting api data

    const [products, setProducts] = React.useState<any>([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data => setProducts(data));
    // })

    // In fetch method we have to convert the response to json format and then set the data to the state

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(data => setProducts(data.data));
    })

    // In axios method we can directly get the data by converting only. As axios converts and returns the data in json format

    return (
        <div className=" grid grid-cols-4 w-full h-full">
            {products.map((product) => {
                return (
                    <div className="flex flex-col items-center gap-3">
                        <div>{product.title}</div>
                        <img src={product.image} style={{ height: '200px', maxWidth: '300px' }}></img>
                        <div>{product.price}</div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Contact;

