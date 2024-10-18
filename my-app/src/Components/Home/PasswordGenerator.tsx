import React, { useEffect, useState } from "react";
import { PasswordGeneratorStyles } from "../Home/styles.ts";

const PasswordGenerator = () => {

    const checkboxDefaultData = [
        { title: "Include UpperCase Letters", checked: false, id: 1 },
        { title: "Include LowerCase Letters", checked: false, id: 2 },
        { title: "Include Numbers", checked: false, id: 3 },
        { title: "Include Symbols", checked: false, id: 4 },
    ]

    const [sliderLength, setSliderLength] = useState<number>(0);
    const [checkboxData, setCheckboxData] = useState(checkboxDefaultData);
    const [password, setPassword] = useState<string | undefined | null | any>();
    const [gerError, setGetError] = useState<string>();
    const [copied, setCopied] = useState<boolean>(false);

    const generatePassword = () => {
        let charset = '',
            finalPassword = '';

        const selectedCheckboxData = checkboxData.filter((option) => option.checked);
        if (selectedCheckboxData.length === 0) {
            setGetError("Please select at least one option");
            return;
        }
        selectedCheckboxData.forEach((option) => {
            switch (option.title) {
                case 'Include UpperCase Letters':
                    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case 'Include LowerCase Letters':
                    charset += 'abcdefghijklmnopqrstuvwxyz';
                    break;
                case 'Include Numbers':
                    charset += '0123456789';
                    break;
                case 'Include Symbols':
                    charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
                    break;
                default:
                    break;
            }
        });

        for (let i = 0; i < sliderLength; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length)
            finalPassword += charset[randomIndex];
        }
        setPassword(finalPassword);
        setGetError('');


    }

    const passwordStrength = () => {
        if (password?.length === 0) {
            return ""
        } else if (password?.length < 3) {
            return "Weak"
        } else if (password?.length < 6) {
            return "Medium"
        } else if (password?.length < 9 || password?.length > 9) {
            return "strong"
        }
    }

    const copyText = () => {
        const text = document.getElementById("generated-text")?.textContent;
        navigator.clipboard.writeText(text || "");
        setCopied(true);
    }

    const handleCheckbox = (id: number) => {
        const updatedCheckboxData = checkboxData.map((data) => {
            if (data.id === id) {
                return {
                    ...data,
                    checked: !data.checked
                }
            }
            return data;
        })
        setCheckboxData(updatedCheckboxData);
    }

    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 2000)
    })

    return (
        <PasswordGeneratorStyles>
            <div className="container">
                <div className="generated-field">
                    <h1 id="generated-text">
                        {password}
                    </h1>
                    <button onClick={() => copyText()}>{copied ? 'copied' : 'copy'}</button>
                </div>
                <div className="character">
                    <h1>Character Length</h1>
                    <span>{sliderLength}</span>
                </div>
                <input type="range" min="0" max="100" className="slider" value={sliderLength} onChange={(e) => setSliderLength(Number(e.target.value))} />
                <div className="password-strength">
                    <div className="grid auto-cols-auto gap-5 w-full">
                        {checkboxData.map((data) => {
                            return (
                                <div key={data.id} className="flex items-center justify-start gap-2">
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${data.id}`}
                                        checked={data.checked}
                                        onChange={() => handleCheckbox(data.id)}
                                    />
                                    <span>{data.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="weight-of-password">
                    <h1>strength</h1>
                    <span className="text-[#080]">{passwordStrength()}</span>
                </div>
                <button onClick={generatePassword}>Generate Password</button>
                {gerError && <div>{gerError}</div>}
            </div>
        </PasswordGeneratorStyles>
    )
}
export default PasswordGenerator;


