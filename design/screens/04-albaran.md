# Design Doc: Pantalla de Albarán (Pantalla 4)

## Objetivo de la Pantalla

🎯 Permitir al usuario crear un nuevo albarán o editar un albarán existente desde la misma interfaz, manteniendo todos los campos y piezas visibles y editables según reglas de negocio.

---

## Modo de la Pantalla

### 🆕 Modo Creación
- **Origen:** Desde menú "Albarán nuevo"
- **Estado inicial:** Campos vacíos
- **Botón principal:** "Guardar borrador"
- **Habilitación:** Cuando se completa el mínimo requerido

### ✏️ Modo Edición
- **Origen:** Desde Dashboard (Ver/Editar)
- **Estado inicial:** Campos rellenados con datos existentes
- **Botones disponibles:**
  - "Guardar cambios" (activo)
  - "Marcar como revisado" (disponible)

---

## Contenido de la Pantalla

### 📋 Información General

| Campo | Descripción |
|-------|-------------|
| **Nº Albarán** | Autogenerado |
| **Cliente** | Selección de lista o buscador |
| **Fecha** | Autocompletada |
| **Estado** | Borrador / Pendiente / Revisado |

### 🔧 Listado de Piezas

Tabla editable con las siguientes columnas:

- **Nombre de la pieza**
- **Cantidad**
- **Metros lineales / Metros cuadrados**
- **Grosor**
- **Color RAC o especial**
- **Precio** _(opcional)_

#### Funcionalidades de Edición Inline

**Patrón optimizado para tablet:**

1. **Activar edición:**
   - Touch en icono ✏️ de la fila → Toda la fila se vuelve editable
   - Solo una fila editable a la vez

2. **Controles por fila (touch-friendly):**
   - ✅ Botón "Guardar" (verde, mínimo 44px)
   - ❌ Botón "Cancelar" (gris, mínimo 44px)
   - Ubicados al final de la fila

3. **Atajos de teclado (opcional, para desktop):**
   - `Enter` → Guarda cambios
   - `Escape` → Cancela edición

4. **Validación:**
   - En tiempo real mientras edita
   - Mensajes de error bajo el campo

5. **Estados visuales:**
   - Fila en edición: Borde destacado (azul/verde)
   - Inputs touch-friendly: Mínimo 48-52px de altura
   - Scroll horizontal si la tabla es muy ancha

6. **Comportamiento:**
   - Touch fuera de la fila en edición → Mostrar confirmación si hay cambios sin guardar
   - "¿Guardar cambios? [Guardar] [Descartar] [Cancelar]"

7. **Alternativa modal:**
   - 🔲 **Modal opcional:** Para edición avanzada con más detalles si se requiere

### 🎛️ Botones de Acción

**Layout horizontal (tablet/desktop):**
- ❌ **Cancelar** (secundario, gris, mínimo 44px)
- 💾 **Guardar cambios / Guardar borrador** (primario, destacado, mínimo 44px)
- ✅ **Marcar como revisado** (opcional, según estado)

**Comportamiento botón Cancelar:**

**Modo creación:**
- Si NO hay cambios → Vuelve al Dashboard
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Descartar] [Continuar editando]"

**Modo edición:**
- Si NO hay cambios → Vuelve a pantalla anterior
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Descartar] [Continuar editando]"

**Atajo de teclado:** `Escape` → Activa botón Cancelar

---

## Comportamiento

### 🔐 Reglas de Edición
- ✅ Edición disponible mientras el albarán **no esté finalizado**
- 💾 Guardar cambios actualiza albarán en **tiempo real**
- ✅ Marcar como revisado refleja estado en **Dashboard**
- 🤖 Reglas de negocio aplicadas automáticamente:
  - Tarifas
  - Medidas
  - Precios mínimos

### 🔀 Diferenciación de Modos

| Origen | Modo | Estado |
|--------|------|--------|
| 📄 **Menú** | Creación | Campos vacíos |
| 📊 **Dashboard** | Edición | Campos rellenados |

---

## Layout y Estilo

### 📐 Estructura
- **Sección general:** Parte superior (Info general)
- **Lista de piezas:** Parte inferior (Editable)
- **Espaciado:** Touch-friendly (mínimo `44px`)

### 🎨 Elementos Visuales
- ✅ **Botón "Marcar como revisado"** destacado
- 👆 **Optimizado para tablet**
- 📱 **Responsive design**
- 🔤 **Tipografía legible** y contrastada

### ⚡ Interactividad
- **Edición inline** en tabla de piezas
- **Modal opcional** para detalles avanzados
- **Validación en tiempo real** de campos obligatorios

---

> 🎉 _Pantalla única lista para cubrir creación y edición de albaranes, integrable desde menú y Dashboard._

---

