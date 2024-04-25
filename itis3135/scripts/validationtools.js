if (new URLSearchParams(window.location.search).has('dev')) {
    document.addEventListener("DOMContentLoaded", function() {
        const validateBtnsContainer = document.createElement('div');
        validateBtnsContainer.innerHTML = `
            <button onclick="window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank')">Validate HTML</button>
            <button onclick="window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href) + '&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en', '_blank')">Validate CSS</button>
            <button onclick="window.open('https://wave.webaim.org/report#/' + encodeURIComponent(window.location.href), '_blank')">Validate Accessibility</button>
        `;
        document.body.appendChild(validateBtnsContainer);
    });
}
