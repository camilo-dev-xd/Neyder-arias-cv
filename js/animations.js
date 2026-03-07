// =====================================================
// ANIMACIONES - Neyder Arias Portafolio
// =====================================================

// ---- ROTADOR DE TEXTO (aparece completo con fade) ----
class TextRotator {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.displayTime = options.displayTime || 2500; // Tiempo que se muestra cada frase
        this.fadeTime = options.fadeTime || 500;         // Duración del fade
        this.wordIndex = 0;

        // Estilos base para el fade
        this.element.style.transition = `opacity ${this.fadeTime}ms ease, transform ${this.fadeTime}ms ease`;
        this.element.style.display = 'inline-block';

        this.showWord();
    }

    showWord() {
        const word = this.words[this.wordIndex % this.words.length];

        // Fade IN: mostar texto completo
        this.element.style.opacity = '0';
        this.element.style.transform = 'translateY(8px)';

        setTimeout(() => {
            this.element.textContent = word;
            this.element.style.opacity = '1';
            this.element.style.transform = 'translateY(0)';
        }, this.fadeTime);

        // Fade OUT y pasar a la siguiente frase
        setTimeout(() => {
            this.element.style.opacity = '0';
            this.element.style.transform = 'translateY(-8px)';
            this.wordIndex++;
            setTimeout(() => this.showWord(), this.fadeTime);
        }, this.displayTime + this.fadeTime);
    }
}

// ---- PARTÍCULAS FLOTANTES ----
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.cssText = `
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        this.container.style.position = 'relative';
        this.container.style.overflow = 'hidden';
        this.container.insertBefore(this.canvas, this.container.firstChild);

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    init() {
        // Reducir densidad de partículas en móviles para mejorar rendimiento
        const divisor = window.innerWidth < 768 ? 35000 : 15000;
        const count = Math.floor((this.canvas.width * this.canvas.height) / divisor);
        
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.6,
            speedY: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.5 ? '29, 185, 220' : '100, 149, 237',
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Rebote en bordes
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

            // Dibujar partícula
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
            this.ctx.fill();
        });

        // Conectar partículas cercanas con líneas (reducido en móviles)
        const connectionDistance = window.innerWidth < 768 ? 70 : 100;

        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(100, 149, 237, ${0.15 * (1 - dist / connectionDistance)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ---- SCROLL REVEAL (Intersection Observer) ----
function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.section-title, .about-text, .skills, .portfolio-card, .contact-item, .filter-btn, .skill-tag'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}

// ---- CONTADOR DE HABILIDADES AL APARECER ----
function initSkillCounters() {
    const skillTags = document.querySelectorAll('.skill-tag');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('skill-pop');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillTags.forEach(tag => observer.observe(tag));
}

// ---- EFECTO HOVER CON PARALAJE EN HERO ----
function initParallaxHero() {
    const hero = document.querySelector('.hero');
    const photo = document.querySelector('.hero-photo');
    if (!hero || !photo) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        photo.style.transform = `translate(${x * 18}px, ${y * 12}px) scale(1.04)`;
    });

    hero.addEventListener('mouseleave', () => {
        photo.style.transform = 'translate(0, 0) scale(1)';
    });
}

// ---- ANIMACIÓN DE ENTRADA HERO ----
function initHeroEntrance() {
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-description');
    const btn = document.querySelector('.hero .btn');

    if (title) title.style.animation = 'slideInLeft 0.8s ease forwards';
    if (desc) {
        desc.style.opacity = '0';
        desc.style.animation = 'fadeInUp 0.8s ease 0.4s forwards';
    }
    if (btn) {
        btn.style.opacity = '0';
        btn.style.animation = 'fadeInUp 0.8s ease 0.7s forwards';
    }
}

// ---- INICIALIZACIÓN GENERAL ----
document.addEventListener('DOMContentLoaded', function () {
    // Máquina de escribir en el subtítulo hero
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const words = [
            'Diseño Visual',
            'Edición de Vídeo',
            'Desarrollador Web',
        ];
        subtitle.textContent = '';
        new TextRotator(subtitle, words, {
            displayTime: 2500,
            fadeTime: 500,
        });
    }

    // Partículas en el hero
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }

    // Scroll Reveal de secciones
    initScrollReveal();

    // Contadores de habilidades
    initSkillCounters();

    // Paralaje en hero photo
    initParallaxHero();

    // Animación de entrada hero
    initHeroEntrance();
});
