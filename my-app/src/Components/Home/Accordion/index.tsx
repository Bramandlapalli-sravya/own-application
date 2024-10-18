import React, { useState } from 'react';
import './styles.css'

const AccordionItem = ({ options, heading, index, setClickIndex, clickIndex }) => {

    const isActive = clickIndex === index;


    console.log(clickIndex, 'clickindex', index, 'index', isActive, 'isActive')
    return (
        <div className='accordion'>
            {isActive ? "true" : "false"}
            <h1 onClick={() => {
                console.log("handle drop down", clickIndex, index);
                if (clickIndex === index) {
                    setClickIndex(null);
                }
                else {
                    // setTimeout(() => {x
                    setClickIndex(index);
                    // }, 5000);
                }
            }}>{heading}</h1>
            {isActive && (<ul>
                {options.map((option) => {
                    return <li>{option}</li>
                })}
            </ul>)}
        </div>
    )
}

const items = [
    { heading: 'select beauty', options: ['comb', 'hairclip', 'rubberband'] },
    { heading: 'select Gadget', options: ['phone', 'laptop', 'charger'] },
    { heading: 'select room', options: ['one room', 'two rooms', 'three rooms'] }
]

const Accordion = () => {
    const [clickIndex, setClickIndex] = useState(null);
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <>
                        <AccordionItem key={index} heading={item.heading} options={item.options} index={index} setClickIndex={setClickIndex} clickIndex={clickIndex} />
                    </>
                )
            })}

        </div>
    )
}

export default Accordion;