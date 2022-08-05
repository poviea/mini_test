let result = "";

function add(num) {
  result += num;

  document.getElementById("result").value = result;
}

function compute() {
  let result_num = parseInt(eval(result));
  if (isInteger(result_num) == true) {
    result = result_num;
  }
  document.getElementById("result").value = result;
}

function clearDisplay() {
  result = "";
  document.getElementById("result").value = "0";
}

function isInteger(x) {
  return Math.floor(x) === x;
}