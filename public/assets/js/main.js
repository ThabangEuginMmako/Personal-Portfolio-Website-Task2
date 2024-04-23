AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// Execute this code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the contact form and the submit button
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  // Add an event listener to the submit button
  submitButton.addEventListener("click", function () {
      // Get the values of the input fields
      const name = document.getElementById("nameInput").value;
      const email = document.getElementById("emailInput").value;
      const subject = document.getElementById("subjectInput").value;
      const message = document.getElementById("messageInput").value;

      // Send the form data to Formspree using a POST request
      fetch("https://formspree.io/f/mzbnydyg", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: name,
              email: email,
              _subject: subject,
              message: message
          })
      })
      // Handle the response from Formspree
      .then(response => {
          // Check if the response is ok
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          // Parse the response as JSON
          return response.json();
      })
      .then(data => {
          // Handle successful submission (optional)
          console.log("Form submitted successfully:", data);
          // Optionally, you can redirect or show a success message here
      })
      .catch(error => {
          // Handle errors (optional)
          console.error("Error submitting form:", error);
          // Optionally, you can display an error message to the user
      });
  });
});
