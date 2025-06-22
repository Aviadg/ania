// Navbar effect on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black', 'bg-opacity-90');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black', 'bg-opacity-90');
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('nav button');
    
    if (!hamburgerBtn) {
        console.error('Hamburger button not found');
        return;
    }
    
    // Create mobile menu overlay
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.id = 'mobile-menu-overlay';
    mobileMenuOverlay.className = 'fixed top-0 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm z-40 hidden pt-20';
    mobileMenuOverlay.innerHTML = `
        <div class="flex flex-col items-center space-y-6 py-8 px-4">
            <a href="#home" class="block text-white text-xl hover:text-custom-gold transition-colors py-2">Start</a>
            <a href="#about" class="block text-white text-xl hover:text-custom-gold transition-colors py-2">O mnie</a>
            <a href="#offer" class="block text-white text-xl hover:text-custom-gold transition-colors py-2">Kurs</a>
            <a href="#course" class="block text-white text-xl hover:text-custom-gold transition-colors py-2">Moduły</a>
            <a href="#testimonials" class="block text-white text-xl hover:text-custom-gold transition-colors py-2">Opinie</a>
        </div>
    `;
    
    // Add overlay to body
    document.body.appendChild(mobileMenuOverlay);
    
    hamburgerBtn.addEventListener('click', () => {
        const overlay = document.getElementById('mobile-menu-overlay');
        
        if (overlay.classList.contains('hidden')) {
            // Open menu
            overlay.classList.remove('hidden');
            hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            // Close menu
            overlay.classList.add('hidden');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when clicking on a link
    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('hidden');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Close menu when clicking on overlay background
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('hidden');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});



// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});