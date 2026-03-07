// Array de proyectos con información real
const projects = [
    // SITIOS WEB
    {
        id: 1,
        title: "Gastro Coffee",
        category: "web",
        description: "Sitio web funcional para restaurante/café con menú interactivo y reservas",
        image: "assets/fotos/gastro-coffe_foto.png",
        link: "#"
    },
    {
        id: 2,
        title: "Badminteam Siachoque",
        category: "web",
        description: "Plataforma web para equipo de badminton con información de eventos y jugadores",
        image: "assets/fotos/badminteam_foto.png",
        link: "https://badminteam.wordpress.com/"
    },

    // VÍDEOS
    {
        id: 3,
        title: "Vídeo Corporativo - Factoria",
        category: "video",
        description: "Producción de vídeo corporativo profesional con motion graphics",
        image: "assets/fotos/factoria_foto.png",
        link: "https://drive.google.com/file/d/1ZeAGWTIrVvrL77ZJufGnbkzLV4c6cM7h/view?usp=sharing"
    },
    {
        id: 4,
        title: "Vídeo Edidt - Autos",
        category: "video",
        description: "Vídeo profesional editado al ritmo de la música",
        image: "assets/fotos/auto_foto.png",
        link: "https://drive.google.com/file/d/1HP4zTBywxDhI0bx_vV0B1qnw28XxQysj/view?usp=sharing"
    },

    // DISEÑO & FLYERS
    {
        id: 5,
        title: "Identidad Visual - Rico Pan",
        category: "design",
        description: "Diseño completo de identidad visual incluyendo logo y guías de marca",
        image: "assets/fotos/ricopan_foto.png",
        link: "https://drive.google.com/file/d/1cb0ea7yA9bUnn0JV6QDVW-7Jrp3pOUyg/view?usp=sharing"
    },
    {
        id: 6,
        title: "Identidad Visual - Gastro Coffee",
        category: "design",
        description: "Diseño de marca para restaurante café con paleta de colores elegante",
        image: "assets/fotos/gastro-coffe_foto.png",
        link: "https://drive.google.com/file/d/1hZ5N8aQ8O6qDdWqB2nkXzDoZzc3WAj0n/view?usp=drive_link"
    },
    {
        id: 7,
        title: "Identidad Visual - Badminteam Siachoque",
        category: "design",
        description: "Diseño completo de identidad visual incluyendo logo, paleta de colores y guías de marca",
        image: "assets/fotos/badminteam_foto.png",
        link: "https://drive.google.com/file/d/12xyWe7vK4CJhhCYM8QgtqaSSRS2vjaV4/view?usp=drive_link"
    },
    {
        id: 8,
        title: "Flyers - Autolavados",
        category: "design",
        description: "Diseño de flyers promocionales para servicio de autolavado",
        image: "assets/fotos/car-lavadero_foto.png",
        link: "https://drive.google.com/file/d/1ZuxWJRhNdwR5q1Zw_uTv738sGmeb7OBe/view?usp=drive_link"
    },
    {
        id: 9,
        title: "Poster - Badminteam",
        category: "design",
        description: "Pósters y ilustraciones promocionales para equipo de badminton",
        image: "assets/fotos/poster-BADMINTEAM-foto.png",
        link: "https://drive.google.com/file/d/1-FKkRbkq1LaU1cg7-0b3k92Pg3FUnKA8/view?usp=drive_link"
    }
];

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // 0. CARGAR SECCIÓN "SOBRE MÍ"
    loadAboutSection();

    // 1. CARGAR PROYECTOS EN LA GALERÍA
    loadProjects('all');

    // 2. CONFIGURAR FILTROS
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            // Cargar proyectos según el filtro
            const filter = this.getAttribute('data-filter');
            loadProjects(filter);
        });
    });

    // 3. MENÚ HAMBURGUESA
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 4. NAVEGACIÓN CON SCROLL
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(13, 71, 161, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Mostrar u ocultar barra basado en el scroll
        let currentScrollY = window.scrollY;
        if (typeof window.lastScrollPos === 'undefined') window.lastScrollPos = currentScrollY;

        if (currentScrollY > window.lastScrollPos && currentScrollY > 100) {
            // Bajando el scroll
            navbar.classList.add('hidden');
            const hamburgerMenu = document.querySelector('.hamburger');
            const navMenuEl = document.querySelector('.nav-menu');
            if (hamburgerMenu) hamburgerMenu.classList.remove('active');
            if (navMenuEl) navMenuEl.classList.remove('active');
        } else {
            // Subiendo el scroll
            navbar.classList.remove('hidden');
        }
        window.lastScrollPos = currentScrollY;
    });

    // 5. MOSTRAR NAVBAR AL ACERCAR EL CURSOR A LA PARTE SUPERIOR
    document.addEventListener('mousemove', function (e) {
        if (e.clientY < 60 && navbar.classList.contains('hidden')) {
            navbar.classList.remove('hidden');
        }
    });
});
// FUNCIÓN PARA CARGAR SECCIÓN "SOBRE MÍ"
function loadAboutSection() {
    const aboutText = document.querySelector('.about-text');
    const skillsContainer = document.querySelector('.skills');

    // Texto sobre mí
    aboutText.innerHTML = `
        <p>Soy un profesional creativo con experiencia en <strong>diseño gráfico, edición de vídeo y desarrollo web</strong>. Me apasiona crear soluciones digitales innovadoras que combinen estética y funcionalidad.</p>
        <p>Mi enfoque se centra en la adaptabilidad y el aprendizaje continuo, utilizando herramientas modernas como Adobe Creative Suite, WordPress e IA para entregar proyectos de calidad.</p>
    `;

    // Habilidades técnicas
    const technicalSkills = [
        'Adobe Premiere Pro',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'HTML & CSS',
        'WordPress',
        'ChatGPT / IA',
        'Diseño Digital',
    ];

    // Crear HTML de habilidades
    let skillsHTML = `
        <div class="skills-group">
            <h3>Habilidades Técnicas</h3>
            <div class="skill-tags">
    `;

    technicalSkills.forEach(skill => {
        skillsHTML += `<span class="skill-tag technical">${skill}</span>`;
    });

    skillsHTML += `
            </div>
        </div>
    `;

    skillsContainer.innerHTML = skillsHTML;
}

// FUNCIÓN PARA CARGAR PROYECTOS
function loadProjects(filter) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = ''; // Limpiar galería

    // Filtrar proyectos
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    // Crear tarjetas de proyectos
    filteredProjects.forEach(project => {
        // Crear enlace que funciona como tarjeta completa
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        projectLink.className = 'portfolio-card';
        projectLink.dataset.category = project.category;
        projectLink.style.backgroundImage = `url('${project.image}')`;

        // Crear contenido que se muestra encima de la imagen
        projectLink.innerHTML = `
            <div class="portfolio-overlay"></div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
            </div>
        `;

        portfolioGrid.appendChild(projectLink);
    });
}

// PREVENIR DESCARGA DE IMÁGENES (Click derecho y Arrastrar)
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.closest('.portfolio-card') || e.target.classList.contains('portfolio-card')) {
        e.preventDefault();
    }
});

document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG' || e.target.closest('.portfolio-card') || e.target.classList.contains('portfolio-card')) {
        e.preventDefault();
    }
});
