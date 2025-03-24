function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Funciones para operaciones básicas
function add() {
    appendValue('+');
}

function subtract() {
    appendValue('-');
}

function multiply() {
    appendValue('*');
}

function divide() {
    appendValue('/');
}
