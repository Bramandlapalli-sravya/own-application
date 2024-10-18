import React, { useState } from "react";
import { ThemeStyles } from "./styles.ts";
import { useTheme } from "../../hooks/useThemeHook.js";

const DarkLightTheme = () => {

    // const [lightTheme, setLightTheme] = useState(false);

    const { themeValue, toggleTheme } = useTheme();

    return (
        // this with normal state 
        // <ThemeStyles>
        //     <div className={`${lightTheme && 'dark-theme-color'} flex flex-col justify-center items-center gap-3 w-full h-full`}>
        //         <h1>Heyyy welcome to {!lightTheme ? "Light" : 'Dark'} theme.</h1>
        //         <h1>Do you want to go for {lightTheme ? "Light" : 'Dark'} theme ? then press below button</h1>
        //         <button className="border px-3 py-2" onClick={() => setLightTheme(!lightTheme)}>{lightTheme ? "Light" : 'Dark'}</button>
        //     </div>
        // </ThemeStyles>

        // this with custom hook which is using context api so that we can avoid prop drilling
        <ThemeStyles>
            <div className={`${(themeValue === 'dark') && 'dark-theme-color'} flex flex-col justify-center items-center gap-3 w-full h-full`}>
                <h1>Heyyy welcome to {themeValue} theme.</h1>
                <h1>Do you want to go for {themeValue === 'light' ? 'dark' : 'light'} theme ? then press below button</h1>
                <button className="border px-3 py-2" onClick={toggleTheme}>{themeValue === 'light' ? 'dark' : 'light'}</button>
            </div>
        </ThemeStyles>

    )
}

export default DarkLightTheme;