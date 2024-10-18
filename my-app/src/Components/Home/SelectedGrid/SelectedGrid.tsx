import React, { useState } from "react";

const Grid = ({ rows, cols }) => {

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState<any>([]);

    const handleMouseDown = (boxNumber) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    }

    const handleMouseEnter = (boxNumber) => {
        if (isMouseDown) {
            const startBox = selectedBoxes[0];
            const endBox = boxNumber;

            const startRow = Math.floor((startBox - 1) / cols);
            const startCol = (startBox - 1) % cols;
            const endRow = Math.floor((endBox - 1) / cols);
            const endCol = (endBox - 1) % cols;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);
            const minCol = Math.min(startCol, endCol);
            const maxCol = Math.max(startCol, endCol);

            const Selected: any = [];

            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    Selected.push(row * cols + col + 1);
                }
            }

            setSelectedBoxes(Selected);
            console.log(Selected);
        }
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }


    return (
        <div>
            <div className="grid" style={{ "--rows": rows, '--cols': cols } as React.CSSProperties} onMouseUp={handleMouseUp}>
                {[...Array(rows * cols).keys()].map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={`box ${selectedBoxes.includes(i + 1) ? 'selected' : ''}`}
                            onMouseDown={() => handleMouseDown(i + 1)}
                            onMouseEnter={() => handleMouseEnter(i + 1)}>
                            {i + 1}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Grid;