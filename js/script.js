// Array de proyectos con información real
const projects = [
    // SITIOS WEB
    {
        id: 1,
        title: "Gastro Coffee",
        category: "web",
        description: "Sitio web funcional para restaurante/café con menú interactivo y reservas",
        image: "assets/fotos/gastro-coffe_foto.png",
        link: "https://gastro-coffe.vercel.app"
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
        title: "Coche Deportivo - Edit",
        category: "video",
        description: "Edición dinámica de coche deportivo con efectos visuales y sonido",
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
    },
    {
        id: 10,
        title: "Promo Hamburguesa",
        category: "design",
        description: "Diseño publicitario para promoción de hamburguesas con estilo vibrante",
        image: "assets/fotos/promo hamburgesa_foto.png",
        link: "assets/fotos/promo hamburgesa_foto.png"
    },
    {
        id: 11,
        title: "Oferta Laboral",
        category: "design",
        description: "Diseño para convocatoria laboral con información clara y profesional",
        image: "assets/fotos/oferta laboral_foto.png",
        link: "assets/fotos/oferta laboral_foto.png"
    },
    {
        id: 12,
        title: "Kobe Bryant - Edit",
        category: "video",
        description: "Edición de vídeo tributo a Kobe Bryant con efectos dinámicos",
        image: "assets/fotos/Kobe Bryant_foto.png",
        link: "https://drive.google.com/file/d/192dTgdTAUZ-oEYkAJQTyR5pPnadKmNIB/view?usp=drive_link"
    },
    {
        id: 13,
        title: "Tutorial-Escena 3D",
        category: "video",
        description: "Composición de escena 3D utilizando fondo verde y herramientas de IA",
        image: "assets/fotos/escena 3D_foto.png",
        link: "https://drive.google.com/file/d/1tf65g6bByZ4tcCxxLfanrXb-I0OM_xgW/view?usp=sharing"
    }
];

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Inicialización
    loadAboutSection();
    loadProjects('all');

    // 1. CONFIGURAR FILTROS
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProjects(this.getAttribute('data-filter'));
        });
    });

    // 2. MENÚ HAMBURGUESA
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 3. NAVEGACIÓN CON SCROLL
    let lastScrollPos = 0;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Sombra del navbar
        navbar.style.boxShadow = currentScrollY > 50 ? '0 2px 10px rgba(13, 71, 161, 0.1)' : 'none';

        // Mostrar / Ocultar navbar con scroll
        if (currentScrollY > lastScrollPos && currentScrollY > 100) {
            navbar.classList.add('hidden');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollPos = currentScrollY;
    });

    // Mostrar navbar al acercar el cursor arriba
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 60) navbar.classList.remove('hidden');
    });

    // 4. PREVENIR DESCARGA DE IMÁGENES
    const preventAction = (e) => {
        if (e.target.tagName === 'IMG' || e.target.closest('.portfolio-card')) {
            e.preventDefault();
        }
    };
    document.addEventListener('contextmenu', preventAction);
    document.addEventListener('dragstart', preventAction);
});

// FUNCIÓN PARA CARGAR SECCIÓN "SOBRE MÍ"
function loadAboutSection() {
    const aboutText = document.querySelector('.about-text');
    const skillsContainer = document.querySelector('.skills');

    if (!aboutText || !skillsContainer) return;

    aboutText.innerHTML = `
        <p>Soy un profesional creativo con experiencia en <strong>diseño gráfico, edición de vídeo y desarrollo web</strong>. Me apasiona crear soluciones digitales innovadoras que combinen estética y funcionalidad.</p>
        <p>Mi enfoque se centra en la adaptabilidad y el aprendizaje continuo, utilizando herramientas modernas como Adobe Creative Suite, WordPress e IA para entregar proyectos de calidad.</p>
    `;

    const technicalSkills = ['Adobe Premiere Pro', 'Adobe Illustrator', 'Adobe Photoshop', 'HTML & CSS', 'WordPress', 'ChatGPT / IA', 'Diseño Digital'];

    skillsContainer.innerHTML = `
        <div class="skills-group">
            <h3>Habilidades Técnicas</h3>
            <div class="skill-tags">
                ${technicalSkills.map(skill => `<span class="skill-tag technical">${skill}</span>`).join('')}
            </div>
        </div>
    `;
}

// FUNCIÓN PARA CARGAR PROYECTOS
function loadProjects(filter) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const fragment = document.createDocumentFragment();

    filteredProjects.forEach(project => {
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        projectLink.className = 'portfolio-card';
        projectLink.style.backgroundImage = `url('${project.image}')`;
        projectLink.innerHTML = `
            <div class="portfolio-overlay"></div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
            </div>
        `;
        fragment.appendChild(projectLink);
    });

    portfolioGrid.appendChild(fragment);
}
