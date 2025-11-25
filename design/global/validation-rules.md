## ✅ Sistema Global: Reglas de Validación de Formularios

> **Scope:** Global compartido (`src/shared/utils/validation`, `src/shared/components/Form`)
> **Aplicación:** Todos los formularios de la aplicación

### Principios de Validación

**Objetivos:**
1. **Prevenir errores:** Detectar problemas antes de enviar
2. **Guiar al usuario:** Mensajes claros y accionables
3. **No interrumpir flujo:** Validar en momento apropiado
4. **Consistencia:** Mismo comportamiento en toda la app

---

### Cuándo Validar

**Regla general:**
```
Campo individual    → Validar ON BLUR (al salir del campo)
Formulario completo → Validar ON SUBMIT (al enviar)
```

#### 1. Validación ON BLUR (por campo)

**Momento:** Al salir del campo (perder focus)

**Qué validar:**
- ✅ Formato (email, teléfono, etc.)
- ✅ Longitud (mínimo/máximo caracteres)
- ✅ Campos requeridos (si está vacío)
- ✅ Patrón (regex, caracteres permitidos)

**Comportamiento:**
```
1. Usuario escribe en campo
2. Usuario hace Tab o click fuera (blur)
3. → Validación se ejecuta
4. → Si hay error: Mostrar mensaje debajo del campo
5. → Si es válido: No mostrar nada (o icono ✓ opcional)
```

**NO validar on blur:**
- ❌ Mientras el usuario está escribiendo (on change)
- ❌ En el primer focus (antes de escribir)

**Excepción - Validación on change (después del primer blur):**
- Después del primer blur con error
- → Validar en tiempo real (on change) para dar feedback inmediato
- Ayuda al usuario a saber cuándo corrigió el error

#### 2. Validación ON SUBMIT (formulario completo)

**Momento:** Al hacer click en "Guardar" / "Crear" / "Enviar"

**Qué validar:**
- ✅ Todos los campos (por si saltaron alguno)
- ✅ Validaciones cruzadas (ej: fecha fin > fecha inicio)
- ✅ Reglas de negocio (ej: mínimo 1 pieza en albarán)

**Comportamiento:**
```
1. Usuario hace click en "Guardar"
2. → Validación completa del formulario
3. → Si hay errores:
   - Prevenir envío
   - Mostrar mensaje general arriba: "Por favor, corrige los errores"
   - Scroll al primer campo con error
   - Focus en primer campo con error
   - Mostrar todos los errores en cada campo
4. → Si todo válido:
   - Mostrar loading en botón
   - Enviar formulario
```

---

### Tipos de Validación por Campo

#### Campos de Texto

**Nombre, Descripción, etc.:**
- **Requerido:** "Este campo es obligatorio"
- **Longitud mínima:** "Mínimo 3 caracteres"
- **Longitud máxima:** "Máximo 100 caracteres"
- **Validar on blur**

#### Email

**Formato:**
- **Requerido:** "El email es obligatorio"
- **Formato inválido:** "Formato de email inválido (ejemplo@dominio.com)"
- **Validar on blur**

**Regex sugerido:**
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

#### Teléfono

**Formato:**
- **Requerido:** "El teléfono es obligatorio"
- **Formato inválido:** "Formato de teléfono inválido (9 dígitos)"
- **Validar on blur**

**Regex sugerido (España):**
```javascript
/^[6-9]\d{8}$/
```

#### Números (Cantidad, Precio, etc.)

**Formato:**
- **Requerido:** "Este campo es obligatorio"
- **No es número:** "Debe ser un número válido"
- **Mínimo:** "El valor mínimo es 0"
- **Máximo:** "El valor máximo es 999999"
- **Decimales:** Permitir punto y coma (normalizar internamente)
- **Validar on blur**

#### Fechas

**Formato:**
- **Requerido:** "La fecha es obligatoria"
- **Formato inválido:** "Formato de fecha inválido (DD/MM/YYYY)"
- **Fecha pasada:** "La fecha no puede ser anterior a hoy" (si aplica)
- **Fecha futura:** "La fecha no puede ser posterior a hoy" (si aplica)
- **Validar on blur**

#### Selects / Dropdowns

**Selección:**
- **Requerido:** "Debes seleccionar una opción"
- **Validar on change** (inmediatamente al seleccionar)

#### Checkboxes

**Aceptación:**
- **Requerido:** "Debes aceptar los términos"
- **Validar on change** (inmediatamente al marcar/desmarcar)

---

### Mensajes de Error

**Ubicación:**
- 📍 Debajo del campo afectado
- 📏 Alineado a la izquierda
- 📐 Margen top: 4-8px

**Estilo visual:**
- 🎨 **Color:** Rojo (#DC2626 o similar)
- 🔤 **Font-size:** 12-14px
- 📝 **Icono opcional:** ⚠️ o ❌
- 🎨 **Campo con error:** Borde rojo (2px)

**Formato del mensaje:**
```
❌ Formato de email inválido (ejemplo@dominio.com)
```

**Tono:**
- ✅ Claro y específico
- ✅ Accionable (qué hacer para corregir)
- ❌ NO técnico ni vago
- ❌ NO culpar al usuario

**Ejemplos buenos:**
- ✅ "El email es obligatorio"
- ✅ "Formato de email inválido (ejemplo@dominio.com)"
- ✅ "Mínimo 3 caracteres"
- ✅ "El precio debe ser mayor que 0"

**Ejemplos malos:**
- ❌ "Error"
- ❌ "Valor inválido"
- ❌ "regex_validation_failed"
- ❌ "Has cometido un error en este campo"

---

### Estados Visuales de Campos

**1. Estado Normal (sin interacción):**
```
[ Campo de texto           ]
```
- Borde gris claro
- Sin mensaje

**2. Estado Focus (usuario escribiendo):**
```
[ Campo de texto|          ]
```
- Borde azul/acento primario
- Sin mensaje todavía

**3. Estado Error (después de blur):**
```
[ Campo de texto           ]  ← Borde rojo
❌ Formato de email inválido
```
- Borde rojo (2px)
- Mensaje de error debajo
- Fondo rojo muy claro (opcional)

**4. Estado Válido (opcional):**
```
[ Campo de texto           ]  ← Borde verde
✓ (icono verde opcional)
```
- Borde verde (1px) - opcional
- Icono ✓ verde - opcional
- **Recomendación:** NO mostrar estado válido para evitar ruido visual
- **Excepción:** Campos críticos (contraseñas, confirmación email)

**5. Estado Disabled:**
```
[ Campo de texto           ]  ← Gris, cursor not-allowed
```
- Background gris claro
- Texto gris
- No editable

---

### Validaciones Cruzadas

**Ejemplos:**

**1. Rango de fechas:**
```
Fecha inicio: 01/01/2024
Fecha fin:    31/12/2023  ← Error

❌ La fecha fin debe ser posterior a la fecha inicio
```

**2. Confirmación de contraseña:**
```
Contraseña:           ********
Confirmar contraseña: *******  ← Error

❌ Las contraseñas no coinciden
```

**3. Cantidad mínima (albarán):**
```
Piezas: (vacío)  ← Error en formulario

❌ Debes añadir al menos una pieza al albarán
```

**Cuándo validar:**
- On submit (validación completa)
- On blur del segundo campo (si primer campo ya tiene valor)

---

### Mensaje General de Error (Formulario)

**Ubicación:**
- 📍 Arriba del formulario (antes del primer campo)
- 🎨 Background rojo claro
- 📏 Padding: 12-16px
- 🔘 Borde izquierdo rojo grueso (4px)

**Formato:**
```
┌─────────────────────────────────────────┐
│ ⚠️  Por favor, corrige los errores      │
│     antes de continuar.                 │
└─────────────────────────────────────────┘

[Campo con error 1]
❌ Error específico

[Campo con error 2]
❌ Error específico
```

**Comportamiento:**
- Aparece solo on submit si hay errores
- Scroll automático al mensaje
- Desaparece cuando todos los errores se corrigen

---

### Validación en Tiempo Real (Progressive Enhancement)

**Después del primer blur con error:**

```
1. Usuario escribe email mal: "test@"
2. Hace blur → ❌ "Formato de email inválido"
3. Vuelve al campo (focus)
4. Escribe: "test@example"
   → Todavía error (validación on change)
5. Escribe: "test@example.com"
   → ✓ Error desaparece (validación on change)
```

**Beneficio:**
- Feedback inmediato al corregir
- Usuario sabe cuándo el campo es válido
- Reduce frustración

---

### Accesibilidad (WCAG 2.1 AA)

**Semántica HTML:**
```html
<div class="form-field">
  <label for="email" id="email-label">
    Email
    <span aria-label="obligatorio">*</span>
  </label>

  <input
    type="email"
    id="email"
    name="email"
    aria-labelledby="email-label"
    aria-describedby="email-error"
    aria-invalid="true"
    aria-required="true"
  />

  <span id="email-error" role="alert" class="error">
    Formato de email inválido (ejemplo@dominio.com)
  </span>
</div>
```

**Atributos importantes:**
- `aria-invalid="true"` → Indica campo con error
- `aria-describedby` → Conecta mensaje de error con campo
- `aria-required="true"` → Indica campo obligatorio
- `role="alert"` → Screen reader anuncia error inmediatamente
- `aria-live="polite"` → Para mensajes dinámicos (validación en tiempo real)

**Navegación por teclado:**
- ⌨️ Tab/Shift+Tab → Navega entre campos
- ⏎ Enter en último campo → Submit (si es formulario simple)
- 🎯 Focus visible en campo activo

**Contraste:**
- 🎨 Texto de error: Mínimo 4.5:1 con fondo
- 🎨 Borde rojo: Mínimo 3:1 con fondo blanco

**Campos requeridos:**
- Visual: Asterisco `*` o texto "(obligatorio)"
- Programático: `aria-required="true"` o `required` attribute

---

### Casos Especiales

**1. Validación asíncrona (servidor):**

**Ejemplo:** Verificar si email ya existe

```
1. Usuario escribe email
2. Blur → Validación de formato (cliente) ✓
3. → Llamada al servidor (debounce 500ms)
4. → Spinner pequeño al lado del campo
5. → Respuesta servidor:
   - Si existe: ❌ "Este email ya está registrado"
   - Si no existe: ✓ Campo válido
```

**2. Validación condicional:**

**Ejemplo:** Campo "Otro" obligatorio solo si seleccionó "Otro" en dropdown

```javascript
if (tipoCliente === 'otro' && otroTexto === '') {
  error = 'Especifica el tipo de cliente'
}
```

**3. Formularios multipaso (wizard):**

```
Paso 1: Datos básicos    → Validar on submit del paso
Paso 2: Dirección        → Validar on submit del paso
Paso 3: Confirmación     → Validar todo on submit final
```

Validar cada paso antes de avanzar al siguiente

---

### Aplicación por Pantalla

**1. Login:**
- Email: On blur
- Contraseña: On blur
- Submit: Validación completa + error del servidor

**2. Albarán (Crear/Editar):**
- Cliente (select): On change
- Fecha: On blur
- Observaciones: On blur (opcional)
- Piezas (tabla inline): Validar cada fila on blur
- Submit: Validación completa (mínimo 1 pieza)

**3. Cliente (Crear/Editar):**
- Nombre: On blur (requerido, min 3 chars)
- Email: On blur (formato)
- Teléfono: On blur (formato)
- Dirección: On blur (opcional)
- Submit: Validación completa

**4. Tarifa (Crear/Editar):**
- Descripción: On blur (requerido, min 3 chars)
- Precio: On blur (número, min 0)
- Submit: Validación completa

---

### Integración en el Sistema

**Utilidades compartidas:**
- `src/shared/utils/validation/validators.ts` - Funciones de validación
- `src/shared/utils/validation/messages.ts` - Mensajes de error
- `src/shared/utils/validation/schemas.ts` - Schemas de validación (Zod recomendado)

**Componentes compartidos:**
- `src/shared/components/Form/FormField.tsx` - Campo con validación
- `src/shared/components/Form/FormError.tsx` - Mensaje de error
- `src/shared/components/Form/FormLabel.tsx` - Label con required indicator

**Hooks:**
```typescript
// src/shared/hooks/useFormValidation.ts
const {
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isValid
} = useFormValidation({
  initialValues,
  validationSchema,
  onSubmit: async (values) => {
    // Submit logic
  }
})
```

**Librerías recomendadas:**
- **Validación:** Zod (TypeScript-first schema validation)
- **Forms:** React Hook Form (performance, DX)
- **Integración:** React Hook Form + Zod resolver

**Ejemplo con Zod:**
```typescript
import { z } from 'zod'

const clienteSchema = z.object({
  nombre: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Formato de email inválido'),
  telefono: z.string().regex(/^[6-9]\d{8}$/, 'Formato de teléfono inválido'),
  direccion: z.string().optional()
})
```

---
