import React, { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState<any>('');

    const Increment = () => {
        if (inputValue) {
            setCounter(counter + parseInt(inputValue));
        } else {
            setCounter(counter + 1);
        }
    }

    const Decrement = () => {
        if (inputValue) {
            setCounter(counter - inputValue);
        } else {
            setCounter(counter - 1);
        }
    }

    const Reset = () => {
        setCounter(0);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div style={{fontSize: 40}}>{counter}</div>
            <div className="flex gap-3">
                <button className="border px-4 py-2 rounded" onClick={Increment}>+</button>
                <button className="border px-4 py-2 rounded" onClick={Decrement}>-</button>
            </div>
            <div className="flex items-center gap-2">
                <p>Increment/Decrement by:</p> <input className="border px-4 py-2 rounded" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <button className="border px-4 py-2 rounded" onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;