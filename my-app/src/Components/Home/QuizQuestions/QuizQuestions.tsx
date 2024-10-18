import React, { useState } from "react"
import { Questions } from "./Questions.tsx";
import questions from '../QuizQuestions/QuizQuestions.json';
import { Result } from "./Result.tsx";

export const QuizQuestions = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>([]);

    const handleOptionClick = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswers([...userAnswers, isCorrect]);
    }

    console.log(userAnswers, 'userAnswers');

    const reset = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
    }

    return (
        <div className="flex flex-col items-center">
            <h1>World Quiz</h1>
            {questions.length > currentQuestion && <Questions question={questions[currentQuestion]} onOptionClick={handleOptionClick} />}
            <Result userAnswers={userAnswers} resetQuiz={reset} questions={questions} />
        </div>
    )
}