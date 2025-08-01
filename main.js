// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    menuBtn.querySelector(".hamburger-icon").classList.toggle("hidden");
    menuBtn.querySelector(".close-icon").classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", false);
      document.body.classList.remove("menu-open");
      menuBtn.querySelector(".hamburger-icon").classList.remove("hidden");
      menuBtn.querySelector(".close-icon").classList.add("hidden");
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
const menuBtn = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');
menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('nav-active');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('nav-active');
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
