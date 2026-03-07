# 🌐 Guía de Despliegue - Portafolio Neyder Arias

## Opción 1: Hosting Gratuito en Netlify (RECOMENDADO)

### Paso 1: Preparar los archivos
✅ Ya tienes todos los archivos listos

### Paso 2: Crear cuenta en Netlify
1. Ve a [netlify.com](https://www.netlify.com)
2. Haz clic en "Sign up"
3. Crea tu cuenta (puedes usar GitHub)

### Paso 3: Subir el proyecto
**Opción A - Drag & Drop (Más fácil):**
1. En Netlify, ve a "Deploys"
2. Arrastra la carpeta del proyecto aquí
3. ¡Listo! Tu sitio está online

**Opción B - GitHub (Recomendado para actualizaciones):**
1. Carga tus archivos a un repositorio en GitHub
2. En Netlify, conecta tu GitHub
3. Selecciona el repositorio
4. Desplegará automáticamente con cada push

### Paso 4: Dominios personalizados (Opcional)
1. Ve a "Domain Settings" en Netlify
2. Compra tu dominio o conecta uno existente
3. Configura los DNS records

---

## Opción 2: GitHub Pages (Gratuito)

### Paso 1: Crear repositorio
1. Ve a [github.com](https://github.com)
2. Crea un repositorio público nuevo
3. Nombre: `username.github.io`

### Paso 2: Subir archivos
```bash
# En tu carpeta del proyecto:
git init
git add .
git commit -m "Inicial: Portafolio profesional"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Paso 3: Acceder
- Tu sitio estará en `https://username.github.io`

---

## Opción 3: Hosting Tradicional (Con tu propio dominio)

### Proveedores Recomendados
- **Bluehost**: $2.95/mes + dominio
- **SiteGround**: $3.99/mes + dominio
- **Hostinger**: $2.99/mes + dominio
- **DreamHost**: $2.59/mes + dominio

### Pasos
1. Compra hosting y dominio
2. Descarga FileZilla (cliente FTP)
3. Conecta con credenciales FTP
4. Sube archivos a la carpeta `public_html`
5. Espera 24-48h para propagación del DNS

---

## Opción 4: AWS / Google Cloud / Azure

Para usuarios más avanzados. Requiere:
- Tarjeta de crédito
- Conocimiento de servidores
- ~$2-5/mes

Ver documentación de cada plataforma.

---

## Pasos PRE-Despliegue (Importante)

### ✅ Preparación Final

1. **Personalización básica:**
   - [ ] Nombre completo en hero
   - [ ] Email actualizado
   - [ ] Teléfono actualizado
   - [ ] Redes sociales correctas

2. **Contenido:**
   - [ ] Al menos 3 proyectos en cada categoría
   - [ ] Descripción "Sobre mí" completa
   - [ ] Imágenes comprimidas (< 300KB)

3. **SEO:**
   - [ ] Cambiar "tudominio.com" en sitemap.xml
   - [ ] Cambiar dominio en robots.txt
   - [ ] Meta description en index.html

4. **Testing:**
   - [ ] Probar en móvil (iOS + Android)
   - [ ] Probar todos los filtros
   - [ ] Probar todos los links
   - [ ] Google Lighthouse (90+)

---

## Después del Despliegue

### 1️⃣ Verificar en Google Search Console
```
1. Ve a search.google.com/search-console
2. Agrega tu propiedad (sitio web)
3. Verifica propiedad (DNS, HTML file, o Google Analytics)
4. Envía sitemap.xml
```

### 2️⃣ Configurar Google Analytics
```
1. Ve a analytics.google.com
2. Crea una nueva propiedad
3. Copia el código de seguimiento
4. Agrega en index.html antes de </head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3️⃣ Configurar notificaciones en redes
```
1. Comparte link en LinkedIn
2. Comparte en Twitter/X
3. Comparte en Instagram (bio)
4. Agrega a perfil de GitHub
```

### 4️⃣ Usar dominio personalizado (Opcional)
```
1. Registra dominio en Namecheap o Google Domains
2. Cambia DNS a tu proveedor de hosting
3. Espera 24-48 horas
4. Agrega SSL/HTTPS (Netlify lo hace automático)
```

---

## Dominio con Email Profesional (Premium)

Si compras un dominio (ej: tudominio.com):

### Gmail + Dominio Personalizado
1. Compra dominio en Google Domains
2. Gmail cobra $6/mes por email profesional
3. Ejemplo: `neyder@tudominio.com`

### Alternativa gratuita: Zoho Mail
1. Ve a zoho.com/mail
2. Crea cuenta gratuita (1 usuario)
3. Vincula tu dominio
4. Email: `neyder@tudominio.com` (¡GRATIS!)

---

## Checklist Post-Despliegue

- [ ] Visible en Google
- [ ] Visible en Bing
- [ ] Open Graph muestra previa correcta
- [ ] Email funciona (prueba desde formulario)
- [ ] Teléfono clickeable en móvil
- [ ] Redes sociales enlazan correctamente
- [ ] Lighthouse score 90+
- [ ] Sin errores en consola (F12)
- [ ] Responsive en todos los dispositivos
- [ ] Todos los links funcionan

---

## Monitoreo Continuo

### Mensual
- [ ] Revisar Google Search Console
- [ ] Revisar Analytics
- [ ] Verificar uptime
- [ ] Actualizar proyectos si hay nuevos

### Trimestral
- [ ] Correr Lighthouse audit
- [ ] Revisar velocidad del sitio
- [ ] Actualizar meta descriptions

### Anualmente
- [ ] Revitalizar diseño si es necesario
- [ ] Revisar y actualizar contenido
- [ ] Renovar dominio y https

---

## 🆘 Problemas Comunes Post-Despliegue

**P: Mi sitio no aparece en Google**
A: Espera 1-2 semanas, luego verifica en Search Console

**P: Los meta tags no aparecen en redes**
A: Limpia caché del navegador y re-comparte

**P: El dominio muestra error**
A: Espera propagación DNS (24-48h) o contacta soporte hosting

**P: HTTPS no funciona**
A: Con Netlify es automático. Con otros hostings, compra SSL

---

## Presupuesto Anual Estimado

| Item | Costo | Obligatorio |
|------|-------|-----------|
| Dominio | $10-15 | No |
| Hosting | $0-60 | No con Netlify |
| Email Profesional | $0 (Zoho) o $72 (Gmail) | No |
| SSL Certificate | $0-80 | Sí (Netlify gratis) |
| **TOTAL** | **$0-200** | — |

---

## Siguiente Paso

🚀 **Elige una opción de despliegue y sube tu portafolio AHORA**

Mi recomendación: **Netlify** (5 minutos, gratis, fácil)

¿Necesitas ayuda? Revisa `README.md` o `PERSONALIZACION.md`

---

**Felicidades 🎉 Tu portafolio profesional está listo para conquistar el mundo digital.**
