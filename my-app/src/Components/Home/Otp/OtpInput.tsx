import React, { useEffect, useRef } from 'react';
import { current } from '@reduxjs/toolkit';

const OtpInput = ({ length = 4, onSubmitOtp }) => {

    const [otp, setOtp] = React.useState(new Array(length).fill(''));
    const inputRefs = useRef([])

    console.log(inputRefs);

    useEffect(() => {
        if (inputRefs.current[0]) {
            (inputRefs.current[0] as HTMLInputElement).focus();
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return false;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); // to allow only single digit
        setOtp(newOtp);
        console.log(otp, 'otp');
        console.log(newOtp, 'newOtp');

        const combinedOtp = newOtp.join('');
        if (combinedOtp.length === 4) {
            onSubmitOtp(combinedOtp);
        }

        // focus next input if first input is filled

        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            (inputRefs.current[index + 1] as HTMLInputElement).focus();
        }
    }

    const handleClick = (index) => {
        (inputRefs.current[index] as HTMLInputElement).setSelectionRange(1, 1);

        // if any field is empty and user direct goes without filling to another field

        if (index > 0 && !otp[index - 1]) {
            (inputRefs.current[otp.indexOf('')] as HTMLInputElement).focus();
        }
    }

    const handlekeydown = (e, index) => {
        if (e.key === 'Delete' || e.key === 'Backspace' && index > 0 && !otp[index] && inputRefs.current[index - 1]) {
            (inputRefs.current[index - 1] as HTMLInputElement).focus();
        }
    }

    return (
        <div className='flex gap-2'>
            {otp.map((value, index) => {
                return (
                    <input type='text' ref={(input) => (inputRefs.current[index] = input)} style={{ border: "2px solid black", width: 30, borderRadius: '6px', textAlign: 'center' }} key={index} value={value} onChange={(e) => handleChange(index, e)} onClick={() => handleClick(index)} onKeyDown={handlekeydown} />
                )
            })}
        </div>
    )
}
export default OtpInput;