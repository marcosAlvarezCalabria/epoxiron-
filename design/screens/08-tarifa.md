# Design Doc: Crear Tarifa (Pantalla 8)

## Objetivo de la Pantalla

🎯 Permitir al usuario crear una nueva tarifa con todos los detalles de precios y reglas asociadas.

---

## Contenido de la Pantalla

### 📝 Formulario de Tarifa

| Campo | Tipo | Requerido |
|-------|------|-----------|
| **Nombre de la tarifa** | Texto | ✅ Obligatorio |
| **Precio por metro lineal** | Numérico | ⚪ Opcional |
| **Precio por metro cuadrado** | Numérico | ⚪ Opcional |
| **Grosor** | Numérico | ⚪ Opcional |

### ⭐ Tarifa Especial

| Campo | Tipo | Requerido |
|-------|------|-----------|
| **Nombre/Descripción** | Texto | ⚪ Opcional |
| **Precio especial** | Numérico | ⚪ Opcional (obligatorio si se completa nombre) |

#### 📋 Regla de Tarifa Especial
- Si se completa el **nombre de pieza especial** → El **precio especial** se vuelve **obligatorio**
- Si está vacío el nombre → Precio especial no es necesario

### 🎛️ Botones de Acción

**Layout horizontal (tablet/desktop):**
- ❌ **Cancelar** (secundario, gris, mínimo 44px)
- 💾 **Guardar / Crear Tarifa** (primario, destacado, mínimo 44px)

**Comportamiento botón Cancelar:**

**Modo creación:**
- Si NO hay cambios → Vuelve a lista de tarifas
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Descartar] [Continuar editando]"

**Modo edición:**
- Si NO hay cambios → Vuelve a lista de tarifas
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Continuar editando] [Descartar]"

**Atajo de teclado:** `Escape` → Activa botón Cancelar

---

## Comportamiento

### ✅ Validación

| Regla | Descripción |
|-------|-------------|
| **Nombre obligatorio** | No permitir guardar si falta el nombre |
| **Precio especial condicional** | Si hay nombre de pieza especial → precio especial obligatorio |
| **Campos opcionales** | Pueden dejarse vacíos (excepto condiciones especiales) |

### 💾 Al Guardar
- ✅ Tarifa se añade a la **base de datos**
- 🔗 Tarifa estará **disponible para asignar a clientes**
- 🎯 **Validación previa** de campos obligatorios

### 🔀 Flujo Post-Creación
- **Opción 1:** Redirigir a lista de tarifas
- **Opción 2:** Limpiar formulario para crear otra tarifa
- **Opción 3:** Mostrar confirmación y permitir elegir acción

---

## Layout y Estilo

### 📐 Estructura
- 🎯 **Formulario centrado** y simple
- 📏 **Ancho máximo:** `360–400px`
- 📐 **Espaciado:** `16–24px` entre campos
- 📑 **Agrupación visual:** Sección de precios y sección especial diferenciadas

### 🎨 Elementos Visuales
- 👆 **Campos touch-friendly:** Mínimo `44px` de altura
- 🔤 **Labels claros** para cada campo
- ✅ **Botón Guardar destacado** (color primario)
- ⚠️ **Feedback visual** para errores:
  - Borde rojo en campos con error
  - Mensaje contextual bajo el campo
- 💡 **Indicadores de opcional/obligatorio** claros

