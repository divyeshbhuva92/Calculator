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
    if (e.target.innerHTML == "+") {
      if (previous == "") {
        previous = current + e.target.innerHTML;
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
    if (e.target.innerHTML == "-") {
      if (previous == "") {
        previous = current + e.target.innerHTML;
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
    if (e.target.innerHTML == "x") {
      if (previous == "") {
        previous = current + "*";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      } else {
        previous = eval(previous + current) + "*";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
    }
    if (e.target.innerHTML == "÷") {
      if (previous == "") {
        previous = current + "/";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      } else {
        previous = eval(previous + current) + "/";
        document.querySelector(".previous").innerHTML = previous;
        current = "";
        document.querySelector(".current").innerHTML = current;
      }
    }
    // percentage function
    else if (previous !== "" && e.target.innerHTML == "%") {
      let part1 = previous.slice(0, -1);
      let part2 = previous[previous.length - 1];
      let part3 = current;
      previous = part1 + part2 + part3 + e.target.innerHTML;
      console.log(part1 + ", " + part2 + ", " + part3);
      console.log(previous);
      document.querySelector(".previous").innerHTML = previous;

      if (part2 == "+" || part2 == "-") {
        current = eval(part1 + part2 + (part3 * part1) / 100);
        document.querySelector(".current").innerHTML = current;
      } else if (part2 == "*") {
        previous = part1 + "x" + part3 + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = eval((part1 * current) / 100);
        document.querySelector(".current").innerHTML = current;
      } else if (part2 == "/") {
        previous = part1 + "÷" + part3 + e.target.innerHTML;
        document.querySelector(".previous").innerHTML = previous;
        current = eval((part1 / current) * 100);
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
