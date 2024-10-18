import React, { useEffect, useState } from "react";
import { ProgressBarStyles } from "./styles.ts";
import BarComponent from "./BarComponent.tsx";

const ProgressBar = () => {
    const [percentage, setPercentage] = useState<number>(0);
    const [currentPercentage, setCurrentPercentage] = useState<number>(percentage);

    useEffect(() => {
        setCurrentPercentage(Math.min(100, Math.max(percentage, 0)));
    }, [percentage]);

    useEffect(() => {
        setInterval(() => {
            setPercentage((prev) => prev + 1);
        }, 1000)
    }, [])

    return (
        <div style={{ border: '2px solid red', position: 'relative', width: 400, height: 50, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: `${currentPercentage}%`, transition: "width 1s", backgroundColor: 'green', height: '100%' }} className="fill"></div>
            <div className="percentage" style={{ position: 'absolute', left: '50%', right: '50%' }}>{currentPercentage}%</div>
        </div>
    )
    // const [percentage, setPercentage] = React.useState<number>(0);
    // const [currentPercentage, setCurrentPercentage] = React.useState<number>(percentage);

    // React.useEffect(() => {
    //     setCurrentPercentage(Math.min(100, Math.max(percentage, 0)));
    //     const fill = document.querySelector('.fill') as HTMLDivElement;
    //     if (fill) {
    //         fill.style.width = `${currentPercentage}%`;
    //     }
    // }, [percentage]);

    // React.useEffect(() => {
    //     setInterval(() => {
    //         setPercentage((per) => per + 1);
    //     }, 1000)
    // }, []);



    // return (
    //     <ProgressBarStyles>
    //         <BarComponent percentage={currentPercentage} />
    //     </ProgressBarStyles>
    // )
}
export default ProgressBar;