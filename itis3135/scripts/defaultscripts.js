window.onload = function() {
    displayDateTime();
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        greetUser();
    });
};

function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = "Today is " + formattedDate;
}

function greetUser() {
    const userName = document.getElementById('name').value;
    const userMood = document.getElementById('mood').value;
    const greeting = `The Your Company Name welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
    document.getElementById('greeting').textContent = greeting;
    showFavoritePolygon();
}

function showFavoritePolygon() {
    const number = Math.abs(Math.round(parseFloat(document.getElementById('number').value)));
    const polygons = ['digon', 'triangle', 'quadrilateral', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'enneagon', 'decagon'];
    const polygonName = polygons[number] || 'unknown';
    alert(`Your favorite polygon is ${polygonName}`);
}

function provideInsult() {
    // Function to provide an insult
}

function calculateSum() {
    // Function to calculate the sum of two numbers
}

function calculateTax() {
    // Function to calculate tax
}

function playSound() {
    // Function to play animal sound
}
