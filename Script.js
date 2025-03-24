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

// Permitir entrada desde el teclado
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/().]/.test(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

// Hacer la calculadora ajustable y movible
document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.querySelector(".calculator");
    let isDragging = false;
    let offsetX, offsetY;

    // Botón para mover
    const moveButton = document.createElement("button");
    moveButton.innerText = "Mover";
    moveButton.style.position = "absolute";
    moveButton.style.top = "-30px";
    moveButton.style.left = "50%";
    moveButton.style.transform = "translateX(-50%)";
    moveButton.style.background = "#e94560";
    moveButton.style.color = "white";
    moveButton.style.border = "none";
    moveButton.style.padding = "5px 10px";
    moveButton.style.cursor = "pointer";
    calculator.appendChild(moveButton);

    moveButton.addEventListener("mousedown", function(event) {
        isDragging = true;
        offsetX = event.clientX - calculator.offsetLeft;
        offsetY = event.clientY - calculator.offsetTop;
        calculator.style.transition = "none";
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            calculator.style.left = `${event.clientX - offsetX}px`;
            calculator.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
        calculator.style.transition = "transform 0.2s ease-in-out";
    });

    // Hacer la calculadora ajustable
    const resizeButton = document.createElement("button");
    resizeButton.innerText = "Ajustar Tamaño";
    resizeButton.style.position = "absolute";
    resizeButton.style.bottom = "-30px";
    resizeButton.style.left = "50%";
    resizeButton.style.transform = "translateX(-50%)";
    resizeButton.style.background = "#e94560";
    resizeButton.style.color = "white";
    resizeButton.style.border = "none";
    resizeButton.style.padding = "5px 10px";
    resizeButton.style.cursor = "pointer";
    calculator.appendChild(resizeButton);

    let isResizing = false;

    resizeButton.addEventListener("mousedown", function(event) {
        isResizing = true;
        event.preventDefault();
    });

    document.addEventListener("mousemove", function(event) {
        if (isResizing) {
            calculator.style.width = `${event.clientX - calculator.offsetLeft}px`;
            calculator.style.height = `${event.clientY - calculator.offsetTop}px`;
        }
    });

    document.addEventListener("mouseup", function() {
        isResizing = false;
    });
});
