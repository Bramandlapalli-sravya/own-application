import React, { useCallback, useEffect, useRef, useState } from "react";

export const UseThrottleComponent = () => {

    function useThrottle(callback, delay) {
        const lastCall = useRef(0);

        return useCallback((...args) => {
            const now = Date.now();
            if (now - lastCall.current >= delay) {
                lastCall.current = now;
                callback(...args);
            }
        }, [callback, delay]);
    }

    const [updateScreen, setUpdateScreen] = useState({
        width: 0,
        height: 0,
    });

    const update = () => {
        setUpdateScreen({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    const handleResize = useThrottle(update, 1000);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <div>
            <h1>{`${updateScreen.width} * ${updateScreen.height}`}</h1>
        </div>
    )
};