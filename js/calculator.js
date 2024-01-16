var number;
var operator;
var getOperator;
var res = 0;
var pro = 1;

function setValue(event) {
  if (number == undefined) {
    number = event.target.value;
    document.getElementById("value").innerText = number;
  } else {
    number += event.target.value;
    document.getElementById("value").innerText = number;
  }
}

function setOperator(e) {
  operator = e.target.value;
  getOperator = operator;
  switch (operator) {
    case "+":
      if (number != undefined) {
        if (pro > 1) {
          res = pro;
          pro = 1;
        }
        res += Number(number);
        number = undefined;
        document.getElementById("value").innerText = res;
      } else {
        document.getElementById("value").innerText = res;
      }
      break;
    case "-":
      if (number != undefined) {
        if (pro > 1) {
          res = pro;
          pro = 1;
        }
        res -= Number(number);
        number = undefined;
        document.getElementById("value").innerText = res;
      } else {
        document.getElementById("value").innerText = res;
      }
      break;
    case "*":
      if (number != undefined) {
        pro *= Number(number);
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;

    case "/":
      if (number != undefined) {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        if (pro == 1) {
          pro = Number(number) / pro;
        } else {
          pro = pro / Number(number);
        }
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;

    case "%":
      if (number != undefined) {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        if (pro == 1) {
          pro = Number(number);
        } else {
          pro = pro % Number(number);
        }
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;
  }
}

function calculate() {
  switch (operator) {
    case "+":
      if (number != undefined) {
        if (pro > 1) {
          res = pro;
          pro = 1;
        }
        res += Number(number);
        number = undefined;
        document.getElementById("value").innerText = res;
      } else {
        document.getElementById("value").innerText = res;
      }
      break;
    case "-":
      if (number != undefined) {
        if (pro > 1) {
          res = pro;
          pro = 1;
        }
        res -= Number(number);
        number = undefined;
        document.getElementById("value").innerText = res;
      } else {
        document.getElementById("value").innerText = res;
      }
      break;
    case "*":
      if (number != undefined) {
        pro *= Number(number);
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;

    case "/":
      if (number != undefined) {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        if (pro == 1) {
          pro = Number(number) / pro;
        } else {
          pro = pro / Number(number);
        }
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;

    case "%":
      if (number != undefined) {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        if (pro == 1) {
          pro = Number(number);
        } else {
          pro = pro % Number(number);
        }
        number = undefined;
        document.getElementById("value").innerText = pro;
      } else {
        if (res > 0) {
          pro = res;
          res = 0;
        }
        document.getElementById("value").innerText = pro;
      }
      break;
  }
}
function clearAll() {
  number = undefined;
  res = 0;
  pro = 1;
  document.getElementById("value").innerText = "";
  number = undefined;
  document.getElementById("value").innerText = "0";
}

function setOn() {
  document.getElementById("value").innerText = "0";
}

function setOff() {
  document.getElementById("value").innerText = "";
}
