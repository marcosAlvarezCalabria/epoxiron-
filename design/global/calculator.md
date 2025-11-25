# 🧮 Componente Global: Calculadora Modal

> **Scope:** Global compartido (`src/shared/components/Calculator`)
> **Accesibilidad:** Disponible desde **todas las pantallas autenticadas** de la aplicación

## Acceso

**Botón flotante (FAB - Floating Action Button):**
- 📍 **Ubicación:** Esquina inferior derecha (fixed position)
- 🎨 **Icono:** 🧮 o calculadora estándar
- 📏 **Tamaño:** Mínimo 56x56px (touch-friendly)
- 🎯 **z-index:** Alto (por encima de todo el contenido)
- 💡 **Color:** Acento secundario (no interfiere con acciones primarias)
- ♿ **Aria-label:** "Abrir calculadora"

**Comportamiento:**
- Touch/Click → Abre modal de calculadora
- **Visible en:** Dashboard, Menú, Albaranes, Clientes, Tarifas
- **NO visible en:** Login (pantalla no autenticada)
- Se mantiene accesible durante scroll

---

## Modal de Calculadora

### Layout

**Tamaño del modal:**
- 📱 **Móvil:** Full-width, altura automática desde bottom
- 📐 **Tablet/Desktop:** 320x480px centrado

**Estructura:**
```
┌─────────────────────────────┐
│ Calculadora            [✕]  │ ← Header con botón cerrar
├─────────────────────────────┤
│  ┌─────────────────────┐    │
│  │ 0                   │    │ ← Display (resultado)
│  └─────────────────────┘    │
├─────────────────────────────┤
│  [C]  [±]  [%]  [÷]         │
│  [7]  [8]  [9]  [×]         │ ← Teclado numérico
│  [4]  [5]  [6]  [−]         │   (touch-friendly)
│  [1]  [2]  [3]  [+]         │
│  [0]       [.]  [=]         │
├─────────────────────────────┤
│  📋 Copiar resultado        │ ← Acción adicional
└─────────────────────────────┘
```

### Especificaciones Técnicas

**Display:**
- 📊 Altura: 60-80px
- 🔤 Font-size: 24-32px (monospace)
- 🎨 Background: Gris claro
- ➡️ Alineación: Derecha
- 📝 Muestra operación y resultado

**Botones del teclado:**
- 📏 **Tamaño mínimo:** 56x56px (touch-friendly)
- 📐 **Gap entre botones:** 8-12px
- 🎨 **Colores:**
  - Números (0-9): Blanco/Gris claro
  - Operadores (+, −, ×, ÷): Naranja/Azul
  - Igual (=): Verde/Acento primario
  - Clear (C): Rojo suave
- 🔤 **Font-size:** 20-24px
- ♿ **Estados:** Hover, Active, Focus (para teclado)

**Operaciones soportadas:**
- ➕ Suma (+)
- ➖ Resta (−)
- ✖️ Multiplicación (×)
- ➗ División (÷)
- 📍 Decimal (.)
- 🔄 Cambiar signo (±)
- 💯 Porcentaje (%)
- 🗑️ Clear (C)

### Funcionalidades

**1. Operaciones básicas:**
- Suma, resta, multiplicación, división
- Decimales con punto (.)
- Porcentajes automáticos
- Cambio de signo

**2. Teclado físico (opcional desktop):**
- Números `0-9` → Insertar dígito
- Operadores `+`, `-`, `*`, `/` → Operación
- `Enter` o `=` → Calcular
- `Escape` → Cerrar modal
- `C` o `Delete` → Clear
- `.` → Decimal

**3. Copiar resultado:**
- 📋 Botón "Copiar resultado" al pie del modal
- Touch/Click → Copia al clipboard
- Toast/Snackbar: "Resultado copiado: 123.45"

**4. Cerrar modal:**
- ❌ Botón cerrar (X) en header
- Click fuera del modal (backdrop)
- Tecla `Escape`
- **NO** requiere confirmación (calculadora no tiene estado persistente)

### Comportamiento

**Al abrir:**
- Display muestra: `0`
- Sin operaciones previas guardadas
- Foco en el modal (trap focus para accesibilidad)

**Durante uso:**
- Operación actual visible en display
- Actualización en tiempo real
- Sin límite de operaciones encadenadas

**Al cerrar:**
- No guarda historial
- Próxima apertura: Calculadora limpia (reset)

### Accesibilidad (WCAG 2.1 AA)

- ♿ **Keyboard navigation:** Tab entre botones, Enter para activar
- 🔊 **Screen readers:** Aria-labels en todos los botones
- 🎯 **Focus trap:** Focus permanece dentro del modal
- 🎨 **Contraste:** Mínimo 4.5:1 en textos
- 📏 **Touch targets:** Mínimo 44x44px (cumple WCAG AAA)

### Estados visuales

- **Modal abierto:** Backdrop semitransparente (rgba(0,0,0,0.5))
- **Botón presionado:** Efecto ripple o scale
- **Error:** Si división por cero → Display: "Error"
- **Overflow:** Si número muy largo → Display scroll horizontal o ellipsis

---

## Integración en el Sistema

**Componente compartido:**
- `src/shared/components/Calculator/Calculator.tsx`
- `src/shared/components/Calculator/Calculator.test.tsx`
- `src/shared/components/Calculator/useCalculator.ts` (lógica hook)

**Estado global (Zustand):**
```typescript
// src/shared/stores/uiStore.ts
interface UIStore {
  isCalculatorOpen: boolean
  openCalculator: () => void
  closeCalculator: () => void
}
```

**Uso en pantallas:**
- ✅ **FAB visible en:** Dashboard, Menú, Albaranes, Clientes, Tarifas (pantallas autenticadas)
- ❌ **FAB NO visible en:** Login (pantalla pública)
