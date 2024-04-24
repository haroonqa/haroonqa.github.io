let persons = [];
let salaries = [];

function addSalary() {
    const name = document.getElementById('nameInput').value.trim();
    const salary = parseFloat(document.getElementById('salaryInput').value);
    if (name === '' || isNaN(salary)) {
        alert('Invalid input! Name cannot be empty and salary must be a number.');
    } else {
        persons.push(name);
        salaries.push(salary);
        document.getElementById('employeeSelect').innerHTML += `<option value="${name}">${name}</option>`;
    }
    document.getElementById('nameInput').focus();
}

function modifySalary() {
    const selectedName = document.getElementById('employeeSelect').value;
    const newSalary = parseFloat(document.getElementById('newSalaryInput').value);
    const index = persons.indexOf(selectedName);
    if (index !== -1 && !isNaN(newSalary)) {
        salaries[index] = newSalary;
    } else {
        alert('Invalid salary input!');
    }
}

function displayResults() {
    const average = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
    const highest = Math.max(...salaries);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results</h2><p>Average Salary: ${average.toFixed(2)}</p><p>Highest Salary: ${highest.toFixed(2)}</p>`;
}

function displaySalary() {
    const tableBody = document.getElementById('results_table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    persons.forEach((person, index) => {
        const row = `<tr><td>${person}</td><td>${salaries[index]}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

// Set focus to the name field on initial load
document.getElementById('nameInput').focus();