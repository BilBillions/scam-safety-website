// Handle email form submission for the Free Guide
document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.querySelector('.email-form');
  const contactForm = document.querySelector('.contact-form');

  if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = emailForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (validateEmail(email)) {
        alert("Thank you! The guide will be sent to your email.");
        emailInput.value = "";
        // Here you can integrate with your email provider like Mailchimp or ConvertKit
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = contactForm.querySelector('input[placeholder=\"Your Name\"]').value.trim();
      const email = contactForm.querySelector('input[type=\"email\"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert(\"Please fill in all fields.\");
        return;
      }

      if (!validateEmail(email)) {
        alert(\"Please enter a valid email address.\");
        return;
      }

      // Simulate form submission
      alert(\"Thank you for reaching out. I'll get back to you soon!\");
      contactForm.reset();
    });
  }
});

// Email validation
function validateEmail(email) {
  const re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\]\\\\.,;:\\s@\"]+\\.)+[^<>()[\\]\\\\.,;:\\s@\"]{2,})$/i;
  return re.test(email);
}