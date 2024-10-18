import React, { useState } from "react";

const TelephoneFormatter = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        const regex = '\b([1-9]|10)\b';
        if (value.includes(regex)) { console.log(value, 'valueeee') };
        // if (value.length === 3) {
        //     const splitToThreeNums = value.slice(0, 3);
        //     const extraNums = value.slice(3);
        //     const formattedNums = (`+(${splitToThreeNums}) - ${extraNums}`);
        //     setInputValue(formattedNums);
        // } else {
        //     setInputValue(value);
        // }
    }

    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <div>Telephone Formatter</div>
            <input type="text" className="border w-3/4 rounded p-2" placeholder="Enter the sentences" value={inputValue} onChange={handleInputChange} />

        </div>
    )
}

export default TelephoneFormatter;