## 📄 Componente Global: Paginación

> **Scope:** Global compartido (`src/shared/components/Pagination`)
> **Uso:** Pantallas con listas largas (Listar Albaranes, Listar Clientes, Listar Tarifas)

### Ubicación

**Posición en layout:**
- 📍 **Ubicación:** Pie de la tabla/lista
- 📐 **Padding:** 16-20px horizontal, 12-16px vertical
- 🎨 **Background:** Gris muy claro o blanco
- 📏 **Altura total:** Mínimo 60px (touch-friendly)

---

### Estructura Visual

**Layout completo:**
```
┌─────────────────────────────────────────────────┐
│  Mostrando 1-25 de 234 albaranes                │
│                                                  │
│  [<] [1] [2] [3] ... [10] [>]    25 por página ▼│
└─────────────────────────────────────────────────┘
```

**Elementos:**
1. **Info de registros:** "Mostrando X-Y de Z [entidad]"
2. **Botones de navegación:** Anterior `[<]`, Siguiente `[>]`
3. **Números de página:** Páginas clickables
4. **Selector de registros por página:** Dropdown (25, 50, 100)

---

### Especificaciones Técnicas

**Touch targets (móvil/tablet):**
- 📏 **Botones navegación (< >):** Mínimo 44x44px
- 📏 **Números de página:** Mínimo 44x44px
- 📐 **Gap entre botones:** 4-8px
- 📏 **Dropdown "por página":** Mínimo 44px de altura

**Tipografía:**
- 🔤 **Info registros:** 14-16px, color gris oscuro
- 🔤 **Números de página:** 14-16px
- 🔤 **Dropdown:** 14-16px

**Colores:**
- 🎨 **Página actual:** Azul/Acento primario, background destacado
- 🎨 **Otras páginas:** Gris oscuro, background transparente
- 🎨 **Hover:** Background gris claro
- 🎨 **Disabled (< > sin páginas):** Gris claro, no clickable

**Estados visuales:**
- **Página actual:** Background azul, texto blanco, NO clickable
- **Hover (desktop):** Background gris claro
- **Active/Touch:** Efecto ripple
- **Disabled:** Opacity 0.5, cursor not-allowed
- **Focus:** Outline visible (accesibilidad)

---

### Comportamiento Responsive

**Móvil (< 640px):**
```
Mostrando 1-25 de 234

[<] [1] [2] ... [10] [>]

25 por página ▼
```
- Stacking vertical (3 filas)
- Info registros arriba
- Navegación centro
- Dropdown abajo

**Tablet (640px - 1024px):**
```
Mostrando 1-25 de 234          [<] [1] [2] ... [10] [>]    25/pág ▼
```
- Layout horizontal
- Info izquierda
- Navegación centro
- Dropdown derecha (texto corto: "25/pág")

**Desktop (≥ 1024px):**
```
Mostrando 1-25 de 234 albaranes    [<] [1] [2] [3] ... [10] [>]    25 por página ▼
```
- Layout horizontal completo
- Más números de página visibles (si hay espacio)
- Texto completo en dropdown

---

### Lógica de Números de Página

**Patrón de truncamiento:**

**Pocas páginas (≤ 7):**
```
[<] [1] [2] [3] [4] [5] [6] [7] [>]
```
Mostrar todas

**Muchas páginas (> 7):**

- **Inicio (página 1-3):**
  ```
  [<] [1] [2] [3] ... [10] [>]
  ```

- **Medio (página 4-7):**
  ```
  [<] [1] ... [5] [6] [7] ... [10] [>]
  ```

- **Final (página 8-10):**
  ```
  [<] [1] ... [8] [9] [10] [>]
  ```

**Regla:**
- Siempre mostrar: Primera, Última, Actual, ±1 de Actual
- Usar `...` para páginas omitidas (NO clickable, decorativo)

---

### Selector "Registros por Página"

**Opciones disponibles:**
- 25 por página (por defecto)
- 50 por página
- 100 por página

**Comportamiento:**
- Al cambiar → Recarga lista con nueva cantidad
- **Mantiene filtros/búsqueda activos**
- Vuelve a página 1 (resetea paginación)

**Dropdown touch-friendly:**
- 📏 Altura: Mínimo 44px
- 🎨 Borde visible, icono ▼
- 📱 En móvil: Trigger nativo `<select>` para mejor UX

---

### Texto Informativo

**Formato:**
```
Mostrando {inicio}-{fin} de {total} {entidad_plural}
```

**Ejemplos:**
- `Mostrando 1-25 de 234 albaranes`
- `Mostrando 26-50 de 234 albaranes`
- `Mostrando 201-234 de 234 albaranes` (última página)
- `Mostrando 1-15 de 15 clientes` (una sola página)

**Caso especial (sin resultados):**
```
No hay resultados
```
(No mostrar paginación)

---

### Accesibilidad (WCAG 2.1 AA)

**Navegación por teclado:**
- ⌨️ **Tab:** Navega entre botones y dropdown
- ⏎ **Enter/Space:** Activa botón seleccionado
- 🎯 **Focus visible:** Outline claro

**Semántica HTML:**
```html
<nav aria-label="Paginación">
  <div aria-live="polite" aria-atomic="true">
    Mostrando 1-25 de 234 albaranes
  </div>

  <ul>
    <li>
      <button aria-label="Página anterior" disabled>
        <span aria-hidden="true">&lt;</span>
      </button>
    </li>
    <li>
      <button aria-label="Página 1" aria-current="page">1</button>
    </li>
    <li>
      <button aria-label="Página 2">2</button>
    </li>
    <!-- ... -->
    <li>
      <button aria-label="Página siguiente">
        <span aria-hidden="true">&gt;</span>
      </button>
    </li>
  </ul>

  <label for="page-size">Registros por página:</label>
  <select id="page-size" aria-label="Registros por página">
    <option value="25" selected>25</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</nav>
```

**Screen readers:**
- `aria-label` en nav y botones
- `aria-current="page"` en página actual
- `aria-live="polite"` en info de registros (anuncia cambios)
- `aria-atomic="true"` para leer mensaje completo
- Iconos `< >` con `aria-hidden="true"` (texto descriptivo en aria-label)

**Contraste:**
- 🎨 Mínimo 4.5:1 para texto
- 🎨 Mínimo 3:1 para botones

---

### Casos Especiales

**Una sola página (todos los registros caben):**
- Mostrar info: "Mostrando 1-15 de 15 clientes"
- **NO** mostrar botones de navegación
- **NO** mostrar selector de registros por página
- Simplificar UI (solo info)

**Última página (registros incompletos):**
- Ejemplo: "Mostrando 201-234 de 234 albaranes"
- Botón "Siguiente [>]" disabled
- Página actual es la última

**Cambio de filtros/búsqueda:**
- Resetea a página 1
- Recalcula total de registros
- Actualiza info: "Mostrando 1-25 de X resultados"

**Registro eliminado en página actual:**
- Si queda vacía → Retrocede a página anterior
- Si quedan registros → Recarga página actual

---

### Integración en Pantallas

**Pantallas que usan paginación:**

1. **Pantalla 5: Listar Albaranes**
   - Entidad: "albaranes"
   - Por defecto: 25 por página
   - Ordenamiento: Más recientes primero

2. **Pantalla 7: Listar Clientes**
   - Entidad: "clientes"
   - Por defecto: 25 por página
   - Ordenamiento: Alfabético por nombre

3. **Pantalla 9: Listar Tarifas**
   - Entidad: "tarifas"
   - Por defecto: 25 por página
   - Ordenamiento: Alfabético por descripción

---

### Integración en el Sistema

**Componente compartido:**
- `src/shared/components/Pagination/Pagination.tsx`
- `src/shared/components/Pagination/Pagination.test.tsx`
- `src/shared/components/Pagination/usePagination.ts` (lógica hook)

**Hook de uso:**
```typescript
// En pantallas de lista
const {
  currentPage,
  pageSize,
  totalItems,
  totalPages,
  goToPage,
  nextPage,
  prevPage,
  setPageSize,
  pageNumbers // [1, 2, '...', 10]
} = usePagination({
  totalItems: 234,
  initialPageSize: 25
})
```

**Persistencia (opcional):**
```typescript
// Guardar en localStorage o URL query params
// Para mantener página actual al navegar back
?page=3&pageSize=50
```

**React Query integración:**
```typescript
// Paginación server-side con React Query
const { data, isLoading } = useQuery({
  queryKey: ['albaranes', { page: currentPage, pageSize }],
  queryFn: () => fetchAlbaranes({ page: currentPage, pageSize })
})
```

---
