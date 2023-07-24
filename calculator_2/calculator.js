const display = document.querySelector(".display");
const result = document.querySelector("#result");

// const addOperator = document.querySelector("#addOperator");
// const subtractOprerator = document.querySelector("#subtractOperator");
// const multiplyOperator = document.querySelector("#multiplyOperator");
// const divideOperator = document.querySelector("#divideOperator");

function btn(a) {
  display.value += a;
}

const addOperator = () => {
  var firstNum = display.value;
  display.value = "";
  console.log(firstNum);
};
