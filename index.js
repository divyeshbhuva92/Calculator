let current = "";
let previous = "";

// ------------- input a number

let numberbuttons = document.querySelectorAll(".number");
Array.from(numberbuttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "." && current.includes(".")) {
      return;
    } else {
      //   console.log(e.target.innerHTML);
      current = current + e.target.innerHTML;
      document.querySelector(".current").innerHTML = current;
    }
  });
});

// ------------- operators

let operationbuttons = document.querySelectorAll(".operation");
Array.from(operationbuttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (previous == "") {
      if (e.target.innerHTML == "+") {
        previous = current + e.target.innerHTML;
        //   console.log(e.target.innerHTML);
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
      if (e.target.innerHTML == "-") {
        previous = current + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
      if (e.target.innerHTML == "x") {
        previous = current + "*";

        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
      if (e.target.innerHTML == "÷") {
        previous = current + "/";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
    } else {
      if (e.target.innerHTML == "x") {
        previous = eval(previous + current) + "*";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      } else if (e.target.innerHTML == "÷") {
        previous = eval(previous + current) + "/";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      } else {
        previous = eval(previous + current) + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
    }
    if (e.target.innerHTML == "%") {
      let previous1 = previous.slice(0, -1);
      let previous2 = previous[previous.length - 1];
      let previous3 = current;
      previous = previous1 + previous2 + previous3 + e.target.innerHTML;
      document.querySelector(".previous").innerHTML = previous;
      // console.log(previous);

      if (previous2 == "+" || previous2 == "-") {
        current = eval(previous1 + previous2 + (previous3 * previous1) / 100);
        document.querySelector(".current").innerHTML = current;
      } else if (previous2 == "*") {
        previous = previous1 + "x" + previous3 + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = eval((previous1 * current) / 100);
        document.querySelector(".current").innerHTML = current;
      } else if (previous2 == "/") {
        previous = previous1 + "÷" + previous3 + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = eval((previous1 / current) * 100);
        document.querySelector(".current").innerHTML = current;
      }
    }
  });
});

// ------------- all clear

let clearbutton = document.querySelector(".all-clear");
clearbutton.addEventListener("click", (e) => {
  current = "";
  document.querySelector(".current").innerHTML = current;
  previous = "";
  document.querySelector(".previous").innerHTML = previous;
});

// ------------- Evalute

let equalbutton = document.querySelector(".equal");
equalbutton.addEventListener("click", () => {
  if (previous[previous.length - 1] !== "%") {
    current = eval(previous + current);
    document.querySelector(".current").innerHTML = current;
  } else {
    current = current;
    document.querySelector(".current").innerHTML = current;
  }
  previous = "";
  document.querySelector(".previous").innerHTML = previous;
});
