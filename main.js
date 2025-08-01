// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("main-nav");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on nav links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", false);
      document.body.classList.remove("menu-open");
    });
  });
}

// Client-side form validation for contact forms
document.addEventListener('DOMContentLoaded', () => {
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach((contactForm) => {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('input[placeholder*="Name"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Allow Formspree to handle submission
      contactForm.submit();
    });
  });
});

function validateEmail(email) {
  const re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\]\\\\.,;:\\s@\"]+\\.)+[^<>()[\\]\\\\.,;:\\s@\"]{2,})$/i;
  return re.test(email);
}
