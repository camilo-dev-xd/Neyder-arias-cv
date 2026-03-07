# 🎨 Portafolio Neyder Arias

Un portafolio web moderno, creativo y profesional con paleta de colores azul, optimizado para SEO y UX.

## 📋 Características

✅ **Diseño Responsivo** - Se adapta perfectamente a cualquier dispositivo (móvil, tablet, desktop)
✅ **Paleta Azul Elegante** - Colores profesionales y armoniosos
✅ **Filtros Dinámicos** - Filtra entre Sitios Web, Vídeos y Diseño/Flyers
✅ **Optimizado SEO** - Meta tags, Open Graph, Schema.org, sitemap.xml, robots.txt
✅ **Excelente UX** - Navegación intuitiva, animaciones suaves, smooth scroll
✅ **Performance** - Cargas rápidas, lazy loading, minificación
✅ **Menú Mobile** - Menú hamburguesa adaptable a dispositivos pequeños
✅ **Contacto Directo** - Email, teléfono y enlaces a redes sociales

## 🚀 Inicio Rápido

### 1. Estructura del Proyecto
```
portafolio-neyder/
├── index.html                 # Página principal
├── css/
│   ├── paleta.css           # Variables de colores
│   └── styles.css           # Estilos principales
├── js/
│   └── script.js            # Funcionalidad JavaScript
├── assets/
│   ├── images/              # Imágenes de proyectos
│   ├── videos/              # Archivos de vídeo
│   └── icons/               # SVGs de redes sociales
├── data.json                # Datos de proyectos (opcional)
├── sitemap.xml              # Mapa del sitio (SEO)
├── robots.txt               # Configuración de rastreadores
├── .htaccess                # Configuración del servidor Apache
└── README.md                # Este archivo
```

### 2. Coloress Disponibles (Variables CSS)

En `css/paleta.css` encontrarás estas variables de color:

```css
--color-primary: #0D47A1;       /* Azul oscuro profesional */
--color-secondary: #1565C0;     /* Azul medio */
--color-accent: #42A5F5;        /* Azul claro brillante */
--color-light-bg: #F0F4FC;      /* Azul muy claro */
--color-text-dark: #1A237E;     /* Azul muy oscuro */
```

Personaliza estos valores para cambiar toda la paleta.

## 🎯 Cómo Personalizar

### Cambiar Información Personal

1. **index.html:**
   - Cambia "NEYDER ARIAS" en la sección hero
   - Actualiza el email en la sección de contacto
   - Actualiza el teléfono
   
2. **data.json:**
   - Modifica "author", "email", "phone" en la sección metadata
   - Actualiza URLs de redes sociales

### Agregar Tus Proyectos

Edita los proyectos en `js/script.js` en el array `projects`:

```javascript
{
    id: 10,
    title: 'Tu Proyecto',
    category: 'web',  // 'web', 'video', o 'design'
    description: 'Descripción del proyecto',
    link: 'https://ejemplo.com',
    image: 'assets/images/proyecto.jpg'
}
```

### Cambiar la Paleta de Colores

Edita `css/paleta.css`:

```css
:root {
    --color-primary: #TUNE_COLOR;
    --color-secondary: #TU_COLOR;
    --color-accent: #TU_COLOR;
    --color-light-bg: #TU_COLOR;
    --color-text-dark: #TU_COLOR;
}
```

### Agregar Imágenes

1. Coloca tus imágenes en `assets/images/`
2. Actualiza la propiedad `image` en los proyectos
3. Usa formato JPG o PNG (preferiblemente JPG comprimido)

## 📱 Secciones del Sitio

### Hero (Encabezado)
- Nombre y tagline
- Descripción breve
- CTA "Ver mis trabajos"

### Sobre Mí
- Descripción profesional
- Habilidades (etiquetas personalizables)

### Portafolio
- Galería de proyectos
- Filtros por categoría (Todos, Sitios Web, Vídeos, Diseño & Flyers)
- Animaciones suaves al filtrar

### Contacto
- Email (enlace mailto)
- Teléfono (enlace tel)
- Redes sociales (LinkedIn, Instagram, GitHub)
- Iconos SVG interactivos

## 🔍 SEO

### Optimizaciones Incluidas

✅ **Meta Tags** - Title, description, keywords
✅ **Open Graph** - Para compartir en redes sociales
✅ **Schema.org** - Datos estructurados (opcional, agregar)
✅ **Sitemap.xml** - Índice de páginas
✅ **Robots.txt** - Instrucciones para rastreadores
✅ **Semantic HTML** - Uso correcto de etiquetas
✅ **URLs Limpias** - Con hash para navegación SPA
✅ **Alt Text** - Descripciones de imágenes

### Checklist SEO

- [ ] Cambiar URLs de Open Graph en index.html
- [ ] Cambiar "tudominio.com" en .htaccess y sitemap.xml
- [ ] Agregar alt text a todas las imágenes
- [ ] Crear página de términos y privacidad (opcional)
- [ ] Verificar en Google Search Console
- [ ] Verificar en Google Analytics
- [ ] Probar con Lighthouse (target: 90+)

## 🎨 Personalización Avanzada

### Cambiar Familias de Fuentes

En `css/paleta.css`, actualiza:
```css
--font-family: 'Tu Fuente', sans-serif;
```

Importa la fuente en `css/styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;600;700&display=swap');
```

### Agregar Más Filtros

1. Edita el HTML en `index.html`
2. Agrega nuevo valor a `data-filter`
3. Agrega nueva categoría en el array `projects` de `js/script.js`

### Agregar Animaciones Personalizadas

En `css/styles.css`, añade keyframes:
```css
@keyframes miAnimacion {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## 🚀 Despliegue

### Opción 1: Hosting Tradicional (Apache)
1. Sube todos los archivos a tu servidor
2. El `.htaccess` configurará automáticamente la caché y compresión
3. Asegúrate que `mod_rewrite` esté activo

### Opción 2: Vercel / Netlify
1. Crea un repositorio en GitHub
2. Conecta tu repo con Vercel o Netlify
3. Deploy automático en cada push

### Opción 3: GitHub Pages
1. Renombra el repo como `username.github.io`
2. Push los archivos
3. Accede a `https://username.github.io`

## 🧪 Testing

### Verificar Responsive
- Abre en Chrome DevTools (F12)
- Prueba en móvil (320px), tablet (768px), desktop (1200px)

### Verificar Filtros
- Haz clic en cada filtro
- Verifica que las tarjetas cambien correctamente

### Verificar SEO
1. Usa Google Lighthouse (F12 → Lighthouse)
2. Target mínimo: 90+ en Performance, Best Practices, SEO

### Verificar Accesibilidad
- Prueba con lector de pantalla (NVDA o JAWS)
- Verifica contraste de colores
- Verifica navegación con teclado

## 📊 Google Lighthouse Checklist

- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 100

## 🛠 Herramientas Recomendadas

- **Figma** - Para diseño
- **Visual Studio Code** - Editor de código
- **Chrome DevTools** - Testing
- **Google Lighthouse** - Auditoría
- **TinyPNG** - Compresión de imágenes
- **Google Search Console** - SEO

## 📝 Checklist Final

- [ ] Cambiar información personal
- [ ] Agregar tus proyectos
- [ ] Agregar imágenes reales
- [ ] Actualizar redes sociales
- [ ] Cambiar paleta de colores si deseas
- [ ] Verificar en dispositivos móviles
- [ ] Probar todos los filtros
- [ ] Verificar enlaces
- [ ] Test de Lighthouse ( 90+)
- [ ] Deploy en hosting

## 💡 Tips Adicionales

1. **Imágenes**: Optimiza el tamaño (< 200KB por imagen)
2. **Videos**: Aloja en YouTube o Vimeo, no en el servidor
3. **Dominios**: Considera un dominio personalizado
4. **Email**: Usa un email profesional (@tudominio.com)
5. **Redes Sociales**: Vincula tus perfiles reales

## 🤝 Soporte

Si tienes dudas o necesitas ayuda:
1. Revisa el código comentado
2. Consulta la estructura de los datos en `data.json`
3. Verifica la consola (F12) para errores

## 📄 Licencia

Este portafolio es de uso personal. Siéntete libre de personalizarlo como necesites.

---

**Fecha de creación**: 6 de marzo de 2026  
**Versión**: 1.0  
**Autor**: Neyder Arias
