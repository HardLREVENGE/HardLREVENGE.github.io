// Mobile menu toggle
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Generate particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        particle.style.left = `${posX}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 20;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Staggered animation on scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.stagger-animation, .feature-item, .event-highlight, .game-item');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            if (!element.classList.contains('visible')) {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 50); // Reduced stagger for better performance
            }
        }
    });
}

// Initial check on page load
handleScrollAnimation();

// Check on scroll
window.addEventListener('scroll', handleScrollAnimation);

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});