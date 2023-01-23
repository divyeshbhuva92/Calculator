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
      add();
    }
    if (e.target.innerHTML == "-") {
      substract();
    }
    if (e.target.innerHTML == "x") {
      multiply();
    }
    if (e.target.innerHTML == "÷") {
      divide();
    }
    // percentage function
    else if (previous !== "" && e.target.innerHTML == "%") {
      percent();
    }
  });
});

// ------------- all clear

let clearbutton = document.querySelector(".all-clear");
clearbutton.addEventListener("click", (e) => {
  clear();
});

// ------------- equal

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

//
//
//
// input through keyboard -------------------
//
//
//

document.onkeyup = function (event) {
  let key = event.key;
  // keys for number
  if (key == 1) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 2) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 3) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 4) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 5) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 6) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 7) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 8 && event.shiftKey == false) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 9) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == 0) {
    current += key;
    document.querySelector(".current").innerHTML = current;
  }
  if (key == "." && !current.includes(".")) {
    current += ".";
    document.querySelector(".current").innerHTML = current;
  }

  // all 4 operators
  if (key == "+") {
    add();
  }
  if (key == "-") {
    substract();
  }
  if (key == "*") {
    multiply();
  }
  if (key == "/") {
    divide();
  }

  // key for percentage
  if (key == "p" && event.shiftKey !== true) {
    percent();
  }

  // key for clear
  if (key == "c" && event.shiftKey !== true) {
    clear();
  }

  // key for equal(enter key)
  if (key === "Enter" && event.shiftKey !== true) {
    if (previous[previous.length - 1] !== "%") {
      current = eval(previous + current);
      document.querySelector(".current").innerHTML = current;
    }
    previous = "";
    document.querySelector(".previous").innerHTML = previous;
  }
};

function clear() {
  current = "";
  document.querySelector(".current").innerHTML = current;
  previous = "";
  document.querySelector(".previous").innerHTML = previous;
}
function percent() {
  let part1 = previous.slice(0, -1);
  let part2 = previous[previous.length - 1];
  let part3 = current;
  previous = part1 + part2 + part3 + "%";
  // console.log(part1 + ", " + part2 + ", " + part3);
  // console.log(previous);
  document.querySelector(".previous").innerHTML = previous;

  if (part2 == "+" || part2 == "-") {
    current = eval(part1 + part2 + (part3 * part1) / 100);
    document.querySelector(".current").innerHTML = current;
    previous = "";
    document.querySelector(".previous").innerHTML = previous;
  } else if (part2 == "*") {
    previous = part1 + "x" + part3 + "%";
    document.querySelector(".previous").innerHTML = previous;
    current = eval((part1 * current) / 100);
    document.querySelector(".current").innerHTML = current;
    previous = "";
    document.querySelector(".previous").innerHTML = previous;
  } else if (part2 == "/") {
    previous = part1 + "÷" + part3 + "%";
    document.querySelector(".previous").innerHTML = previous;
    current = eval((part1 / current) * 100);
    document.querySelector(".current").innerHTML = current;
    previous = "";
    document.querySelector(".previous").innerHTML = previous;
  }
}
function add() {
  if (previous == "") {
    previous = current + "+";
    document.querySelector(".previous").innerHTML = previous;
    current = "";
    document.querySelector(".current").innerHTML = current;
  } else {
    previous = eval(previous + current) + "+";
    document.querySelector(".previous").innerHTML = previous;
    current = "";
    document.querySelector(".current").innerHTML = current;
  }
}
function substract() {
  if (previous == "") {
    previous = current + "-";
    document.querySelector(".previous").innerHTML = previous;
    current = "";
    document.querySelector(".current").innerHTML = current;
  } else {
    previous = eval(previous + current) + "-";
    document.querySelector(".previous").innerHTML = previous;
    current = "";
    document.querySelector(".current").innerHTML = current;
  }
}
function multiply() {
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
function divide() {
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
