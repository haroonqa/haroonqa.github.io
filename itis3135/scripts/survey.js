function preventSubmission(event) {
    event.preventDefault();

}

function resetForm() {
    document.getElementById("introForm").reset();
}

function addCourse() {
    const container = document.getElementById("coursesContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "courseInput";
    input.required = true;
    container.appendChild(input);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(deleteButton);
    };
    container.appendChild(deleteButton);
}

document.getElementById("introForm").addEventListener("submit", preventSubmission);
document.getElementById("resetLink").addEventListener("click", resetForm);
