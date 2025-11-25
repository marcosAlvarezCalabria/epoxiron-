# Design Doc: Listar Albaranes (Pantalla 5)

## Objetivo de la Pantalla

🎯 Permitir al usuario ver todos los albaranes existentes, filtrar, buscar y ejecutar acciones rápidas sobre cada albarán.

---

## Contenido de la Pantalla

### 📅 Información Temporal
- **Fecha actual** o **rango de fechas**
- Visible en la parte superior

### 🔍 Filtros y Búsqueda

| Tipo | Opciones |
|------|----------|
| **Buscar por cliente** | Campo de texto con búsqueda en tiempo real |
| **Buscar por Nº albarán** | Campo numérico/texto |
| **Filtrar por estado** | Borrador / Pendiente / Revisado |

### 📋 Listado de Albaranes

**Orden inicial:** Más nuevo a más viejo

Tabla con las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| **Nº Albarán** | Autogenerado |
| **Cliente** | Nombre del cliente |
| **Fecha** | Fecha de creación |
| **Estado** | ✅ Revisado / ❌ Pendiente |
| **Nº Piezas** | Cantidad total de piezas |
| **Importe Total** | Precio total |
| **Acciones** | 👁️ Ver / ✏️ Editar / ✅ Marcar revisado / 🗑️ Eliminar |

#### 🗑️ Regla de Eliminación
- **Solo permitido** si el albarán está en estado **Borrador**

### 🚫 Estado Vacío
- **Condición:** Si no hay albaranes
- **Mensaje:** "No hay albaranes registrados"
- **Ubicación:** Centrado en la pantalla

---

## Comportamiento

### 🖱️ Interacciones
- 👆 **Albarán clicable:** Abre pantalla única de albarán en **modo edición**
- ⚡ **Filtros en tiempo real:** Modifican orden y contenido del listado
- 🔄 **Acciones rápidas:** Reflejan cambios inmediatamente en listado y dashboard
- 🗑️ **Eliminar:** Solo permitido si estado = **Borrador**

### 🔀 Flujo de Navegación
- **Clic en albarán** → Pantalla de Albarán (modo edición)
- **Filtros/búsqueda** → Actualización instantánea del listado
- **Marcar como revisado** → Actualización de estado en tabla y dashboard

---

## Layout y Estilo

### 📐 Estructura
- 📊 **Tabla responsive** optimizada para tablet y desktop
- 📏 **Columnas alineadas** y legibles
- 📐 **Espaciado adecuado** entre filas y columnas

### 🎨 Elementos Visuales
- ✅ **Iconos de estado** claros (check / cruz)
- 👆 **Botones touch-friendly:** Mínimo `44px`
- 🔤 **Tipografía legible** y contrastada
- 🎯 **Acciones agrupadas** por fila

### ⚡ Funcionalidades
- 🔍 **Búsqueda en tiempo real**
- 🔄 **Ordenamiento** (más nuevo a más viejo por defecto)
- 🎨 **Estados visuales** diferenciados por estado de albarán

---

> 📊 _Pantalla lista para mostrar listado de albaranes con orden inicial de más nuevo a más viejo, filtros, búsqueda y acciones rápidas._

---

