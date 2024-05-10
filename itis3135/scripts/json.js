document.addEventListener("DOMContentLoaded", function() {
    fetch('nav_main.json')
        .then(response => response.json())
        .then(data => {
            const navMain = document.getElementById("nav_main");
            data.title.forEach(item => {
                const h1 = document.createElement("h1");
                h1.textContent = item.name;
                navMain.appendChild(h1);
            });



            data.links.forEach(item => {
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.name;
                navMain.appendChild(link);
                navMain.appendChild(document.createTextNode(" | ")); // To maintain the separators
            });
            navMain.lastChild.remove(); // Remove the last separator
        })
        .catch(error => console.error("Failed to load navigation:", error));
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('nav_secondmain.json')
        .then(response => response.json())
        .then(data => {
            const navMain = document.getElementById("nav_secondmain");
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.name;
                navMain.appendChild(link);
                navMain.appendChild(document.createTextNode(" | ")); // To maintain the separators
            });
            navMain.lastChild.remove(); // Remove the last separator
        })
        .catch(error => console.error("Failed to load navigation:", error));
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.json')
  .then(response => response.json())
  .then(data => {
      const footer = document.getElementById("footer");

      // Add navigation links
      const nav = document.createElement("nav");
      data.links.forEach(item => {
          const link = document.createElement("a");
          link.href = item.url;
          link.textContent = item.text;
          nav.appendChild(link);
          nav.appendChild(document.createTextNode(" | ")); // Maintain separators
      });
      nav.lastChild.remove(); // Remove the last separator
      footer.appendChild(nav);

      // Add footer text with company and certification links
      const paragraph = document.createElement("p");
      const companyLink = document.createElement("a");
      companyLink.href = "http://" + data.companyUrl;
      companyLink.textContent = "Haroon and Co.";

      const certificationLink = document.createElement("a");
      certificationLink.href = data.certificationLink;
      certificationLink.textContent = "Certified in RWD";
      
      paragraph.textContent = "Page Built by ";
      paragraph.appendChild(companyLink);
      paragraph.appendChild(document.createTextNode(", "));
      paragraph.appendChild(certificationLink);
      paragraph.appendChild(document.createTextNode(" © 2024"));

      footer.appendChild(paragraph);

      // Add validation links
      data.validationLinks.forEach((item, index) => {
          const a = document.createElement("a");
          a.href = "#"; // Prevent default link behavior
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.alt;
          img.style.border = "0";
          img.style.width = "88px";
          img.style.height = "31px";
          a.appendChild(img);
          footer.appendChild(a);

          // Add event listeners based on the 'alt' attribute or another property
          switch (item.alt) {
              case 'Validate HTML':
                  img.addEventListener('click', validateHTML);
                  break;
              case 'Validate CSS':
                  img.addEventListener('click', validateCSS);
                  break;
              case 'Validate AIM':
                  img.addEventListener('click', validateAIM);
                  break;
          }
      });
  })
  .catch(error => console.error("Failed to load footer:", error));
});

// Function to validate HTML
function validateHTML() {
  const currentURL = encodeURIComponent(window.location.href);
  window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
  const currentURL = encodeURIComponent(window.location.href);
  window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
  window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}
