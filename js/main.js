// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between hamburger and close
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '&times;'; // Close icon
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenuBtn.innerHTML = '&#9776;'; // Hamburger icon
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Highlight active link based on current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Carousel Logic
    let slideIndex = 1;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length > 0) {
        showSlides(slideIndex);

        window.moveSlide = function (n) {
            showSlides(slideIndex += n);
        }

        window.currentSlide = function (n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }

            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("active"));

            slides[slideIndex - 1].classList.add("active"); // Use class based display control if CSS handles it
            slides[slideIndex - 1].style.display = "block"; // Enforce block
            dots[slideIndex - 1].classList.add("active");
        }

        // Auto advance every 5 seconds
        setInterval(() => {
            moveSlide(1);
        }, 5000);
    }
});
