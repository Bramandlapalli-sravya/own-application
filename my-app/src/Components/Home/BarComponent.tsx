import React from "react";

const BarComponent = ({ percentage }) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="progress" id="progress">
                <div className="progress-text">{percentage}%</div>
                <div className="fill"></div>
            </div>
        </div>
    )
}

export default BarComponent;