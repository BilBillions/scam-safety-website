// Hamburger Menu Toggle (for mobile screens)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-button');
  const nav = document.getElementById('main-nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('active');
      nav.classList.toggle('nav-active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        nav.classList.remove('nav-active');
      });
    });
  }

  // Client-side form validation for contact forms
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach((contactForm) => {
    contactForm.addEventListener('submit', function (e) {
      // Only prevent default if not using mailto or Formspree
      if (!contactForm.action.startsWith('mailto:')) {
        e.preventDefault();
      }
      const name = contactForm.querySelector('input[id="name"]')?.value.trim() || "";
      const email = contactForm.querySelector('input[type="email"]')?.value.trim() || "";
      const message = contactForm.querySelector('textarea')?.value.trim() || "";

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Allow Formspree or mailto to handle submission
      contactForm.submit();
    });
  });
});

// Email validation function
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}
