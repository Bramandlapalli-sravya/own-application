import { error } from "console";
import React from "react";

export const Questions = ({ question, onOptionClick }) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>
                {question?.question}
            </h1>
            <ul className="flex gap-4 py-4">
                {question?.answerOptions.map((option, index) => {
                    return (
                        <li key={index}>
                            <button className="bg-blue-600 text-white py-1 px-2 rounded-lg ml-2" onClick={() => onOptionClick(option.isCorrect)}>{option.answerText}</button>
                        </li>
                    )
                })}
            </ul>
            <p id="error-msg"></p>
        </div>
    )
}