let displayScreen = document.getElementsByClassName("displayScreen");

function Add(a, b) {
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    return a / b;
}

function Operate(a, b, operator) {
    if (operator === "plus") {
        return Add(a, b);
    } else if (operator === "minus") {
        return Subtract(a, b);
    } else if (operator === "times") {
        return Multiply(a, b);
    } else {
        return Divide(a, b);
    }
}

function Clear() {
    document.getElementById("displayScreen").innerHTML = "";
}

function addDigit(digit) {
    
}