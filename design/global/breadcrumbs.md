# 🧭 Componente Global: Breadcrumbs (Navegación)

> **Scope:** Global compartido (`src/shared/components/Breadcrumbs`)
> **Accesibilidad:** Disponible en **todas las pantallas autenticadas** con navegación profunda

## Ubicación

**Posición en layout:**
- 📍 **Ubicación:** Parte superior de la pantalla, debajo del header/navbar
- 📐 **Padding:** 12-16px horizontal, 8-12px vertical
- 🎨 **Background:** Transparente o sutil (no debe competir con contenido)
- 📏 **Altura total:** Mínimo 48px (touch-friendly en móvil)

---

## Estructura Visual

**Patrón de breadcrumbs:**
```
🏠 Dashboard > Listar Albaranes > Albarán #1234
[touch]       [touch]           [actual - no clickable]
```

**Elementos:**
1. **Icono Home (🏠):** Siempre presente, vuelve al Dashboard
2. **Separador (>):** Entre cada nivel
3. **Enlaces:** Niveles previos (clickables)
4. **Nivel actual:** Último elemento (NO clickable, estilo diferenciado)

---

## Especificaciones Técnicas

**Touch targets (móvil/tablet):**
- 📏 **Altura mínima de cada enlace:** 44px
- 📐 **Padding horizontal por enlace:** 8-12px
- 🎯 **Separación entre enlaces:** Suficiente para evitar toques accidentales

**Tipografía:**
- 🔤 **Font-size:** 14-16px
- 📝 **Font-weight:**
  - Enlaces: Normal (400)
  - Nivel actual: Bold (600) o Medium (500)
- 🎨 **Color:**
  - Enlaces: Azul/Acento primario
  - Nivel actual: Gris oscuro / Negro
  - Separador: Gris medio

**Estados visuales:**
- **Hover (desktop):** Subrayado en enlaces
- **Active/Touch:** Efecto ripple o cambio de color sutil
- **Focus:** Outline visible (accesibilidad teclado)

---

## Comportamiento Responsive

**Móvil (< 768px):**
- Si breadcrumbs es muy largo → Truncar niveles intermedios:
  ```
  🏠 Dashboard > ... > Albarán #1234
  ```
- **Alternativa:** Scroll horizontal si es necesario
- **Prioridad:** Siempre mostrar Home (🏠) + Nivel actual

**Tablet/Desktop (≥ 768px):**
- Mostrar breadcrumbs completo
- Sin truncamiento (a menos que haya 4+ niveles)

---

## Mapeo de Breadcrumbs por Pantalla

### **1. Dashboard**
```
❌ No tiene breadcrumbs (es la raíz)
```

### **2. Menú Principal**
```
🏠 Dashboard > Menú
```

### **3. Listar Albaranes**
```
🏠 Dashboard > Listar Albaranes
```

### **4. Pantalla Albarán (Crear nuevo)**
```
🏠 Dashboard > Listar Albaranes > Nuevo Albarán
```

### **5. Pantalla Albarán (Editar existente)**
```
🏠 Dashboard > Listar Albaranes > Albarán #1234
```

### **6. Listar Clientes**
```
🏠 Dashboard > Listar Clientes
```

### **7. Cliente Nuevo (Crear)**
```
🏠 Dashboard > Listar Clientes > Nuevo Cliente
```

### **8. Cliente Nuevo (Editar existente)**
```
🏠 Dashboard > Listar Clientes > Cliente: Empresa S.A.
```

### **9. Listar Tarifas**
```
🏠 Dashboard > Listar Tarifas
```

### **10. Crear Tarifa (Nueva)**
```
🏠 Dashboard > Listar Tarifas > Nueva Tarifa
```

### **11. Crear Tarifa (Editar existente)**
```
🏠 Dashboard > Listar Tarifas > Tarifa: Mano de Obra Básica
```

---

## Accesibilidad (WCAG 2.1 AA)

**Navegación por teclado:**
- ⌨️ **Tab:** Navega entre enlaces
- ⏎ **Enter/Space:** Activa enlace seleccionado
- 🎯 **Focus visible:** Outline claro en elemento enfocado

**Semántica HTML:**
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/albaranes">Listar Albaranes</a></li>
    <li aria-current="page">Albarán #1234</li>
  </ol>
</nav>
```

**Screen readers:**
- `aria-label="Breadcrumb"` en el `<nav>`
- `aria-current="page"` en el último elemento
- Separadores (`>`) con `aria-hidden="true"` (decorativos)

**Contraste:**
- 🎨 Mínimo 4.5:1 para texto de enlaces
- 🎨 Mínimo 3:1 para separadores

---

## Casos Especiales

**Si el usuario llega directo por URL (sin navegación previa):**
- Breadcrumbs se genera según la ruta actual
- Ejemplo: `/albaranes/1234` → `🏠 Dashboard > Listar Albaranes > Albarán #1234`

**Si el usuario retrocede con botón del navegador:**
- Breadcrumbs se actualiza según la nueva ruta
- Mantiene coherencia con la ubicación actual

---

## Integración en el Sistema

**Componente compartido:**
- `src/shared/components/Breadcrumbs/Breadcrumbs.tsx`
- `src/shared/components/Breadcrumbs/Breadcrumbs.test.tsx`
- `src/shared/components/Breadcrumbs/useBreadcrumbs.ts` (hook para generar breadcrumbs según ruta)

**Configuración de rutas:**
```typescript
// src/shared/config/breadcrumbsConfig.ts
export const breadcrumbsMap = {
  '/dashboard': [{ label: 'Dashboard', path: '/dashboard' }],
  '/albaranes': [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Listar Albaranes', path: '/albaranes' }
  ],
  '/albaranes/:id': [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Listar Albaranes', path: '/albaranes' },
    { label: 'Albarán #:id', path: null } // null = no clickable
  ],
  // ... más rutas
}
```

**Hook de uso:**
```typescript
// En cualquier pantalla
const breadcrumbs = useBreadcrumbs()
// Retorna: [{ label: 'Dashboard', path: '/dashboard' }, ...]
```
