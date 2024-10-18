import React, { useEffect, useRef } from "react";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { getTableHeadUtilityClass } from "@mui/material";

interface Product {
    id: number;
    title: string;
    img: string;
    price: number;
}

const LoadMoreData = () => {

    const [products, setProducts] = React.useState<Product[]>([]);
    const [itemID, setItemID] = React.useState(0);
    const [fetching, setFetching] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);

    let items_per_age = 6;
    const API = 'https://fakestoreapi.com/products';
    console.log('api', API);

    // const fetchData = async () => {
    //     const response = await axios(API);

    //     console.log('response', response.data);
    // }

    // or 

    const fetchData = async () => {

        const response = await fetch(API);
        const productsList = await response.json();
        setProducts(productsList);
    }

    useEffect(() => {

        fetchData();

    }, [])


    // Array.prototype.MyFilter = function (cb: any) {
    //     let arr = [];
    //     for (let i = 0; i < this.length; i++) {
    //         if (cb(this[i], i, this)) {
    //             arr.push(this[i]);
    //         }
    //         // arr.push(cb(this[i], i, this))
    //     }
    //     return arr;
    // }

    // let arr = [1, 2, 3, 4];

    // let newArr = arr.MyFilter((num) => num > 3);
    // console.log('newArr', newArr);

    // Array.prototype.MyReduce = function (cb, initialValue) {
    //     var total = initialValue; // or total as accumulator
    //     for (let i = 0; i < this.length; i++) {
    //         total = total ? cb(total, this[i], i, this) : this[i];
    //     }
    //     return total;
    // }

    // let newArr = arr.MyReduce((num, currentIndexValue) =>  num + currentIndexValue);
    // console.log('newArr', newArr);

    const obj1 = {
        name: 'Sravya',
        age: 25
    }

    const hello = (name: string, age: number) => {
        return `Hello I am ${name} with an age  of ${age} years old`;
    }



    // Function.prototype.MyCall = function (obj = {}, ...args) {
    //     if (typeof this !== 'function') {
    //         throw new Error('Error with my call');
    //     }

    //     obj.fn = this;
    //     obj.fn(...args);
    // }

    Function.prototype.MyApply = function (obj = {}, args = []) {
        if (typeof this !== 'function') {
            throw new Error('Error with MyCall: The object being called is not a function');
        }
        if (!Array.isArray(args)) {
            throw new Error('Error with MyCall: The arguments should be an array');
        }

        // If no object is provided, default to the global object (window in browsers)
        obj = obj || globalThis;

        // Temporarily add the method to the object
        const fnSymbol = Symbol(); // Using a symbol to avoid overwriting an existing property
        obj[fnSymbol] = this;

        // Call the function with the provided arguments
        const result = obj[fnSymbol](...args);

        // Delete the temporary method from the object
        delete obj[fnSymbol];

        // Return the result of the function call (optional)
        return result;
    }
    const userAgent = navigator.userAgent;
    console.log(userAgent, 'userAgent');

    if (userAgent.includes('Firefox')) {
        console.log('This is FIreFox browser');
    }

    console.log(hello.MyApply(obj1, [obj1.name, obj1.age]));

    const MyUseEffect = function (cb, deps) {
        const isFirstRender = useRef(true);
        const prevDeps = useRef([]);


        if (isFirstRender.current) {
            isFirstRender.current = false;
            cb();
        }

        const prevDepsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;

        if (prevDepsChanged) {
            cb();
        }
        prevDeps.current = deps || [];
    }

    MyUseEffect(() => {
        console.log('useEffect');
    }, []);

    function JobPosting({ title, img, id, price }: Product) {
        return (
            <div className="product" role="listitem">
                <div>Title: {title}</div>
                <img src={img}></img>
                <div>Price: {price}</div>
            </div>
        )
    }

    console.log('products', products);

    const startPage = (currentPage - 1) * items_per_age;
    const currentItems = products.slice(0, startPage + items_per_age);



    return (
        <div className="App">
            <h1>Products List</h1>
            {currentItems.length < 1 ? <p>Loading....</p>
                : <div>
                    <div className="items" role="list">
                        {currentItems.map((product) => {
                            return (
                                <JobPosting title={product.title} img={product.img} id={product.id} price={product.price} />
                            )
                        })}
                    </div>
                    <button onClick={() => { setCurrentPage(currentPage + 1) }}>Load More..</button>
                </div>
            }
        </div>
    )
}

export default LoadMoreData;

