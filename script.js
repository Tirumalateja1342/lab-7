document.addEventListener("DOMContentLoaded", () => {
    // Select the form and all its input elements
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input[type='text']");
  
    // Attach event listener for form submission
    form.addEventListener("submit", (event) => {
      let isValid = true;
  
      // Check each input field to ensure it is filled
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          alert(`Please fill out the ${input.name} field.`);
        }
      });
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    // Update the footer with the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
  
    // Optional: Add focus/blur effects for better UX
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.style.backgroundColor = "#eaf7e6"; // Highlight on focus
      });
  
      input.addEventListener("blur", () => {
        input.style.backgroundColor = ""; // Remove highlight on blur
      });
    });
  });
  