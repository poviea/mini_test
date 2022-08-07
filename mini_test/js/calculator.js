let result = "";

function add(num) {
  result += num;

  document.getElementById("result").value = result;
}

function del() {
  result = result.substring(0, result.length - 1);
  document.getElementById("result").value = result;
}

function compute() {
  let result_num = parseFloat(eval(result));

  if (isInteger(result_num) == true) {
    result = result_num;
  } else {
    result = result_num.toFixed(2);
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
