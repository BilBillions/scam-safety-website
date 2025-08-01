// --- MY PROJECT/js/main.js ---

    document.addEventListener("DOMContentLoaded", function() {
  var heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('visible');
  }
});

    // 1. Mobile Menu Functionality
    const menuButton = document.getElementById('menu-button');
    const mainNav = document.getElementById('main-nav');

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
            menuButton.classList.toggle('is-active');
        });
    }

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 3. Add a subtle shadow to the header on scroll
    const header = document.querySelector('.main-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 4. Fade-in animation for elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing after it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all elements you want to apply the fade-in effect to
    const elementsToAnimate = document.querySelectorAll('.service-card, .testimonial-card, .blog-post-preview, .about-content, .contact-form');
    elementsToAnimate.forEach(el => observer.observe(el));

});
