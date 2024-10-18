import { Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Accessibility = () => {

    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const options = ['Apple', 'Orange', 'Kiwi', 'Banana'];

    const openButtonRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const live = document.getElementById('liveRegion');
            if (live) {
                live.innerHTML = 'You have 1 new notification';
            }
        }, 5000);
    }, [])


    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setIsOpen(true);
    }

    const handleListClick = (option, index) => {
        setInputValue(option);
        setIsOpen(false);
        setSelectedIndex(index);
    }

    console.log(selectedIndex, 'selectedindex')

    const secoundRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            console.log(secoundRef.current, 'secoundref')
            secoundRef.current && secoundRef.current.focus();
        }
    }, [isOpen])

    // useEffect(() => {
    //     if (isOpenModal) {
    //         closeButtonRef.current.focus();
    //     } else {
    //         openButtonRef.current.focus();
    //     }
    // }, [isOpenModal])


    // const [isOpenModal, setIsOpenModal] = useState(false);
    // const openButtonRef = useRef(null);
    // const closeButtonRef = useRef(null);

    // Function to trap focus inside the modal
    const trapFocus = (e) => {
        const focusableElements = closeButtonRef.current.closest('div').querySelectorAll('button');
        console.log(focusableElements, 'focuselements')
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey) { // If shift + tab is pressed
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus(); // Loop focus back to the last element
                }
            } else { // If only tab is pressed
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus(); // Loop focus back to the first element
                }
            }
        }
    };

    // Manage focus when modal opens and closes
    useEffect(() => {
        if (isOpenModal) {
            closeButtonRef.current.focus(); // Set focus to close button when modal opens
            document.addEventListener('keydown', trapFocus); // Trap focus inside modal
        } else {
            openButtonRef.current.focus(); // Return focus to open button when modal closes
            document.removeEventListener('keydown', trapFocus); // Remove focus trap
        }

        return () => {
            document.removeEventListener('keydown', trapFocus); // Cleanup the event listener
        };
    }, [isOpenModal]);


    return (
        <div>
            <label htmlFor="name">usernameeeeeee:</label>
            {/* adding aria-label or using for and id also announce */}
            <input type="text" id="name" name="name" className="border border-black" aria-label="name-input-field" ref={secoundRef} />
            <div tabIndex={0} aria-live="polite" id="liveRegion">No new notifications.</div>

            <table>
                <caption>Employee Information</caption>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="#">John Doe</a></td>
                        <td>28</td>
                        <td>Engineer</td>
                    </tr>
                </tbody>
            </table>
            <fieldset>
                <legend>Do you want to select?</legend>
                <label htmlFor="yes">Yes </label>
                <input id="yes" type="radio" />
                <label htmlFor="no">no </label>
                <input id="no" type="radio" />
            </fieldset>

            <ul role="navigation">
                {/* <!-- This is a navigation region, not a list. --> */}
                <li><a href="uri1">nav link 1</a></li>
                <li><a href="uri2">nav link 2</a></li>
                {/* <!-- ERROR! Previous list items are not in a list! --> */}
            </ul>
            <div role="region" tabIndex={0} aria-labelledby="important-section">
                <h2 id="important-section">Important Section</h2>
                <p>This content is important for users to know.</p>
            </div>
            <p tabIndex={0}>Rating:
                <img src="star-filled" alt="3 out of 5 stars" />
                <img src="star-filled" alt="" />
                <img src="star-filled" alt="" />
                <img src="star-empty" alt="" />
                <img src="star-empty" alt="" />
            </p>
            <p>Conformance Level:</p>
            <button name="A" type="button">
                <img src="a.png" alt="A" />
            </button>
            <button name="AA" type="button">
                <img src="a.png" alt="AA" />
                <img src="a.png" alt="" />
            </button>
            <button name="AAA" type="button">
                <img src="a.png" alt="AAA" />
                <img src="a.png" alt="" />
                <img src="a.png" alt="" />
            </button>
            <a href="products.html">
                <img src="icon.gif" alt="" />Products page
            </a>
            <a href="home.html">
                <img src="house.gif" alt="home page icon" />Go to the home page
            </a>
            <object tabIndex={0} classID="https://www.example.com/analogclock.py">
                <p>Here is some text that describes the object and its operation.</p>
            </object>

            <img tabIndex={0} src="ladymacbeth.jpg" alt="Lady MacBeth" aria-describedby="p1" />
            <p id="p1">This painting dates back to 1889 and is oil on canvas. It was created by
                John Singer Sargent, and represents ...</p>
            <select>Select Option
                <option>one</option>
                <option>two</option>
                <option>three</option>
                <option>four</option>
                <option>five</option>
            </select>
            <div>
                <label htmlFor="combobox">Choose a fruit:</label>
                <input type="text" id="combobox" value={inputValue} onChange={handleOnChange} aria-expanded={isOpen} aria-controls="listbox" />
                {isOpen && <ul role="listbox">
                    {options.map((option, index) => {
                        return (
                            <li tabIndex={0} onKeyDown={(e) => {
                                if (e.key === 'Space' || e.key === 'Enter') {
                                    handleListClick(option, index)
                                }
                            }} onClick={() => handleListClick(option, index)} aria-selected={selectedIndex === index} role="option">{option}</li>)
                    })}
                </ul>}
            </div>

            <header tabIndex={0}>
                <h1>…</h1>
                <nav>
                    <ul>
                        …
                    </ul>
                    <form>
                        {/* <!-- search form --> */}
                    </form>
                </nav>
            </header>

            <main tabIndex={0}>
                <article>…</article>
                <aside>…</aside>
            </main>

            <footer tabIndex={0}>…</footer>



            return (
            <div>
                <button ref={openButtonRef} onClick={() => setIsOpenModal(true)}>Open Modal</button>
                {isOpenModal && (
                    <div>
                        <button ref={closeButtonRef} onClick={() => setIsOpenModal(false)}>Close Modal</button>
                        <div ref={closeButtonRef} onClick={() => setIsOpenModal(false)}>EAT</div>
                        <div ref={closeButtonRef} onClick={() => setIsOpenModal(false)}>DANCE</div>
                    </div>
                )}
            </div>
            );




        </div >
    )
}

export default Accessibility;