import axios from "axios";
import React from "react";
import { useEffect } from "react";

const RestAPIReqMethods = () => {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => console.log(res.data))
    })

    useEffect(() => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            userID: 1,
            name: 'srqvs',
        }).then((res) => console.log(res.data, 'put'))
    })

    useEffect(() => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
            userID: 1,
            name: 'srqvs',
        }).then((res) => console.log(res.data, 'patch'))
    })

    return (
        <div>
            <h1>RestAPIReqMethods</h1>
        </div>
    );
}

export default RestAPIReqMethods;