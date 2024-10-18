import React, { useState } from "react";
import OtpInput from "./OtpInput.tsx";

const Otp = () => {

    const [phoneNumber, setPhoneNumber] = useState();
    const [otpScreen, setOtpScreen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setOtpScreen(true);
    }

    const handleOnChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        const regex = /^[0-9]{10}$/;
        if (value.length > 10 || regex.test(value) || isNaN(value)) {
            alert('Please enter a valid phone number');
        }

    }

    const handleSubmitOtp = () => {
        console.log('Otp submitted');
    }

    return (
        <div>
            {!otpScreen ?
                <form onSubmit={handleSubmit}>
                    <label className="pe-3">Enter your phone number</label>
                    <input style={{ border: '2px solid black' }} type="text" value={phoneNumber} onChange={handleOnChange} />
                    <button type="submit">Submit</button>
                </form>
                :
                <>
                    <h1>Otp is sent to {phoneNumber}</h1>
                    <OtpInput length={4} onSubmitOtp={handleSubmitOtp} />
                </>
            }
        </div>
    )
}

export default Otp;