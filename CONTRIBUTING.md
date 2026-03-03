# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto de rediseño del sitio web de FEUNA! 

Este documento proporciona lineamientos para contribuir al proyecto. Seguir estas pautas ayuda a mantener el proyecto organizado y facilita la colaboración.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guías de Estilo](#guías-de-estilo)
- [Commits y Pull Requests](#commits-y-pull-requests)

---

## 📜 Código de Conducta

Este proyecto se adhiere al [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código.

---

## 🚀 ¿Cómo puedo contribuir?

### 🐛 Reportar Bugs

Si encuentras un bug, por favor crea un issue incluyendo:

- **Descripción clara** del problema
- **Pasos para reproducir** el comportamiento
- **Comportamiento esperado** vs comportamiento actual
- **Screenshots** si es relevante
- **Navegador y versión** donde ocurre el problema

### 💡 Sugerir Mejoras

Para sugerir una mejora o nueva funcionalidad:

- **Verifica** que no exista un issue similar
- **Describe detalladamente** la mejora propuesta
- **Explica por qué** sería útil para el proyecto
- **Añade mockups o ejemplos** si es posible

### 🎨 Contribuciones de Diseño

Para contribuciones de diseño:

- Respeta la **identidad visual** de FEUNA (ver [README.md](README.md))
- Mantén la **accesibilidad** como prioridad
- Asegúrate de que el diseño sea **responsive**
- Incluye **wireframes** o mockups de alta fidelidad

### 💻 Contribuciones de Código

Para contribuir código:

1. **Verifica** la lista de issues abiertos
2. **Comenta** en el issue que planeas trabajar
3. **Espera confirmación** antes de empezar (evita duplicar trabajo)
4. Sigue el [proceso de desarrollo](#proceso-de-desarrollo)

---

## 🔄 Proceso de Desarrollo

### 1. Fork y Clonar

```bash
# Fork el repositorio en GitHub (botón Fork)
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/pagina-feuna.git
cd pagina-feuna
```

### 2. Crear una Rama

```bash
# Crea una rama descriptiva
git checkout -b tipo/descripcion-corta

# Ejemplos:
# git checkout -b feature/mega-menu-responsive
# git checkout -b fix/header-mobile
# git checkout -b docs/update-readme
```

**Tipos de ramas:**
- `feature/` - Nueva funcionalidad
- `fix/` - Corrección de bugs
- `docs/` - Documentación
- `style/` - Cambios de estilo (CSS)
- `refactor/` - Refactorización de código

### 3. Hacer Cambios

- **Haz commits frecuentes** con mensajes descriptivos
- **Prueba tus cambios** en múltiples navegadores
- **Verifica responsive** (móvil, tablet, desktop)
- **Mantén el código limpio** y comentado

### 4. Sincronizar con Main

```bash
# Antes de hacer push, sincroniza con main
git remote add upstream https://github.com/yassir2804/pagina-feuna.git
git fetch upstream
git rebase upstream/main
```

### 5. Push y Pull Request

```bash
# Push tu rama
git push origin tipo/descripcion-corta

# Luego crea un Pull Request en GitHub
```

---

## 🎨 Guías de Estilo

### HTML

```html
<!-- ✅ BIEN: Usa indentación de 2 espacios -->
<section class="hero">
  <div class="container">
    <h1>Título</h1>
  </div>
</section>

<!-- ✅ BIEN: Usa atributos alt en imágenes -->
<img src="logo.png" alt="Logo FEUNA">

<!-- ✅ BIEN: Usa clases semánticas -->
<button class="btn btn-primary">Click</button>
```

### CSS

```css
/* ✅ BIEN: Usa variables CSS para colores */
:root {
  --color-feuna: #bb1f1f;
  --color-una: #034991;
}

.btn-primary {
  background-color: var(--color-feuna);
}

/* ✅ BIEN: Agrupa selectores relacionados */
.card,
.panel,
.widget {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* ✅ BIEN: Usa comentarios para secciones */
/* ========================================
   COMPONENTE: HEADER
   ======================================== */
```

### JavaScript

```javascript
// ✅ BIEN: Usa const/let, no var
const API_URL = 'https://api.feuna.una.ac.cr';
let currentPage = 1;

// ✅ BIEN: Usa nombres descriptivos
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('active');
}

// ✅ BIEN: Comenta código complejo
// Calcula el offset para el scroll suave
// teniendo en cuenta la altura del header fijo
const scrollOffset = headerHeight + 20;
```

### Colores y Tipografía

**Colores obligatorios:**
- Rojo FEUNA: `#bb1f1f`
- Azul UNA: `#034991`
- Gris: `#666666`

**Tipografía:**
- Familia: Space Grotesk
- Incluir pesos: 300, 400, 500, 600, 700

---

## 📝 Commits y Pull Requests

### Mensajes de Commit

Usa el formato: `Tipo: descripción corta`

**Tipos:**
- `Add:` - Agregar nueva funcionalidad
- `Fix:` - Corregir bug
- `Update:` - Actualizar funcionalidad existente
- `Refactor:` - Refactorizar código
- `Style:` - Cambios de estilo
- `Docs:` - Documentación
- `Remove:` - Eliminar código

**Ejemplos:**
```bash
git commit -m "Add: mega menú responsive para móviles"
git commit -m "Fix: alineación del footer en tablets"
git commit -m "Update: colores de botones según guía de estilo"
git commit -m "Docs: agregar instrucciones de instalación"
```

### Pull Requests

Tu Pull Request debe incluir:

1. **Título descriptivo** del cambio
2. **Descripción detallada** de qué hace el PR
3. **Referencias** a issues relacionados (#123)
4. **Screenshots** si hay cambios visuales
5. **Checklist** de verificación:

```markdown
## Descripción
[Descripción clara de los cambios]

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Cambio de diseño
- [ ] Documentación

## Checklist
- [ ] He probado en Chrome, Firefox y Safari
- [ ] He verificado responsive (móvil y tablet)
- [ ] He seguido las guías de estilo
- [ ] He actualizado la documentación si es necesario
- [ ] Mi código no genera warnings en consola

## Screenshots
[Agregar capturas si hay cambios visuales]
```

---

## ✅ Checklist Pre-Commit

Antes de hacer commit, verifica:

- [ ] El código funciona correctamente
- [ ] No hay errores en la consola del navegador
- [ ] El diseño es responsive (móvil, tablet, desktop)
- [ ] Se respetan los colores institucionales
- [ ] Las imágenes tienen atributo `alt`
- [ ] El código está comentado cuando es necesario
- [ ] Los nombres de variables/funciones son descriptivos
- [ ] Has probado en al menos 2 navegadores diferentes

---

## 🆘 ¿Necesitas Ayuda?

- 📖 Lee la documentación en [README.md](README.md)
- 🐛 Revisa los [issues existentes](https://github.com/yassir2804/pagina-feuna/issues)
- 💬 Crea un issue con tu pregunta
- 📧 Contacta al equipo [agregar email]

---

## 🙏 Gracias

Tu contribución ayuda a mejorar la experiencia digital de la comunidad estudiantil de la UNA. ¡Gracias por ser parte de este proyecto!

---

**Última actualización:** Marzo 2026
