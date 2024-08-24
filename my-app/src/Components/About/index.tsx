import React, { useState } from "react";
import { PageStyles } from "../TopNavigation/styles.ts";

function About() {
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [showTimer, setShowTimer] = useState<any>([]);



    const startTimer = () => {
        const id = setInterval(() => {
            setTimer((num) => num + 1);
        }, 100);

        setIntervalId(id);
    }

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    const resetTimer = () => {
        setTimer(0);
        setShowTimer([]);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }


    const lapTimer = () => {
        //  showTimer.push(timer); // pushing to the same array will not trigger re-render
        // setShowTimer(showTimer);
        if (!showTimer.includes(timer) && timer !== 0 && intervalId) {
            setShowTimer([...showTimer, timer]);
        } // this will trigger re-render as it creates the different arrays with different references
    }



    const timerFormat = (time: any) => {
        let hour = Math.floor(time / 3600);
        let minute = Math.floor((time % 3600) / 60);
        let second = time % 60;

        return (
            <div className="flex">
                <h1>{hour < 10 ? `0${hour}` : hour}</h1>:
                <h1>{minute < 10 ? `0${minute}` : minute}</h1>:
                <h1>{second < 10 ? `0${second}` : second}</h1>
            </div>
        )
    }

    const startStop = () => {
        if (intervalId) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    const resetLap = () => {
        if (intervalId) {
            lapTimer();
        } else {
            resetTimer();
        }

    }

    console.log(intervalId, 'intervalID');

    return (
        <PageStyles>
            <div className="flex flex-col content-start">
                <div className="flex items-center">
                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2 mr-3" onClick={() => startStop()}>{!intervalId ? 'Start' : 'stop'}</button>
                    <h1 className="px-5 mb-0">{timerFormat(timer)}</h1>
                    {/* <button className={`${timer === 0 ? 'opacity-50 cursor-not-allowed' : 'focus:ring-4 focus:ring-purple-300'} focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2 mr-3`} onClick={() => stopTimer()}>Stop</button> */}
                    <button className={`${timer === 0 ? 'opacity-50 cursor-not-allowed' : 'focus:ring-4 focus:ring-purple-300'} focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2 ml-3`} onClick={() => resetLap()}>{intervalId ? 'lap' : 'Reset'}</button>
                    {/* <button className={`${timer === 0 ? 'opacity-50 cursor-not-allowed' : 'focus:ring-4 focus:ring-purple-300'} focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2 ml-3`} onClick={() => lapTimer()}>lap</button> */}
                </div>
                <div>
                    {showTimer.map((time, index) => {
                        return (
                            <div className="flex" key={index}><span>{`${index + 1} stop:`}</span><span className="ml-2">{timerFormat(time)}</span></div>
                        )
                    })}
                </div>
            </div>
        </PageStyles>
    )
}

export default About;