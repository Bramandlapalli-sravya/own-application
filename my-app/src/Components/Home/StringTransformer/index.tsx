import React, { useState } from "react"
import { StringsContainerStyles } from "./styles.ts";

export const StringTransformer = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const strings = [
        { heading: 'lowercase' },  // complete sentence to lowercase
        { heading: 'UPPERCASE' }, // complete sentence to uppercase
        { heading: 'camelCase' }, // first letter small and all words starting with capital after space
        { heading: 'PascalCase' }, // adding all capital first after space
        { heading: 'snake_case' }, // adding "_" in place of space
        { heading: 'kebab-case' }, // adding "-" in place of space
        { heading: 'trim' } // without space from given sentence
    ]

    const MatchingCase = (inputValue, heading) => {
        switch (heading) {
            case 'lowercase': {
                const lowercase = inputValue.toLowerCase();
                return lowercase;
            }

            case 'UPPERCASE': {
                const uppercase = inputValue.toUpperCase();
                return uppercase;
            }
            case 'camelCase': {
                const split = inputValue.split(' ');
                const camelCase = split.map((word, index) => {
                    if (index === 0) {
                        return word.toLowerCase();
                    } else {
                        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                    }
                });
                return camelCase;
            }
            case 'PascalCase': {
                const split = inputValue.split(' ');
                const PascalCase = split.map((word, index) => {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                });
                return PascalCase;
            }

            case 'snake_case': {
                const snakeCase = inputValue.split(' ').join('_');
                return snakeCase;
            }

            case 'kebab-case': {
                const kebabCase = inputValue.split(' ').join('-');
                return kebabCase;
            }

            case 'trim': {
                const trim = inputValue.replaceAll(' ', '')
                return trim;
            }
            default: {
                return '';
            }
        }
    }

    console.log(inputValue[0], 'inputvalue');

    return (
        <StringsContainerStyles className="flex flex-col items-center p-4 gap-4">
            <div>StringTransformer</div>
            <input type="text" className="border w-3/4 rounded p-2" placeholder="Enter the sentences" value={inputValue} onChange={handleInputChange} />
            {strings.map((string) => {
                return (
                    <div className="strings-container m-3">
                        <span className="heading">{string.heading}</span>
                        <div className="input-text-value">{MatchingCase(inputValue, string.heading)}</div>
                    </div>
                )
            })}
        </StringsContainerStyles>
    )
}