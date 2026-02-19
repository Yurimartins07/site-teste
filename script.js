// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Hero Video Parallax (Subtle)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroVideo = document.querySelector('#hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.3}px)`;
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '15px 50px';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
        navbar.style.padding = '20px 50px';
    }
});
