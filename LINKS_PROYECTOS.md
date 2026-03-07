# 📝 Links de Proyectos - Instrucciones

El portafolio está actualizado con tus proyectos reales. Ahora necesitas agregar los **links y URLs** de cada proyecto.

## 🔗 Dónde Cambiar los Links

Abre `js/script.js` en tu editor de código.

### Sitios Web

#### Proyecto 1: Gastro Coffee
Busca la línea:
```javascript
link: 'https://example.com',  // ← Cambiar esto
```

Reemplaza con tu URL:
```javascript
link: 'https://gastrocoffee.example.com',  // O tu dominio real
```

#### Proyecto 2: Badminteam Siachoque
```javascript
link: 'https://badminteamsiachoque.example.com',
```

---

### Vídeos

#### Vídeo 1: Factoria
```javascript
link: 'https://youtube.com/watch?v=TU_ID_DE_VIDEO',
```

#### Vídeo 2: Autos
```javascript
link: 'https://youtube.com/watch?v=TU_ID_DE_VIDEO',
```

#### Vídeo 3: Corporativo
```javascript
link: 'https://youtube.com/watch?v=TU_ID_DE_VIDEO',
```

---

### Identidades Visuales & Flyers

Puedes poner:
- Link a tu portafolio en Behance/Dribbble
- Link a artículo/blog sobre el proyecto
- Link a la página del cliente
- `mailto:tu@email.com` para que contacten directamente

Ejemplo:
```javascript
link: 'https://behance.net/gallery/tu-proyecto-rico-pan',
```

---

## 📷 Agregar Imágenes Reales

### Paso 1: Coloca tus imágenes en `assets/images/`

Las imágenes deben nombrase así:
```
project-web-1.jpg          (Gastro Coffee)
project-web-2.jpg          (Badminteam Siachoque)
project-video-1.jpg        (Vídeo Factoria)
project-video-2.jpg        (Vídeo Autos)
project-video-3.jpg        (Vídeo Corporativo)
project-design-1.jpg       (Identidad Visual - Rico Pan)
project-design-2.jpg       (Identidad Visual - Gastro Coffee)
project-design-3.jpg       (Identidad Visual - Badminteam)
project-design-4.jpg       (Flyers Autos)
project-design-5.jpg       (Flyers Corporativo)
project-design-6.jpg       (Ilustraciones Badminteam)
```

### Paso 2: Optimiza las imágenes
- Tamaño máximo: 300KB por imagen
- Formato recomendado: JPG (más ligero)
- Herramienta: [TinyPNG.com](https://tinypng.com)

### Paso 3: Verifica
- Si las imágenes no cargan, verás placeholders azules
- Los placeholders son SVG animados para que veas cómo se vería

---

## 🔧 Template LLS para Reemplazar

Para hacer más fácil, aquí están los valores con `REEMPLAZAR_AQUI`:

```javascript
{
    id: 1,
    title: 'Gastro Coffee',
    category: 'web',
    description: 'Sitio web para café/restaurante...',
    link: 'REEMPLAZAR_AQUI_CON_TU_URL_GASTRO_COFFEE',
    image: 'assets/images/project-web-1.jpg'
},
{
    id: 2,
    title: 'Badminteam Siachoque',
    category: 'web',
    description: 'Plataforma web para equipo...',
    link: 'REEMPLAZAR_AQUI_CON_TU_URL_BADMINTEAM',
    image: 'assets/images/project-web-2.jpg'
},
```

---

## 📱 Redes Sociales

En `index.html`, busca la sección de contacto y reemplaza:

```html
<a href="https://linkedin.com" target="_blank">LinkedIn</a>
<a href="https://instagram.com" target="_blank">Instagram</a>
<a href="https://github.com" target="_blank">GitHub</a>
<a href="mailto:neyder@example.com">Email</a>
<a href="tel:+573001234567">Teléfono</a>
```

Con tus datos reales:
```html
<a href="https://linkedin.com/in/tu-perfil" target="_blank">LinkedIn</a>
<a href="https://instagram.com/tu-usuario" target="_blank">Instagram</a>
<a href="https://github.com/tu-usuario" target="_blank">GitHub</a>
<a href="mailto:tu-email@dominio.com">Email</a>
<a href="tel:+573001234567">Teléfono</a>
```

---

## ✅ Checklist

Una vez completado:

- [ ] Todos los links de proyectos web están actualizados
- [ ] Todos los links de vídeos (YouTube) están agregados
- [ ] Todos los links de portfolios (Behance/Dribbble) están listos
- [ ] Imágenes reales están colocadas en `assets/images/`
- [ ] Redes sociales tienen tus perfiles reales
- [ ] Email y teléfono son correctos
- [ ] Probaste que los links funcionen
- [ ] Probaste que las imágenes se vean correctamente

---

## 💡 Pro Tips

1. **Para vídeos de YouTube:**
   - Copia la URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
   - Asegúrate que esté pública

2. **Para portfolios:**
   - Si tienes Behance, liga directamente a tu proyecto
   - Si tienes Dribbble, liga a tu perfil
   - Si no tienes, puede ser tu email directo (`mailto:`)

3. **Para sitios web:**
   - Si no tienes dominio aún, puedes poner:
     - Link a Netlify/Vercel del proyecto
     - Link a GitHub où está hosteado
     - Placeholder (`https://ejemplo.com`)

4. **Imágenes destacadas:**
   - Usa screenshot/thumbnail del proyecto
   - Para vídeos, usa un frame importante
   - Para diseño, muestralas mockups

---

**Una vez tengas todo listo, tu portafolio mostrará tus mejores trabajos al mundo. 🚀**

¿Necesitas ayuda? Revisa el archivo `PERSONALIZACION.md`
