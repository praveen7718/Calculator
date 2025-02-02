display = document.querySelector("#display");
backspace = document.querySelector("#clear");

function addtodisplay(input) {
    display.value += input;
    if (display.value.length > 0) {
        backspace.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg>';
    }
}

backspace.addEventListener("click", () => {
    // Check if the backspace button is showing 'C' or the display is empty
    if (backspace.innerHTML === 'C' || display.value.length === 0) {
        clearDisplay();
    } else {
        clearBack();
    }
});

function clearBack() {
    let n = display.value.length;
    display.value = display.value.slice(0, n - 1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if(display.value.length>0){
            display.value = eval(display.value);
            backspace.innerHTML = 'C';
        }  
    } catch (error) {
        display.value = "Error";
    }
}