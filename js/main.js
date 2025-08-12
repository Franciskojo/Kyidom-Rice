// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextSlide = (currentSlide + 1) % testimonials.length;
    showSlide(nextSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        startSlider();
    });
});

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize slider if testimonials exist
if (testimonials.length > 0) {
    startSlider();
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other items
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // Open current if it wasn't active
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Product Size Selection
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options in this product
        this.parentElement.querySelectorAll('.size-option').forEach(opt => {
            opt.classList.remove('active');
        });
        
        // Add active class to clicked option
        this.classList.add('active');
    });
});

// Quick View Modal (would need additional HTML and CSS)
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Quick view functionality would show product details in a modal.');
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code can go here
});

 document.getElementById("year").textContent = new Date().getFullYear();