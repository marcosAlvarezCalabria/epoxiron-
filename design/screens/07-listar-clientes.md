# Design Doc: Listar Clientes (Pantalla 7)

## Objetivo de la Pantalla

🎯 Permitir al usuario ver todos los clientes existentes, buscar, filtrar y acceder a la edición de cada cliente.

---

## Contenido de la Pantalla

### 🔍 Búsqueda y Filtros

| Tipo | Opciones |
|------|----------|
| **Buscar por nombre** | Campo de texto con búsqueda en tiempo real |
| **Filtrar por tarifa** | Selector de tarifas asignadas |

### 👥 Listado de Clientes

Tabla con las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| **Nombre de la empresa** | Nombre del cliente |
| **Tarifa asignada** | Nombre de la tarifa asociada |
| **Acciones** | ✏️ Editar / 🗑️ Eliminar |

#### 🗑️ Regla de Eliminación
- **Solo permitido** si el cliente **NO tiene albaranes asociados**
- Si tiene albaranes → Mostrar mensaje de error/advertencia

### 🚫 Estado Vacío
- **Condición:** Si no hay clientes
- **Mensaje:** "No hay clientes registrados"
- **Ubicación:** Centrado en la pantalla

---

## Comportamiento

### 🖱️ Interacciones
- 👆 **Cliente clicable:** Abre pantalla de Cliente Nuevo en **modo edición**
- ⚡ **Filtros en tiempo real:** Modifican contenido del listado
- ✏️ **Editar:** Permite modificar nombre o tarifa
- 🗑️ **Eliminar:** Solo permitido si **no tiene albaranes asociados**

### 🔀 Flujo de Navegación
- **Clic en cliente** → Pantalla Cliente Nuevo (modo edición)
- **Filtros/búsqueda** → Actualización instantánea del listado
- **Editar** → Abre formulario con datos precargados
- **Eliminar** → Confirmación + validación de albaranes asociados

### ⚠️ Validación de Eliminación
- Si cliente tiene albaranes → **Bloquear eliminación**
- Mostrar mensaje: _"No se puede eliminar. El cliente tiene albaranes asociados"_

---

## Layout y Estilo

### 📐 Estructura
- 📊 **Tabla responsive** optimizada para tablet y desktop
- 📏 **Columnas alineadas** y legibles
- 📐 **Espaciado adecuado** entre filas y columnas

### 🎨 Elementos Visuales
- 👆 **Botones touch-friendly:** Mínimo `44px`
- 🔤 **Tipografía legible** y contrastada
- 🎯 **Acciones agrupadas** por fila
- ⚠️ **Estados de error** para eliminación bloqueada

### ⚡ Funcionalidades
- 🔍 **Búsqueda en tiempo real** por nombre
- 🔄 **Filtrado** por tarifa asignada
- 🎨 **Estados visuales** diferenciados (hover, disabled)

### ♿ Accesibilidad
- 🔤 Nombres de columnas claros
- ⌨️ Navegación por teclado
- 🎨 Contraste adecuado
- 📢 Mensajes de error accesibles (aria-live)

---

> 👥 _Pantalla lista para mostrar listado de clientes con búsqueda, filtros y edición rápida._

---

