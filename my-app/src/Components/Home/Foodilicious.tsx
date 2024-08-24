import React, { useEffect, useState } from "react";
import { DessertScreen } from "./styles.ts";
import BurgerImg from "../../images/burger.jpeg";
import NoodlesImg from "../../images/Noodles.jpeg";
import PanCakeImg from "../../images/panCake.jpeg";
import FrenchFries from "../../images/french_fries.jpeg";
import ChickenLegPiece from '../../images/chicken_leg_piece.jpeg';
import Dokla from '../../images/dokla.jpeg';
import VegRolls from '../../images/veg_rolls.jpeg';
import Chicken_nuggets from '../../images/chicken_nuggets.jpeg';
import { MyModal } from "./Modal/Modal.tsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice.js";
import axios from 'axios';
// import { addToCart } from "../store/cartSlice.js";

const Foodilicious = () => {
    // const [cart, setCart] = useState<any>([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart);
    // const removeItems = useSelector((state: any) => state.updatedCart);

    const listofItems = [
        { id: 1, img: BurgerImg, name: "Burger", price: '$6.5', quantity: 1 },
        { id: 2, img: NoodlesImg, name: "Noodles", price: '$8', quantity: 1 },
        { id: 3, img: PanCakeImg, name: "Pan Cake", price: '$7.8', quantity: 1 },
        { id: 4, img: FrenchFries, name: "French Fries", price: '$5.5', quantity: 1 },
        { id: 5, img: ChickenLegPiece, name: "Chicken Leg Piece", price: '$9', quantity: 1 },
        { id: 6, img: Dokla, name: "Dokla", price: '$6.4', quantity: 1 },
        { id: 7, img: VegRolls, name: "Veg Rolls", price: '$12', quantity: 1 },
        { id: 8, img: Chicken_nuggets, name: "Chicken Nuggets", price: '$10', quantity: 1 }
    ];

    // const addToCart = (newItem) => {
    //     setCart(currentCart => {
    //         const itemIndex = currentCart.findIndex(item => item.id === newItem.id);
    //         if (itemIndex > -1) {
    //             // Item exists, update quantity
    //             // Create a new array with updated item
    //             const updatedCart = currentCart.map((item, index) => {
    //                 if (index === itemIndex) {
    //                     return { ...item, quantity: item.quantity + 1 };
    //                 }
    //                 return item;
    //             });
    //             return updatedCart;
    //         } else {
    //             // Item doesn't exist, add new item with quantity 1
    //             return [...currentCart, newItem];
    //         }
    //     });
    // };

    const [isModal, setIsModal] = useState(false);
    const [removeItem, setRemoveItem] = useState<any>([]);

    const cartRemovedItems = () => {

        return (
            removeItem.length > 0 && (
                <div className="flex flex-col items-center pb-4">
                    <p className="pr-1 pb-3">You are missing {removeItem.length === 1 ? 'this item' : 'these items'}</p>
                    <ul>
                        {removeItem.map((item: any) => (
                            <li key={item.id} style={{ listStyle: 'inside' }}>
                                {item.name}
                            </li>)
                        )}
                    </ul>
                </div>
            )
        )
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => console.log(response, 'get-request')); //get request 
    })

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            userId: 0,
            id: 0,
            title: 'Order Confirmed',
        }).then((response) => console.log(response, 'post-request')).catch((error)=> console.log('here is', error)); // post request - to add 
    })

    useEffect(() => {
        axios.put('https://jsonplaceholder.typicode.com/todos/4', {
            userId: 0,
            id: 0,
            title: 'Order Confirmed',
        }).then((response) => console.log(response, 'put-request')); // put request - to modify 
    })

    useEffect(() => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/4').then((response) => console.log(response, 'delete-request')); // delete request - to modify 
    })

     async function getDetails() {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response, 'get-request');
        } catch (error){
            console.log('error', error);
        }
     }



    const orderDescription = () => {
        return (
            <div className="flex flex-col items-center justify-center">
                {cartItems.length > 0 && (
                    <>
                        <div className="p-2 bg-lime-500 flex items-center justify-center rounded-full mb-4">
                            <i className="fa fa-check" aria-hidden="true" style={{ color: 'white' }}></i>
                        </div>
                        <h3 className="font-extrabold">Order Confirmed</h3>
                    </>
                )}
                <div className={`flex flex-1 flex-col w-full p-3`}>
                    <div className="w-full overflow-y-auto h-100 sm:h-60 flex flex-col justify-center items-center">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between w-full p-2">
                                    <div className="flex items-center w-72">
                                        <img src={item.img} alt={item.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                                        <span className="pl-3">{item.name}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-16 text-center pl-3">Qty: {item.quantity}</span>
                                        <span className="w-16  text-[#088f08] font-extrabold pl-5">{item.price}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <i className='fas fa-cart-plus' style={{ fontSize: 60 }}></i>
                                <p className="pt-5">Your cart is empty</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    {cartRemovedItems()}
                </div>
                {cartItems.length > 0 && (
                    <div className="w-full p-5 pt-0">
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold">
                            <span>Order Total:</span>
                            <span className="text-[#088f08]">
                                {cartItems.reduce((total, item) => {
                                    const itemPrice = parseFloat(item.price.replace('$', ''));
                                    return total + itemPrice * item.quantity;
                                }, 0).toFixed(2)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

        )
    }
    return (
        <DessertScreen>
            <h1>Desserts</h1>
            <div className="flex flex-1 flex-col sm:flex-row">
                <div className="gap-5 p-3 grid grid-cols-1 md:grid-cols-4 sm:w-9/12">
                    {listofItems.map((item) => {
                        const cartItem = cartItems.find((cartItem: any) => cartItem.id === item.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        return (
                            <div key={item.id}>
                                <div className="relative">
                                    <img src={item.img} alt={item.name} className="rounded-3xl" style={{ objectFit: 'cover', width: 300, height: 200 }} />
                                    <button className="absolute bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 border border-stone-400 font-bold py-2 px-4 rounded-full"
                                        onClick={() => dispatch(addToCart(item))}
                                    >
                                        <i className="fa fa-shopping-cart mr-2" aria-hidden="true" style={{ fontSize: 20 }}></i>
                                        {quantity > 0 ? `+ ${quantity}` : 'Add to Cart'}
                                    </button>
                                </div>
                                <div className="price-details">
                                    <h2>{item.name}</h2>
                                    <strong className="text-[#d7901e]">{item.price}</strong>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center sm:w-3/12 h-full">
                    <div className="bg-white border-2 rounded-lg flex flex-col items-center justify-start w-full p-4">
                        <h2 className="cart-title">Your Cart ({cartItems.length})</h2>
                        <div className={`flex ${cartItems.length > 0 ? 'justify-start' : 'justify-center'} items-center flex-1 flex-col w-full overflow-auto p-3`}>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={item.id} className="flex items-center justify-between w-full p-2">

                                        <img src={item.img} alt={item.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                                        <span className="w-3/6 pl-3">{item.name}</span>
                                        <span className="w-2/6 text-center pl-3">Qty: {item.quantity}</span>
                                        <span className="w-2/6 text-[#088f08] font-extrabold pl-3">{item.price}</span>

                                        <button onClick={() => {
                                            dispatch(removeFromCart(item.id));
                                            setRemoveItem([...removeItem, item]);
                                        }
                                        }>
                                            <i className="fas fa-trash">
                                            </i>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col justify-center items-center">
                                    <i className='fas fa-cart-plus' style={{ fontSize: 60 }}></i>
                                    <p className="pt-5">Your added items will appear here</p>
                                </div>
                            )}
                        </div>
                        <MyModal isOpen={isModal} isCloseModal={() => setIsModal(!isModal)}>
                            {orderDescription()}
                        </MyModal>
                        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2" onClick={() => setIsModal(true)}>Confirm Order</button>
                    </div>
                </div>
            </div >
        </DessertScreen>
    );
};

export default Foodilicious;
