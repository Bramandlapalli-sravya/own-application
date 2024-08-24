import React, { useEffect } from "react";
import { PageStyles } from "../TopNavigation/styles.ts";

function Services() {
    const boxes = [
        { title: "Box 1" },
        { title: "Box 2" },
        { title: "Box 3" },
        { title: "Box 4" },
        { title: "Box 5" },
        { title: "Box 6" },
        { title: "Box 7" },
        { title: "Box 8" },
        { title: "Box 9" },
        { title: "Box 10" },
        { title: "Box 11" },
        { title: "Box 12" },
    ]
    const [clickedbox, setClickedbox] = React.useState<any>([]);



    const boxClick = (index) => {
        setClickedbox((boxes) => {
            const newClickedbox = [...boxes, index];
            const div = document.getElementsByClassName("border");
            if (div[index]) {
                div[index].classList.add('bg-red-500');
            }
            return newClickedbox;
        });
    }

    useEffect(() => {
        const div = document.getElementsByClassName("border");
        if (clickedbox.length === div.length) {
            let currentIndex = clickedbox.length - 1;
            const intervalId = setInterval(() => {
                if (currentIndex < clickedbox.length && div[clickedbox[currentIndex]]) {
                    div[clickedbox[currentIndex]].classList.remove('bg-red-500');
                    currentIndex--;
                } else {
                    clearInterval(intervalId);
                }
            }, 1000);
        }
    })

    return (
        <PageStyles>
            <div className="grid grid-cols-3">
                {
                    boxes.map((box, index) => {
                        return (
                            <div key={index} className="border p-5" onClick={() => boxClick(index)}>
                                <h1>{box.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </PageStyles>
    )
}

export default Services;