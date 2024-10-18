import { useEffect } from "react";

const Timer = () => {
  function timer() {
    const inputElement = document.getElementById("myInput");
    const buttonElement = document.getElementById("getValueButton");
    inputElement?.addEventListener("input", () => {
      const inputValue = inputElement.value;
      console.log(inputValue, "input");
    });
    // });
  }

  useEffect(() => {
    function outer() {
      let a = 10;
      function inner() {
        console.log(a);
      }
      return inner;
    }
    let outerInner = outer();
    outerInner();

    // closure

    for (var i = 0; i < 5; i++) {
      function inner(i) {
        setTimeout(() => {
          console.log(i);
        }, i*1000);
      }
       inner(i);
    }

    timer();
  }, []);

  return (
    <div>
      <input type="text" id="myInput" placeholder="Enter some text" />
      <button id="getValueButton">Get Value</button>
    </div>
  );
};
export default Timer;
