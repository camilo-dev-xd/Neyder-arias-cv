# 🚀 Guía de Personalizacion - Portafolio Neyder Arias

## Pasos Inmediatos para Personalizar tu Portafolio

### 1️⃣ Actualizar Mi Información

#### En `index.html` (línea ~120):
```html
<h1 class="hero-title">NEYDER ARIAS</h1>  <!-- Cambia tu nombre aquí -->
<p class="hero-subtitle">Desarrollador Web | Diseño Visual | Edición de Vídeo</p>  <!-- Tu profesión -->
```

#### En `index.html` (sección de contacto, línea ~380):
```html
<a href="mailto:neyder@example.com">neyder@example.com</a>  <!-- Tu email -->
<a href="tel:+573001234567">+57 (300) 123-4567</a>  <!-- Tu teléfono -->
```

#### En `index.html` (sección de redes sociales, linea ~400):
```html
<a href="https://linkedin.com" target="_blank">  <!-- Tu LinkedIn -->
<a href="https://instagram.com" target="_blank">  <!-- Tu Instagram -->
<a href="https://github.com" target="_blank">  <!-- Tu GitHub -->
```

### 2️⃣ Cambiar la Descripción "Sobre Mí"

#### En `index.html` (línea ~220):
```html
<p>Soy Neyder Arias, ingeniero creativo enfocado en...</p>  <!-- Tu descripción -->
```

### 3️⃣ Agregar Tus Proyectos

#### En `js/script.js` (dentro del array `projects`):

**Para Sitios Web:**
```javascript
{
    id: 1,
    title: 'Mi Sitio Web Increíble',
    category: 'web',
    description: 'Sitio web del cliente X con características Y',
    link: 'https://ejemplo.com',  // URL de tu proyecto
    image: 'assets/images/proyecto1.jpg'  // Ruta de la imagen
}
```

**Para Vídeos:**
```javascript
{
    id: 4,
    title: 'Mi Primer Vídeo',
    category: 'video',
    description: 'Vídeo promocional de 30 segundos',
    link: 'https://youtube.com/watch?v=...',
    image: 'assets/images/video1.jpg'
}
```

**Para Diseño & Flyers:**
```javascript
{
    id: 7,
    title: 'Mi Logo Profesional',
    category: 'design',
    description: 'Identidad visual para marca X',
    link: 'https://behance.net/proyecto',
    image: 'assets/images/diseño1.jpg'
}
```

### 4️⃣ Agregar Imágenes

1. Crea carpetas de tus imágenes en `assets/images/`
2. Guarda tus imágenes con nombres descriptivos:
   - `proyecto-web-1.jpg`
   - `proyecto-video-1.jpg`
   - `proyecto-diseño-1.jpg`
3. Comprime las imágenes (< 300KB cada una)
   - Usa TinyPNG.com o similar

### 5️⃣ Cambiar Colores (Opcional)

#### En `css/paleta.css`:
```css
:root {
    --color-primary: #0D47A1;      /* Azul oscuro - Cámbialo aquí */
    --color-secondary: #1565C0;    /* Azul medio */
    --color-accent: #42A5F5;       /* Azul claro */
    --color-light-bg: #F0F4FC;     /* Fondo azul claro */
    --color-text-dark: #1A237E;    /* Texto oscuro */
}
```

**Paletas de colores predefinidas:**

🔵 **Azul Profesional (Actual)**
- Primario: #0D47A1
- Secundario: #1565C0
- Acento: #42A5F5

🟣 **Púrpura Creativo**
- Primario: #6A1B9A
- Secundario: #7B1FA2
- Acento: #9C27B0

🟠 **Naranja Energético**
- Primario: #E65100
- Secundario: #F57C00
- Acento: #FF9100

🟢 **Verde Fresco**
- Primario: #1B5E20
- Secundario: #2E7D32
- Acento: #4CAF50

### 6️⃣ Actualizar SEO

#### En `index.html` (linea ~10):
```html
<meta name="description" content="Aquí va tu descripción para Google">
<meta name="keywords" content="tus, palabras, clave">
<meta property="og:title" content="Tu Nombre - Portafolio">
```

#### En `sitemap.xml`:
Cambia "tudominio.com" por tu dominio real:
```xml
<loc>https://tudominio.com</loc>
```

#### En `robots.txt`:
Cambia "tudominio.com":
```txt
Sitemap: https://tudominio.com/sitemap.xml
```

### 7️⃣ Actualizar el Logo/Avatar

El logo circular "NA" aparece en:
- Navegación superior (línea ~95 en index.html)

Para cambiarlo:
```html
<a href="#home" class="logo">NA</a>  <!-- Reemplaza NA por tus iniciales -->
```

### 8️⃣ Cambiar Habilidades

#### En `index.html` (línea ~270):
```html
<span class="skill-tag">HTML & CSS</span>
<span class="skill-tag">JavaScript</span>
<!-- Reemplaza con tus habilidades reales -->
```

---

## ✅ Checklist de Personalización

- [ ] Cambiar nombre en hero
- [ ] Cambiar tagline profesional
- [ ] Actualizar descripción "Sobre mí"
- [ ] Cambiar email
- [ ] Cambiar teléfono
- [ ] Actualizar redes sociales
- [ ] Agregar 9 proyectos (3 web + 3 vídeos + 3 diseño)
- [ ] Agregar imágenes de proyectos
- [ ] Cambiar habilidades
- [ ] Opcionalmente cambiar paleta de colores
- [ ] Actualizar SEO (description, keywords)
- [ ] Cambiar dominio en sitemap.xml
- [ ] Cambiar dominio en robots.txt
- [ ] Probar en móvil

---

## 🧪 Cómo Probar Localmente

### Opción 1: Abrir archivo HTML directamente
1. Abre `index.html` en tu navegador
2. Funciona pero las redes pueden no funcionar correctamente

### Opción 2: Usar Live Server (Recomendado)
```bash
# Instala Node.js si no lo tienes
# En PowerShell:
npm install -g live-server

# En la carpeta del proyecto:
live-server
```

### Opción 3: Python
```bash
# Python 3
python -m http.server 8000

# Luego abre http://localhost:8000
```

---

## 🎨 Ejemplos de Proyectos

**Sitio Web:**
```javascript
{
    id: 1,
    title: 'E-Commerce MecánicaPro',
    category: 'web',
    description: 'Plataforma de venta de repuestos con carrito y pagos Stripe',
    link: 'https://mecanicapro.example.com',
    image: 'assets/images/mecanica-pro.jpg'
}
```

**Vídeo:**
```javascript
{
    id: 4,
    title: 'Intro Empresarial - TechStart',
    category: 'video',
    description: 'Secuencia de 15 segundos con motion graphics y efectos 3D',
    link: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    image: 'assets/images/techstart-intro.jpg'
}
```

**Diseño:**
```javascript
{
    id: 7,
    title: 'Identidad Visual - DesignStudio',
    category: 'design',
    description: 'Logo, color palette, tipografía y brand guidelines completas',
    link: 'https://behance.net/designstudio',
    image: 'assets/images/designstudio-branding.jpg'
}
```

---

## 💡 Pro Tips

1. **Ordena tus mejores trabajos primero**
   - Los primeros proyectos son los más visibles

2. **Usa descripciones detalladas**
   - Menciona tecnologías usadas o resultados alcanzados

3. **Mantén las imágenes ligeras**
   - Máximo 200KB por imagen
   - Formato JPG para fotos, PNG para gráficos

4. **Actualiza regularmente**
   - Agrega nuevos proyectos cada mes
   - Mantén un blog de tutoriales (opcional)

5. **Recopila feedback**
   - Pide opiniones a colegas
   - Usa Google Analytics para ver qué funciona

---

## 🆘 Problemas Comunes

**P: Los filtros no funcionan**
A: Verifica que los valores de `category` coincidan exactamente en `index.html` y `js/script.js`

**P: Las imágenes no carga**
A: Verifica la ruta: `assets/images/nombre.jpg`

**P: Los colores no cambian**
A: Limpia la caché del navegador (Ctrl+Shift+Delete)

**P: El menú móvil no funciona**
A: Abre la consola (F12) y busca errores de JavaScript

---

**¡Tu portafolio está listo! Personalízalo y comparte tu trabajo con el mundo.** 🚀
