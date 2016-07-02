var result = "0";
var equation = "";

function numInput(elem) {
    if (result == "0") {
        result = elem.value;
    } else {
        result += elem.value;
    }
    console.log(result.length);
    document.getElementById("screen").innerHTML = result;
}

function dotInput() {
    result += ".";
    document.getElementById("screen").innerHTML = result;
}

function operatorInput(elem) {
    if (result != "0") {
        equation += document.getElementById("screen").innerHTML;
        if (elem.value == "x") {
            equation += "*"
        } else {
            equation += elem.value;
        }
        result = "0";
    }
}

function caculate() {
    equation += result;
    console.log(equation);
    console.log(eval(equation));
    document.getElementById("screen").innerHTML = eval(equation);
    equation = "";
    result = 0;
}

function erase() {
    document.getElementById("screen").innerHTML = "0";
    result = "0";
    equation = "";
    console.log('clear');
}
