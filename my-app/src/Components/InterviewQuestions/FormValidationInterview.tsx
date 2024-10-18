import { isAscii } from "buffer";
import { useRef, useState } from "react";
import React from "react";

export default function FormValidationInterview() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // this is another solution
    const upperCase = ['A', "B", "C", "D", 'E', "F", "G", "H", 'I', "J", "K", "L", 'M', "N", "O", "P", 'Q', "R", "S", "T", 'U', "V", "W", "X", 'Y', "Z"];

    const isUpper = upperCase.includes(password[0]);

    console.log("isUpper", isUpper);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            console.log("email should contain @");
        } else {
            console.log("Email" + ": " + email);
        }
        const isUpperRegex = /^[A-Z]/; // this is one solution
        const isUpperAscii = password.charCodeAt(0) < 65 || password.charCodeAt(0) > 90; // normal logic

        if (password.length < 6) {
            console.log("password should contains minimum of 6 digits");
            // } else if (!isUpper.test(password[0])) {
        } else if (isUpperAscii) {
            console.log("password should contain uppercase at first");
        } else {
            console.log("Password" + ": " + password);
        }
        console.log("Username" + ": " + username);
    };

    const clearValues = () => {
        setUserName("");
        setPassword("");
        setEmail("");
    };

    const usernameHandleChange = (e: any) => {
        if (e.target.value) setUserName(e.target.value);
    };
    const emailHandleChange = (e: any) => {
        setEmail(e.target.value);
    };
    const passwordHandleChange = (e: any) => {
        setPassword(e.target.value);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
                <>HEyyyyyyy</>
                <div className="flex flex-col">
                    <label>UserName: </label>
                    <input
                        type={"text"}
                        value={username}
                        onChange={usernameHandleChange}
                        className="border-2 border-gray-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label>Email:</label>
                    <input
                        type={"email"}
                        value={email}
                        onChange={emailHandleChange}
                        className="border-2 border-gray-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label>Password:</label>
                    <input
                        type={"password"}
                        value={password}
                        onChange={passwordHandleChange}
                        className="border-2 border-gray-500"
                        required
                    />
                </div>
                <div>
                    <button style={{ paddingRight: 20 }} type="submit">Submit</button>
                    <button onClick={clearValues}>Clear</button>
                </div>
            </form>
        </div>
    );
}
