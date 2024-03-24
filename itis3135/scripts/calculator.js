window.onload = function () {
    document.getElementById("btnClear").onclick = clearDisplay;
    document.getElementById("btnDivide").onclick = function () { appendToDisplay('/'); };
    document.getElementById("btnMultiply").onclick = function () { appendToDisplay('*'); };
    document.getElementById("btnMinus").onclick = function () { appendToDisplay('-'); };
    document.getElementById("btnPlus").onclick = function () { appendToDisplay('+'); };
    document.getElementById("btnEqual").onclick = calculate;

    // Attach event listeners to number buttons
    var numberButtons = document.querySelectorAll('.btn:not(#btnClear):not(#btnDivide):not(#btnMultiply):not(#btnMinus):not(#btnPlus):not(#btnEqual)');
    numberButtons.forEach(function (button) {
        button.onclick = function () { appendToDisplay(this.innerText); };
    });
};

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
