import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { BoxStyles } from './styles.ts';

const GridLights = () => {

    // const chechPassword = (success, failed) => {
    //     let password = prompt('Enter password', '');
    //     if (password === '1234') return success(); else return failed();
    // }

    // let user = {
    //     name: 'John',
    //     age: 25,
    //     loginDetails() {
    //         return `${this.name} is ${this.age} years old passed`;
    //     },
    //     loginFailedDetails() {
    //         return `${this.name} is ${this.age} years old failed`;
    //     }
    // }

    // console.log(chechPassword(user.loginDetails, user.loginFailedDetails));

    // const [clickedbox, setClickedbox] = React.useState<any>([]);
    // const boxes = [
    //     { title: "Box 1", id: 1 },
    //     { title: "Box 2", id: 2 },
    //     { title: "Box 3", id: 3 },
    //     { title: "Box 4", id: 4 },
    //     { title: "Box 5", id: 5 },
    //     { title: "Box 6", id: 6 },
    //     { title: "Box 7", id: 7 },
    //     { title: "Box 8", id: 8 },
    //     { title: "Box 9", id: 9 },
    // ]

    // const handleClick = (index) => {
    //     const clickedBoxNew = [...clickedbox, index];
    //     console.log(clickedBoxNew, 'clickedBox');
    //     setClickedbox(clickedBoxNew);
    //     const div = document.getElementsByClassName("box");
    //     console.log(div.length, 'div length');
    //     if (div[index]) {
    //         div[index].classList.add('bg-red-500');
    //     }
    //     console.log(clickedBoxNew.length, 'clickedbox length');
    //     if (clickedBoxNew.length === div.length) {
    //         clickedBoxNew.reverse().forEach((index, i) => {
    //             setTimeout(() => {
    //                 if (div[clickedBoxNew[index]]) {
    //                     div[clickedBoxNew[index]].classList.remove('bg-red-500');
    //                 }
    //             }, 1000 * i);
    //         });
    //     }
    // }


    // console.log(clickedbox, 'clickedbox');
    // return (
    //     <BoxStyles>
    //         <div className='grid grid-cols-3'>
    //             {boxes.map((box, index) => {
    //                 return (
    //                     <div className="box" key={box.id} onClick={() => handleClick(index)}>
    //                         <h1>{box.title}</h1>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </BoxStyles>
    // )


    const [clickedbox, setClickedbox] = React.useState<any>([]);
    const boxes = [
        { title: "Box 1", id: 1 },
        { title: "Box 2", id: 2 },
        { title: "Box 3", id: 3 },
        { title: "Box 4", id: 4 },
        { title: "Box 5", id: 5 },
        { title: "Box 6", id: 6 },
    ]

    const handleClick = (index) => {
        const newclickedboxes = [...clickedbox, index];
        setClickedbox(newclickedboxes);
        console.log(newclickedboxes, 'newclickedboxes');
        const div = document.getElementsByClassName('border');
        if (div[index]) {
            div[index].classList.add('bg-red-500');
        }
        if (newclickedboxes.length === div.length) {
            newclickedboxes.forEach((index, i) => {
                setTimeout(() => {
                    div[newclickedboxes[i]].classList.remove('bg-red-500');
                }, 1000 * i);
            })
        }

    }

    return (
        <div className='grid grid-cols-3'>
            {boxes.map((box, index) => {
                return (
                    <div key={box.id} className='border' onClick={() => handleClick(index)}>{box.title}</div>
                )
            })}
        </div>
    )

    // const [counter, setCounter] = React.useState(0);
    // const [counter2, setCounter2] = React.useState(100);

    // const sqaureValue = () => {
    //     console.log('sqaureValue');
    //     return counter * counter;
    // }

    // const memoizedSqaureValue = useMemo(sqaureValue, [counter]);

    // return (
    //     <div className='flex flex-col'>
    //         <p>squarevalue: {memoizedSqaureValue}</p>
    //         <button onClick={() => setCounter(counter + 1)}>Counter 1: {counter}</button>
    //         <button onClick={() => setCounter2(counter2 - 1)}>Counter 2: {counter2}</button>
    //     </div>
    // )



}

export default GridLights;