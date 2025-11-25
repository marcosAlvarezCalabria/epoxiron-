### 📱 Responsive
- **Tablet:** Formulario centrado, ancho máximo
- **Desktop:** Formulario centrado, mismo comportamiento

### ♿ Accesibilidad
- 🔤 Labels asociados a inputs
- ⌨️ Navegación por teclado (Tab, Enter)
- 🎨 Contraste adecuado en textos y bordes
- 📢 Mensajes de error accesibles (aria-live)
- 💬 Indicación clara de campos obligatorios vs opcionales

---

> 💰 _Pantalla lista para crear tarifas con nombre, precios, piezas especiales y grosor._

---

# Design Doc: Listar Tarifas (Pantalla 9)

## Objetivo de la Pantalla

🎯 Permitir al usuario ver todas las tarifas existentes, buscar, filtrar y acceder a la edición de cada tarifa.

---

## Contenido de la Pantalla

### 🔍 Búsqueda y Filtros

| Tipo | Opciones |
|------|----------|
| **Buscar por nombre** | Campo de texto con búsqueda en tiempo real |
| **Filtrar por precio metro lineal** | Rango de precios |
| **Filtrar por precio metro cuadrado** | Rango de precios |
| **Filtrar por piezas especiales** | Mostrar solo tarifas con piezas especiales |

### 💰 Listado de Tarifas

Tabla con las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| **Nombre de la tarifa** | Nombre identificador |
| **Precio m. lineal** | Precio por metro lineal |
| **Precio m. cuadrado** | Precio por metro cuadrado |
| **Grosor** | Grosor asociado |
| **Piezas especiales** | Resumen (cantidad o ícono) |
| **Acciones** | ✏️ Editar / 🗑️ Eliminar |

#### 🗑️ Regla de Eliminación
- **Solo permitido** si la tarifa **NO está asignada** a ningún cliente o albarán
- Si está en uso → Mostrar mensaje de error/advertencia

### 🚫 Estado Vacío
- **Condición:** Si no hay tarifas
- **Mensaje:** "No hay tarifas registradas"
- **Ubicación:** Centrado en la pantalla

---

## Comportamiento

### 🖱️ Interacciones
- 👆 **Tarifa clicable:** Abre pantalla Crear Tarifa en **modo edición**
- ⚡ **Filtros en tiempo real:** Modifican contenido del listado
- ✏️ **Editar:** Permite modificar todos los campos de la tarifa
- 🗑️ **Eliminar:** Solo permitido si **no está asignada a clientes o albaranes**

### 🔀 Flujo de Navegación
- **Clic en tarifa** → Pantalla Crear Tarifa (modo edición)
- **Filtros/búsqueda** → Actualización instantánea del listado
- **Editar** → Abre formulario con datos precargados
- **Eliminar** → Confirmación + validación de uso en clientes/albaranes

### ⚠️ Validación de Eliminación
- Si tarifa está asignada → **Bloquear eliminación**
- Mostrar mensaje: _"No se puede eliminar. La tarifa está asignada a clientes o albaranes"_

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
- ⭐ **Indicador visual** para piezas especiales (badge, ícono, etc.)

### ⚡ Funcionalidades
- 🔍 **Búsqueda en tiempo real** por nombre
- 🔄 **Filtrado múltiple**:
  - Por precio metro lineal
  - Por precio metro cuadrado
  - Por presencia de piezas especiales
- 🎨 **Estados visuales** diferenciados (hover, disabled)

### 📊 Visualización de Datos
- **Precios vacíos:** Mostrar "—" o "N/A"
- **Piezas especiales:** Badge con cantidad o ícono ⭐
- **Columnas numéricas:** Alineadas a la derecha
- **Formato de precios:** Con símbolo de moneda (€)

### ♿ Accesibilidad
- 🔤 Nombres de columnas claros
- ⌨️ Navegación por teclado
- 🎨 Contraste adecuado
- 📢 Mensajes de error accesibles (aria-live)
- 🏷️ Labels para filtros y búsquedas

---

> 💰 _Pantalla lista para mostrar listado de tarifas con búsqueda, filtros y edición rápida._