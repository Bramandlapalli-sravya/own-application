import React from "react";

const Anagram = () => {
    let a = "geeksforgeeks";
    let b = "forgeeksgeeks";

    // let sortA = a.split('').sort().join('');
    // console.log(sortA, 'sortA');

    // let sortB = b.split('').sort().join('');
    // console.log(sortB, 'sortB');

    // if (sortA === sortB) {
    //     return 'Its an anagram'
    // } else {
    //     return 'Its not an anagram'
    // }

    // The sorting method (O(n log n)) is indeed slower than the counting characters method (O(n)) for checking if two strings are anagrams.


    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < a.length; i++) {
        obj1[a[i]] = (obj1[a[i]] || 0) + 1;
        obj2[b[i]] = (obj2[b[i]] || 0) + 1;

        console.log(obj1, 'obj1', obj2, 'obj2');
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return 'Its not an anagram'
        }
    }

    return 'Its an anagram';

    // The counting characters method is faster because it only needs to iterate through each string once to count the characters in each string.

}
export default Anagram;