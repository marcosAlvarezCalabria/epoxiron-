# Design Doc: Cliente Nuevo (Pantalla 6)

## Objetivo de la Pantalla

🎯 Permitir al usuario crear un nuevo cliente introduciendo su nombre y asignándole una tarifa existente.

---

## Contenido de la Pantalla

### 📝 Formulario de Cliente

| Campo | Tipo | Requerido |
|-------|------|-----------|
| **Nombre de la empresa** | Texto | ✅ Obligatorio |
| **Tarifa** | Selector/Desplegable | ✅ Obligatorio |

#### 📋 Selector de Tarifa
- **Fuente:** Lista de todas las tarifas existentes
- **Opción por defecto:** Selecciona una tarifa automáticamente (opcional)
- **Formato:** Desplegable con nombres de tarifas

### 🎛️ Botones de Acción

**Layout horizontal (tablet/desktop):**
- ❌ **Cancelar** (secundario, gris, mínimo 44px)
- 💾 **Guardar / Crear Cliente** (primario, destacado, mínimo 44px)

**Comportamiento botón Cancelar:**

**Modo creación:**
- Si NO hay cambios → Vuelve a lista de clientes
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Descartar] [Continuar editando]"

**Modo edición:**
- Si NO hay cambios → Vuelve a lista de clientes
- Si HAY cambios → Confirmación: "¿Descartar cambios? [Continuar editando] [Descartar]"

**Atajo de teclado:** `Escape` → Activa botón Cancelar

---

## Comportamiento

### ✅ Validación
- **Ambos campos obligatorios**
- 🚫 No permitir guardar si falta algún campo
- 💬 **Feedback visual** si faltan campos obligatorios

### 💾 Al Guardar
- ✅ Cliente se añade a la **base de datos**
- 🔗 Cliente estará **disponible para crear albaranes**
- 🔄 Selector de tarifa muestra **todas las tarifas existentes**

### 🔀 Flujo Post-Creación
- **Opción 1:** Redirigir a lista de clientes
- **Opción 2:** Limpiar formulario para crear otro cliente
- **Opción 3:** Mostrar confirmación y permitir elegir acción

---

## Layout y Estilo

### 📐 Estructura
- 🎯 **Formulario centrado** y simple
- 📏 **Ancho máximo:** `360–400px`
- 📐 **Espaciado:** `16–24px` entre campos

### 🎨 Elementos Visuales
- 👆 **Campos touch-friendly:** Mínimo `44px` de altura
- 🔤 **Labels claros** para cada campo
- ✅ **Botón Guardar destacado** (color primario)
- ⚠️ **Feedback visual** para campos vacíos (borde rojo, mensaje de error)

### 📱 Responsive
- **Tablet:** Formulario centrado, ancho máximo
- **Desktop:** Formulario centrado, mismo comportamiento

### ♿ Accesibilidad
- 🔤 Labels asociados a inputs
- ⌨️ Navegación por teclado (Tab, Enter)
- 🎨 Contraste adecuado en textos y bordes
- 📢 Mensajes de error accesibles (aria-live)

---

> 👤 _Pantalla lista para crear un cliente con nombre y tarifa asignada._

---

