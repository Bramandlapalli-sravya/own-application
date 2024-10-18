import React, { useEffect, useState } from "react";

const GuessTheNumber = () => {

    const [inputValue, setInputValue] = useState<number | any>();
    const [guessNumberInput, setGuessNumberInput] = useState<number | any>();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const generateNumber = () => {
        let guessNumber = Math.floor(Math.random() * 100);
        console.log(guessNumber, 'guessnumber');
        setGuessNumberInput(guessNumber);
    }

    useEffect(() => {
        generateNumber();
    }, [])

    const onSumbit = () => {
        const message = document.getElementById('message');
        if (message) {
            if (inputValue == guessNumberInput) {
                message.innerHTML = 'Yeyyy you guessed it right'
            } else
                if (inputValue < guessNumberInput) {
                    message.innerHTML = 'its low'
                } else if (
                    inputValue > guessNumberInput
                ) {
                    message.innerHTML = 'your high'
                }
        }

    }

    const onStart = () => {
        setInputValue('');
        generateNumber();
        const message = document.getElementById('message');
        if (message) {
            message.innerHTML = '';
        }
    }


    return (
        <div className="flex flex-col justify-center items-center p-4 gap-3">
            <h1>GuessTheNumber</h1>
            <p>Enter a guess between 0 and 100</p>
            <input
                type="number"
                style={{
                    border: '2px solid black',
                    width: 300, padding: '10px 20px',
                    borderRadius: 20
                }}
                placeholder="Enter the guess number"
                value={inputValue}
                onChange={handleChange}
            />
            <div className="flex gap-5">
                <button className="border px-3 py-2" onClick={onSumbit}>Submit</button>
                <button className="border px-1 py-2" onClick={onStart}>Start Game</button>
            </div>
            <div id="message"></div>
        </div>
    )
}

export default GuessTheNumber;