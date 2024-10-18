import { Button } from "@mui/material";
import React from "react";
import { useTicTac } from '../../../hooks/useTicTac.tsx';

export const TicTac = () => {

    const { board, getStatusMessage, resetGame, handleClick } = useTicTac();

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Tic Tac Toe</h1>
            <div className="flex items-center justify-between w-1/4">
                <div className="status">
                    {getStatusMessage()}
                </div>
                <Button onClick={resetGame}>Reset Button</Button>
            </div>
            <div className="board grid grid-cols-3 w-3/4">
                {board.map((b, index) => {
                    return (
                        <Button style={{ border: '2px solid gray', padding: 20, }} key={index} onClick={() => handleClick(index)} disabled={b != null}>{b}</Button>
                    )
                })}
            </div>
        </div>
    )
};