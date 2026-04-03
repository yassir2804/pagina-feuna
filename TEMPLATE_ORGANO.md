# Template de Información para Páginas de Órganos FEUNA

Este documento define la estructura y la información necesaria para crear una página completa y consistente de cada órgano de la FEUNA, basado en la página del CAEUNA.

---

## 📋 ESTRUCTURA DE PÁGINA (Orden de secciones)

### 1. **Hero Interno**
- Título completo del órgano
- Subtítulo descriptivo (1 línea)
- Breadcrumbs: Inicio > Órganos > [Nombre]

### 2. **Introducción** (1 párrafo)
- Descripción breve y directa del órgano (2-3 líneas)
- Resaltar palabras clave en negrita

### 3. **¿Qué es [ÓRGANO]?** (Grid de 6 funciones)
- Título: "¿Qué es el [ÓRGANO]?"
- Subtítulo explicativo
- Grid 3 columnas con 6 funciones principales
- Cada función: ícono + título + descripción (1 línea)

### 4. **¿Cómo se organiza?** (Diagrama de flujo)
- Título: "¿Cómo se organiza?"
- Subtítulo explicativo
- Diagrama visual de flujo con flechas
- Mostrar la cadena organizativa/jerárquica

### 5. **Integrantes del órgano** (Filtros + Tarjetas)
- Título: "[Nombre del órgano] - Período [año]"
- Subtítulo con contexto
- Filtros horizontales por área/comisión/coordinación
- Descripción contextual que cambia según el filtro
- Tarjetas de miembros con:
  - Foto tipo pasaporte rectangular (placeholder con iniciales)
  - Nombre completo
  - Cargo/comisión (en rojo FEUNA)
  - Asociación/Facultad
  - Sede/Campus
  - Período
  - Email de contacto
  - Tag de categoría

### 6. **Funciones de cada [área/comisión/coordinación]**
- Título: "Funciones de cada [área]"
- Lista expandida con:
  - Ícono de la función
  - Nombre del área
  - Descripción detallada (2-3 líneas)

### 7. **Sección contextual específica** (Varía por órgano)
Ejemplos:
- CAEUNA: "Asociaciones y representación"
- DEUNA: "Comisiones institucionales"
- TEEUNA: "Proceso electoral"
- etc.

### 8. **Estructuras de apoyo** (3 características clave)
- Título: "Comisiones/Estructuras de apoyo"
- Grid de 3 columnas
- Cada una: ícono + título + descripción

### 9. **CTA Final**
- Fondo azul UNA (#034991)
- Título: "¿Querés saber más sobre el [ÓRGANO]?"
- Párrafo descriptivo
- 4 botones de acción:
  - Ver documentos (→ /transparencia)
  - Conocer [relacionado] (→ enlace específico)
  - Preguntas frecuentes (→ /faq)
  - Contactar (→ /contacto)

---

## 📝 CHECKLIST DE INFORMACIÓN REQUERIDA

### ✅ **Información básica**
```
□ Nombre completo del órgano
□ Siglas/Acrónimo
□ Subtítulo descriptivo (1 línea)
□ Introducción (2-3 líneas)
□ Año del período actual
```

### ✅ **Funciones principales (6 items)**
```
□ Función 1: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono de lucide-react]
□ Función 2: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono]
□ Función 3: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono]
□ Función 4: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono]
□ Función 5: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono]
□ Función 6: [nombre] - [descripción]
  └─ Ícono sugerido: [nombre de ícono]
```

### ✅ **Estructura organizativa**
```
□ Descripción del diagrama de flujo
□ Niveles de organización (4-6 niveles)
  Ejemplo CAEUNA: Estudiantado → Asociaciones → Representaciones → CAEUNA → Mesa Coordinadora
□ Explicación de cada nivel
```

### ✅ **Áreas/Comisiones/Coordinaciones del órgano**
```
□ Área "Todas" (visión general)
  └─ Nombre: "Todas las [áreas]"
  └─ Descripción general
  └─ Ícono: Users

□ Área 1:
  └─ ID único (para filtros)
  └─ Nombre completo
  └─ Descripción detallada (2-3 líneas)
  └─ Ícono sugerido

□ Área 2:
  └─ ID único
  └─ Nombre completo
  └─ Descripción detallada
  └─ Ícono sugerido

[...continuar para todas las áreas]
```

### ✅ **Integrantes/Miembros (por cada persona)**
```
□ Miembro 1:
  └─ Nombre completo (o placeholder: "Cargo/Función")
  └─ Cargo específico
  └─ Área/comisión/coordinación (ID que coincida con los filtros)
  └─ Asociación/Facultad de procedencia
  └─ Sede/Campus
  └─ Período (ej: "2025-2026")
  └─ Email de contacto
  └─ Iniciales (para placeholder de foto)

[...continuar para todos los integrantes]
```

### ✅ **Funciones detalladas de cada área**
```
□ Para cada área/comisión/coordinación:
  └─ Nombre completo del área
  └─ Descripción ampliada de sus funciones (2-4 líneas)
  └─ Ícono representativo
```

### ✅ **Sección contextual específica**
```
□ Título de la sección
□ Subtítulo explicativo
□ Contenido específico (puede ser):
  └─ Lista de puntos clave (4-6 items)
  └─ Explicación de procesos
  └─ Relación con otras estructuras
  └─ Enlace a página relacionada
```

### ✅ **Estructuras de apoyo (3 características)**
```
□ Característica 1:
  └─ Título
  └─ Descripción (1-2 líneas)
  └─ Ícono sugerido

□ Característica 2:
  └─ Título
  └─ Descripción
  └─ Ícono sugerido

□ Característica 3:
  └─ Título
  └─ Descripción
  └─ Ícono sugerido
```

### ✅ **CTA Final**
```
□ Título personalizado
□ Párrafo descriptivo
□ Botón 1: [texto] → [URL]
□ Botón 2: [texto] → [URL]
□ Botón 3: Preguntas frecuentes → /faq
□ Botón 4: Contactar → /contacto
```

### ✅ **FAQ para la sección del órgano** (en /faq)
```
□ Pregunta 1: [texto]
  └─ Respuesta: [texto]
□ Pregunta 2: [texto]
  └─ Respuesta: [texto]
□ Pregunta 3: [texto]
  └─ Respuesta: [texto]
□ Pregunta 4+: [texto]
  └─ Respuesta: [texto]

[Mínimo 4 preguntas, máximo 8]
```

---

## 🎨 GUÍA DE ESTILOS CONSISTENTES

### Colores
- **Rojo FEUNA**: `#bb1f1f` - Para botones primarios, acentos, títulos de cargo
- **Azul UNA**: `#034991` - Para CTA final, enlaces, elementos secundarios
- **Gris oscuro**: `#1a1a1a` - Para títulos principales
- **Gris medio**: `#666666` - Para textos descriptivos
- **Gris claro**: `#f5f5f5` - Para fondos alternados
- **Bordes**: `#dddddd`

### Tipografía
- **Título H2**: 32px, peso 700
- **Título H3**: 18-24px, peso 700
- **Cargo/Destaque**: 15-16px, peso 600
- **Texto cuerpo**: 14-15px, línea 1.6-1.7
- **Texto pequeño**: 12-13px

### Espaciado
- **Secciones**: `py-16` (padding vertical)
- **Contenedores**: `max-w-[1200px]` o `max-w-[900px]`
- **Tarjetas**: `gap-6` entre ellas
- **Padding interno**: `p-6` o `px-6 py-4`

### Iconos
- Tamaño estándar: 28-32px
- Tamaño pequeño (tarjetas): 12-13px
- Color primario: `text-[#bb1f1f]`
- Librería: `lucide-react`

---

## 📂 EJEMPLO DE ESTRUCTURA DE DATOS (TypeScript)

```typescript
// Funciones principales del órgano
const funcionesOrgano = [
  { 
    icono: IconoLucide, 
    titulo: "Nombre función", 
    desc: "Descripción breve" 
  },
  // ... 6 funciones totales
];

// Áreas/comisiones/coordinaciones
const areas = [
  {
    id: "todos",
    nombre: "Todas las [áreas]",
    desc: "Descripción general del conjunto",
    icono: Users,
  },
  {
    id: "area-1",
    nombre: "Nombre del área 1",
    desc: "Descripción detallada de funciones y responsabilidades",
    icono: IconoLucide,
  },
  // ... continuar
];

// Miembros del órgano
const miembros = [
  {
    nombre: "Nombre completo o Cargo",
    area: "area-1", // ID que coincide con areas[]
    cargo: "Cargo específico",
    asociacion: "Asociación/Facultad",
    sede: "Campus/Sede",
    periodo: "2025-2026",
    email: "contacto@una.cr",
    iniciales: "AB",
  },
  // ... continuar
];
```

---

## 🔄 ÓRGANOS PENDIENTES DE IMPLEMENTAR

### DEUNA (Directorio Ejecutivo)
- [ ] Información recopilada
- [ ] Página implementada
- [ ] FAQ agregado a /faq

### TEEUNA (Tribunal Electoral)
- [ ] Información recopilada
- [ ] Página implementada
- [ ] FAQ agregado a /faq

### Comisión Fiscal
- [ ] Información recopilada
- [ ] Página implementada
- [ ] FAQ agregado a /faq

### Otros órganos
- [ ] [Agregar según estructura]

---

## 💡 NOTAS IMPORTANTES

1. **Evitar duplicación**: NO incluir secciones de "Normativa y documentos" ni "FAQ" dentro de las páginas de órganos. Ese contenido vive en `/transparencia` y `/faq` respectivamente.

2. **Consistencia visual**: Todos los órganos deben seguir el mismo orden de secciones y estructura de datos para mantener coherencia.

3. **Filtros funcionales**: Los IDs de áreas/comisiones deben coincidir exactamente entre el array de filtros y el array de miembros.

4. **Fotos placeholder**: Usar iniciales del nombre/cargo en un contenedor rectangular (w-24 h-28) con fondo gris.

5. **Enlaces internos**: Siempre vincular a las páginas específicas del sitio en lugar de placeholders genéricos.

6. **Responsive**: Verificar que los grids se adapten: 1 columna en móvil, 2-3 en tablet, 3-4 en desktop.

---

## ✅ CHECKLIST FINAL ANTES DE IMPLEMENTAR

```
□ Toda la información requerida está recopilada
□ Se tienen los 6 funciones principales con íconos
□ Se tienen todas las áreas/comisiones definidas
□ Se tiene la lista completa de integrantes
□ Se tiene el diagrama organizativo claro
□ Se tiene la sección contextual específica
□ Se tienen las 3 características de apoyo
□ Se tienen 4-8 preguntas para FAQ
□ Se verificó que no hay duplicación con /transparencia o /faq
□ Se tienen los enlaces correctos para el CTA final
```

---

**Fecha de creación**: Abril 2026  
**Basado en**: Página del CAEUNA (`/src/app/components/pages/CaeunaPage.tsx`)  
**Propósito**: Mantener consistencia y completitud en todas las páginas de órganos de la FEUNA
