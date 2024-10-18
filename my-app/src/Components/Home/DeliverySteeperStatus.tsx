import React, { useEffect, useState } from "react";

const DeliverySteeperStatus = () => {

    const [step, setStep] = useState(0);

    const steps = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },

    ]
    console.log(steps.length !== steps.length - 1, 'steps.length');

    useEffect(() => {
        const steps = document.querySelectorAll('#step');
        let stepNumber = steps[0] as HTMLElement;
        stepNumber.style.backgroundColor = 'blue';
        stepNumber.style.color = 'white';
    })


    const updatedStatus = (index) => {
        const steps = document.querySelectorAll('#step');
        let stepNumber = steps[index + 1] as HTMLElement;
        const border = document.querySelectorAll('#border');
        let borderStatus = border[index] as HTMLElement;
        for (let i = 0; i < steps.length; i++) {
            if (i <= index)
                stepNumber.style.color = 'white';
            // console.log(i, index, 'i', 'index');
        }

        for (let i = 0; i < steps.length; i++) {
            if (borderStatus) {
                if (i <= index) {
                    borderStatus.style.borderColor = 'blue';
                }
            }
            console.log(index, 'i-border');
        }
    }

    const updatedStatusNext = () => {
        if (step === steps.length - 1) return;
        setStep(step + 1);
        updatedStatus(step);
    }


    return (
        <div className="flex flex-col justify-between items-center">
            <div className="flex">
                {steps.map((step, index: any) => {
                    return (
                        <div key={step.number} className="flex items-center">
                            <div className="border-2 p-4" id="step" style={{ borderRadius: '50px' }}>{step.number}</div>
                            {index < steps.length - 1 &&
                                <div style={{
                                    borderBottom: "2px solid",
                                    width: 200
                                }} id="border"></div>}
                        </div>
                    )
                })}
            </div>
            <button className="bg-blue-800 text-white p-2 rounded-lg ml-2" onClick={updatedStatusNext}>Next</button>
        </div >
    )
}

export default DeliverySteeperStatus;