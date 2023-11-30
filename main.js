document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  // For example, you could add an event listener for the email form submission
  const emailForm = document.querySelector('.email-form');
  
  emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('.email-input');
    const emailValue = emailInput.value;
    
    // Perform actions with the email, such as sending it to a server
    console.log(`Email submitted: ${emailValue}`);
  });
});
