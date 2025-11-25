# Design Doc: Pantalla Login

> 📝 _Se irán añadiendo elementos según lo vaya indicando el usuario_

---

## Estructura Inicial

### 1. Título

**"Iniciar sesión"**

### 2. Campo: Usuario

- **Label:** "Usuario"
- **Placeholder:** `nombre@empresa.com`

### 3. Campo: Contraseña

- **Label:** "Contraseña"
- **Icono:** Mostrar/Ocultar contraseña

### 4. Botón Principal

- **Texto:** "Acceder"
- **Estado inicial:** Deshabilitado si faltan campos

### 5. Reglas Básicas

- ✅ Validación solo al enviar
- ⚠️ **Error general:** "Las credenciales no son correctas. Por favor, verifica tus datos."

### 6. Layout

- 🎯 Formulario centrado
- 📏 Ancho máximo: `360–400px`
- 📐 Espaciado: `16–24px`

---

## 7. Elementos Añadidos

### 7.1 Enlace "¿Olvidaste tu contraseña?"

- 📍 **Ubicación:** Debajo del campo contraseña
- 🎨 **Estilo:** Link secundario

### 7.2 Opción "Recordar usuario"

- ☑️ Checkbox debajo del formulario
- **Texto:** "Recordar usuario"

### 7.3 Logo / Branding

- 🖼️ Logo centrado en la parte superior
- **Alt:** "Logo del taller"

### 7.4 Estado Loading

- ⏳ Botón "Acceder" muestra spinner al enviar
- 🔒 Bloqueo del formulario mientras carga

### 7.5 Optimización para Tablet

- 👆 Componentes con toque mínimo: `44px`
- 📱 Inputs más altos: `48–52px`
- 📏 Botón principal: Ancho completo

### 7.6 Validaciones Avanzadas

- 📧 Usuario debe tener formato email válido
- 🔐 Contraseña mínimo **6 caracteres**
- 💬 Mensajes contextuales bajo cada campo

---

