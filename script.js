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
            <a href="index-en.html" class="block text-custom-gold text-xl hover:text-white transition-colors py-2">English</a>
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

// Quiz functionality
const quizData = [
    {
        question: "What is the English term for 'białko'?",
        options: ["Protein", "Fiber", "Carbohydrate", "Fat"],
        correct: 0
    },
    {
        question: "Which vitamin is known as the 'sunshine vitamin'?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correct: 2
    },
    {
        question: "What does BMI stand for?",
        options: ["Body Mass Index", "Basic Metabolic Intake", "Bone Mineral Index", "Blood Mineral Indicator"],
        correct: 0
    },
    {
        question: "Which of these is NOT a macronutrient?",
        options: ["Carbohydrates", "Proteins", "Vitamins", "Fats"],
        correct: 2
    },
    {
        question: "What is 'kwasy tłuszczowe' in English?",
        options: ["Amino acids", "Fatty acids", "Organic acids", "Essential oils"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    const question = quizData[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <h3 class="text-2xl font-bold mb-6 text-center text-gray-800">${question.question}</h3>
        <div class="grid grid-cols-1 gap-4">
            ${question.options.map((option, index) => `
                <button class="quiz-option p-4 text-left bg-gray-50 rounded-lg hover:bg-custom-green hover:text-white transition-all duration-300 border-2 border-transparent hover:border-custom-green" 
                        onclick="selectAnswer(${index})">
                    ${option}
                </button>
            `).join('')}
        </div>
    `;
    
    document.getElementById('question-counter').textContent = currentQuestion + 1;
    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selected) {
    userAnswers[currentQuestion] = selected;
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        option.classList.remove('bg-green-500', 'bg-red-500', 'text-white');
        if (index === quizData[currentQuestion].correct) {
            option.classList.add('bg-green-500', 'text-white');
        } else if (index === selected && selected !== quizData[currentQuestion].correct) {
            option.classList.add('bg-red-500', 'text-white');
        }
        option.disabled = true;
    });
    
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    const percentage = (score / quizData.length) * 100;
    let level, emoji, title, description;
    
    if (percentage >= 80) {
        level = "Advanced";
        emoji = "🌟";
        title = "Excellent! Advanced Level";
        description = "You have a strong foundation in nutrition English. This course will help you achieve professional fluency.";
    } else if (percentage >= 60) {
        level = "Intermediate";
        emoji = "👍";
        title = "Good! Intermediate Level";
        description = "You have good basic knowledge. This course will significantly improve your professional communication skills.";
    } else {
        level = "Beginner";
        emoji = "📚";
        title = "Great Start! Beginner Level";
        description = "This course is perfect for you! We'll build your nutrition English from the ground up.";
    }
    
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-description').textContent = description;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    loadQuestion();
}

// FAQ functionality
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        answer.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

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