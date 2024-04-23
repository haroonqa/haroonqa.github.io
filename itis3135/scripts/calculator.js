window.onload = function () {
    // Assign event handlers to number buttons
    const numberButtons = document.querySelectorAll('.btn');
    numberButtons.forEach(button => {
        if (!isNaN(button.textContent)) { // Check if button text is a number
            button.addEventListener('click', function() {
                document.getElementById('display').value += this.textContent;
            });
        }
    });

    // Operator buttons
    document.getElementById('btnPlus').addEventListener('click', function() { operate('+'); });
    document.getElementById('btnMinus').addEventListener('click', function() { operate('-'); });
    document.getElementById('btnMultiply').addEventListener('click', function() { operate('*'); });
    document.getElementById('btnDivide').addEventListener('click', function() { operate('/'); });

    // Equal button
    document.getElementById('btnEqual').addEventListener('click', calculate);

    // Clear button
    document.getElementById('btnClear').addEventListener('click', function() {
        document.getElementById('display').value = '';
    });

    // Decimal point button
    document.getElementById('btnDot').addEventListener('click', function() {
        if (!document.getElementById('display').value.includes('.')) {
            document.getElementById('display').value += '.';
        }
    });
}

// Function to handle operator buttons
function operate(operator) {
    const display = document.getElementById('display');
    if (display.value !== '' && !display.value.endsWith(' ')) {
        display.value += ` ${operator} `;
    }
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    const answer = eval(display.value);
    display.value = answer;
}
