function handleClick(value) {
    // Get the display element
    let display = document.getElementById('display');

    // Get the current display value
    let currentValue = display.textContent;

    // Handle different button clicks
    if (value === 'C') {
        // Clear the display
        display.textContent = '0';
    } else if (value === '=') {
        // Evaluate the expression
        try {
            display.textContent = eval(currentValue);
        } catch (error) {
            display.textContent = 'Error';
        }
    } else {
        // Append the clicked value to the display
        if (currentValue === '0' && value !== '.') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }
}
