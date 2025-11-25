## 🗑️ Componente Global: Modal de Confirmación de Eliminación

> **Scope:** Global compartido (`src/shared/components/DeleteConfirmationModal`)
> **Uso:** Todas las pantallas con funcionalidad de eliminación (Albaranes, Clientes, Tarifas)

### Propósito

**Prevenir pérdida accidental de datos:**
- Confirmar antes de eliminar registros
- Mensaje claro y específico
- Advertencia de irreversibilidad
- Botones diferenciados (Cancelar vs Eliminar)

---

### Estructura Visual

**Modal centrado:**
```
┌─────────────────────────────────────┐
│  ⚠️  Eliminar albarán #1234         │ ← Header con icono de advertencia
├─────────────────────────────────────┤
│                                     │
│  ¿Estás seguro de que deseas        │
│  eliminar el albarán #1234?         │
│                                     │
│  Esta acción no se puede deshacer.  │ ← Advertencia en rojo/naranja
│                                     │
├─────────────────────────────────────┤
│                                     │
│       [Cancelar]    [Eliminar]      │ ← Botones touch-friendly
│                                     │
└─────────────────────────────────────┘
```

**Elementos:**
1. **Icono de advertencia (⚠️):** Visual prominente
2. **Título descriptivo:** "Eliminar [entidad] [identificador]"
3. **Pregunta de confirmación:** Específica al registro
4. **Advertencia de irreversibilidad:** Texto destacado
5. **Botones de acción:** Cancelar (secundario) + Eliminar (destructivo)

---

### Especificaciones Técnicas

**Tamaño del modal:**
- 📱 **Móvil:** 90% ancho, altura automática
- 📐 **Tablet/Desktop:** 400-500px ancho, altura automática
- 🎯 **Max-width:** 500px
- 📏 **Padding interno:** 20-24px

**Touch targets:**
- 📏 **Botones:** Mínimo 44px altura, padding 12-16px
- 📐 **Gap entre botones:** 12-16px
- 🎨 **Ancho botones:**
  - Móvil: Full-width stack vertical
  - Desktop: Inline, ancho automático (mínimo 120px cada uno)

**Tipografía:**
- 🔤 **Título:** 18-20px, font-weight 600
- 🔤 **Pregunta:** 14-16px, font-weight 400
- 🔤 **Advertencia:** 13-14px, font-weight 500
- 🔤 **Botones:** 14-16px, font-weight 500

**Colores:**
- 🎨 **Icono advertencia:** Naranja/Amarillo (#F59E0B o similar)
- 🎨 **Título:** Gris oscuro/Negro
- 🎨 **Advertencia:** Rojo/Naranja (#DC2626 o similar)
- 🎨 **Botón Cancelar:** Gris (secundario)
- 🎨 **Botón Eliminar:** Rojo (#DC2626), hover más oscuro
- 🎨 **Backdrop:** rgba(0,0,0,0.5) semitransparente

**Estados visuales:**
- **Modal abierto:** Fade-in animation, backdrop
- **Botón Hover:** Color más oscuro
- **Botón Active/Touch:** Efecto ripple
- **Botón Focus:** Outline visible
- **Loading (eliminando):** Spinner en botón Eliminar, disabled ambos botones

---

### Variantes por Entidad

**1. Eliminar Albarán:**
```
⚠️  Eliminar albarán #1234

¿Estás seguro de que deseas eliminar el albarán #1234?

Esta acción no se puede deshacer.

[Cancelar]    [Eliminar]
```

**2. Eliminar Cliente:**
```
⚠️  Eliminar cliente

¿Estás seguro de que deseas eliminar el cliente "Empresa S.A."?

⚠️ ADVERTENCIA: Si eliminas este cliente, también se eliminarán
todos sus albaranes asociados (15 albaranes).

Esta acción no se puede deshacer.

[Cancelar]    [Eliminar]
```

**3. Eliminar Tarifa:**
```
⚠️  Eliminar tarifa

¿Estás seguro de que deseas eliminar la tarifa "Mano de Obra Básica"?

⚠️ ADVERTENCIA: Si eliminas esta tarifa, se perderá la referencia
en 8 albaranes que la utilizan.

Esta acción no se puede deshacer.

[Cancelar]    [Eliminar]
```

**4. Eliminar Pieza de Albarán (inline editing):**
```
⚠️  Eliminar pieza

¿Estás seguro de que deseas eliminar esta pieza del albarán?

Esta acción no se puede deshacer.

[Cancelar]    [Eliminar]
```

---

### Comportamiento

**Al abrir modal:**
1. Backdrop fade-in
2. Modal slide-in desde centro
3. Focus automático en botón "Cancelar" (acción segura por defecto)
4. Trap focus dentro del modal (accesibilidad)

**Botón "Cancelar":**
- Click → Cierra modal sin eliminar
- Tecla `Escape` → Mismo efecto
- Devuelve focus al elemento que abrió el modal

**Botón "Eliminar":**
1. Click → Cambia a estado loading
2. Muestra spinner en botón: "Eliminando..."
3. Ejecuta acción de eliminación
4. **Si éxito:**
   - Cierra modal
   - Muestra toast: "Albarán #1234 eliminado correctamente"
   - Actualiza lista (recarga o elimina de UI)
5. **Si error:**
   - Mantiene modal abierto
   - Muestra mensaje de error arriba de botones
   - Botón vuelve a estado normal
   - Usuario puede reintentar o cancelar

**Click en backdrop:**
- Cierra modal (mismo efecto que Cancelar)
- **Alternativa:** No cerrar (forzar decisión explícita) - Más seguro

**Tecla Escape:**
- Cierra modal (mismo efecto que Cancelar)

---

### Responsive

**Móvil (< 640px):**
```
┌─────────────────────┐
│  ⚠️  Eliminar       │
│  albarán #1234      │
├─────────────────────┤
│  ¿Estás seguro...?  │
│                     │
│  Esta acción no se  │
│  puede deshacer.    │
├─────────────────────┤
│  [Cancelar]         │ ← Stack vertical
│  [Eliminar]         │   (full-width)
└─────────────────────┘
```
- Botones full-width, stack vertical
- Cancelar arriba, Eliminar abajo
- Modal ocupa 90% del ancho

**Tablet/Desktop (≥ 640px):**
```
┌────────────────────────────┐
│  ⚠️  Eliminar albarán #1234│
├────────────────────────────┤
│  ¿Estás seguro...?         │
│                            │
│  Esta acción no se puede   │
│  deshacer.                 │
├────────────────────────────┤
│      [Cancelar] [Eliminar] │ ← Inline horizontal
└────────────────────────────┘
```
- Botones inline, alineados a la derecha
- Cancelar a la izquierda, Eliminar a la derecha
- Modal ancho fijo 400-500px

---

### Accesibilidad (WCAG 2.1 AA)

**Navegación por teclado:**
- ⌨️ **Tab:** Navega entre botones
- ⏎ **Enter:** Activa botón enfocado
- 🔙 **Escape:** Cierra modal (Cancelar)
- 🎯 **Focus inicial:** Botón "Cancelar" (acción segura)
- 🔒 **Focus trap:** Focus no sale del modal

**Semántica HTML:**
```html
<div
  role="alertdialog"
  aria-labelledby="delete-title"
  aria-describedby="delete-description"
  aria-modal="true"
>
  <h2 id="delete-title">
    <span aria-hidden="true">⚠️</span>
    Eliminar albarán #1234
  </h2>

  <div id="delete-description">
    <p>¿Estás seguro de que deseas eliminar el albarán #1234?</p>
    <p class="warning">Esta acción no se puede deshacer.</p>
  </div>

  <div>
    <button type="button" autoFocus>Cancelar</button>
    <button type="button" class="danger">Eliminar</button>
  </div>
</div>

<div class="backdrop" aria-hidden="true"></div>
```

**Screen readers:**
- `role="alertdialog"` → Anuncia como diálogo de advertencia
- `aria-modal="true"` → Indica que es modal
- `aria-labelledby` → Conecta con título
- `aria-describedby` → Conecta con descripción
- `autofocus` en "Cancelar" → Focus en acción segura
- Icono ⚠️ con `aria-hidden="true"` (decorativo, texto ya es claro)

**Contraste:**
- 🎨 Mínimo 4.5:1 para texto
- 🎨 Botón "Eliminar": Contraste alto con fondo rojo

**Prevención de errores (WCAG):**
- ✅ Confirmación antes de acción irreversible
- ✅ Mensaje claro de consecuencias
- ✅ Focus en acción segura (Cancelar) por defecto

---

### Ubicación del Botón de Eliminar

**Pantallas donde aparece:**

1. **Listar Albaranes (tabla):**
   - 🗑️ Icono en columna "Acciones" por fila
   - Touch: 44x44px mínimo
   - Click → Abre modal de confirmación

2. **Pantalla Albarán (detalle):**
   - 🗑️ Botón "Eliminar albarán" en header o footer
   - Color rojo/destructivo
   - Click → Abre modal de confirmación

3. **Tabla de Piezas (inline editing):**
   - 🗑️ Icono por fila en columna "Acciones"
   - Click → Abre modal de confirmación de pieza

4. **Listar Clientes (tabla):**
   - 🗑️ Icono en columna "Acciones"
   - Click → Abre modal con advertencia de albaranes asociados

5. **Pantalla Cliente (detalle):**
   - 🗑️ Botón "Eliminar cliente" en footer
   - Click → Abre modal con advertencia de albaranes

6. **Listar Tarifas (tabla):**
   - 🗑️ Icono en columna "Acciones"
   - Click → Abre modal con advertencia de referencias

7. **Pantalla Tarifa (detalle):**
   - 🗑️ Botón "Eliminar tarifa" en footer
   - Click → Abre modal con advertencia de referencias

---

### Integración en el Sistema

**Componente compartido:**
- `src/shared/components/DeleteConfirmationModal/DeleteConfirmationModal.tsx`
- `src/shared/components/DeleteConfirmationModal/DeleteConfirmationModal.test.tsx`
- `src/shared/components/DeleteConfirmationModal/useDeleteConfirmation.ts`

**Hook de uso:**
```typescript
// En cualquier componente
const {
  isOpen,
  openConfirmation,
  closeConfirmation,
  confirmDelete
} = useDeleteConfirmation({
  onConfirm: async (id) => {
    await deleteAlbaran(id)
  },
  onSuccess: () => {
    showToast('Albarán eliminado correctamente')
  },
  onError: (error) => {
    showToast('Error al eliminar: ' + error.message, 'error')
  }
})

// Botón eliminar
<button onClick={() => openConfirmation(albaran.id)}>
  🗑️ Eliminar
</button>

// Modal
<DeleteConfirmationModal
  isOpen={isOpen}
  title="Eliminar albarán #1234"
  message="¿Estás seguro de que deseas eliminar el albarán #1234?"
  warning="Esta acción no se puede deshacer."
  onCancel={closeConfirmation}
  onConfirm={confirmDelete}
/>
```

**Estado global (opcional con Zustand):**
```typescript
// src/shared/stores/uiStore.ts
interface UIStore {
  deleteModal: {
    isOpen: boolean
    entityType: 'albaran' | 'cliente' | 'tarifa'
    entityId: string
    entityName?: string
    relatedCount?: number
  } | null
  openDeleteModal: (config) => void
  closeDeleteModal: () => void
}
```

---
