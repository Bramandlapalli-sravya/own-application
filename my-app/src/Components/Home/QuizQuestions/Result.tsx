import React, { useEffect } from "react"

export const Result = ({ userAnswers, questions, resetQuiz = () => { } }) => {

    const correctAnswers = userAnswers.filter((answer) => answer === true).length;

    useEffect(() => {
        const listItems = document.querySelectorAll('li');
        listItems.forEach((listItem, index) => {
            if (listItem.getAttribute('data-correct') === 'true') {
                listItem.style.color = 'green';
            } else {
                listItem.style.color = 'red';
            }
        })
    }, [userAnswers])
    return (
        <div className="flex flex-col">
            <div className="flex">
                <h1>Results :</h1>
                <p>You answered {correctAnswers}  out of {questions.length} questions</p>
            </div>
            <button className={`${questions.length === correctAnswers ? "bg-blue-800" : "bg-blue-300"} text-white py-1 px-2 mt-4 rounded-lg ml-2`} onClick={resetQuiz}>Reset</button>
            {questions.length && <ul>
                {questions.map((question, index) => {
                    return (
                        <li key={index} className="flex flex-col items-center correct" data-correct={userAnswers[index]}>
                            <h1>{question.question}</h1>
                        </li>
                    )
                })}
            </ul>}
        </div >
    )
}