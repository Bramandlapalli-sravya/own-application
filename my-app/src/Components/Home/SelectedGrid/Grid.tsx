import React from "react";
import Grid from "./SelectedGrid.tsx";

const SelectedGrid = () => {
    return (
        <div>
            <h1>Select Grids</h1>
            <div>
                <Grid rows={10} cols={10} />
            </div>
        </div>
    )
}

export default SelectedGrid;