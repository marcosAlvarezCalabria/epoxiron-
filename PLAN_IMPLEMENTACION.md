# Plan de Implementación - Epoxiron

> 📅 **Documento creado:** 2025-11-17
> 🎯 **Objetivo:** Implementar sistema de gestión de albaranes para taller

---

## 📋 Estado Actual

### ✅ Completado
- [x] Diseño UX de 9 pantallas documentado en `design_ux.md`
- [x] Evaluación UX completa (Score: 7.2/10)
- [x] Identificación de problemas críticos y mejoras

### 📊 Evaluación UX
- **Puntuación general:** 7.2/10
- **Fortalezas:** Accesibilidad, arquitectura de información, diseño responsive
- **Debilidades:** Estados de error, navegación, carga de datos

---

## 🚨 Problemas Críticos Identificados

### 1. **Terminología Inconsistente**
**Problema:** Estados de albaranes varían entre pantallas
- Dashboard: "Revisado / Pendiente"
- Pantalla Albarán: "Borrador / Validado / Finalizado / Revisado"
- Listar Albaranes: "Borrador / Validado / Revisado / Finalizado"

**Solución propuesta:**
```
Estandarizar a:
- Borrador
- Pendiente de revisión
- Revisado
```

### 2. **Error de Seguridad en Login**
**Problema:** Mensaje "Usuario o contraseña incorrectos" revela si el usuario existe

**Solución:**
```
Cambiar a: "Las credenciales no son correctas. Por favor, verifica tus datos."
```

### 3. **Falta Especificación de Edición Inline**
**Problema:** No está claro cómo funciona editar piezas en tabla de albaranes

**Solución propuesta:**
```
Patrón recomendado:
- Click en icono ✏️ por fila → Fila entera editable
- Botones Guardar/Cancelar por fila
- Enter guarda, Escape cancela
```

### 4. **Sin Botones "Cancelar"**
**Problema:** Todos los formularios carecen de opción de cancelar

**Solución:**
```
Añadir botón "Cancelar" en todos los formularios:
- Modo creación: Vuelve a lista/dashboard con confirmación si hay cambios
- Modo edición: Descarta cambios con confirmación
```

### 5. **Sin Navegación (Breadcrumbs)**
**Problema:** Usuario puede perderse en navegación profunda

**Solución:**
```
Añadir breadcrumbs:
Dashboard > Listar Albaranes > Albarán #1234
```

### 6. **Sin Paginación**
**Problema:** Después de meses, listas con miles de registros serán inmanejables

**Solución:**
```
Implementar paginación:
- 25-50 registros por página
- Mostrar: "Mostrando 1-50 de 234 albaranes"
```

### 7. **Sin Confirmación de Eliminación**
**Problema:** Eliminación directa puede causar pérdida de datos

**Solución:**
```
Modal de confirmación:
"¿Eliminar albarán #1234?"
"Esta acción no se puede deshacer."
[Cancelar] [Eliminar]
```

### 8. **Validaciones Poco Claras**
**Problema:** No especifica cuándo ocurren validaciones

**Solución:**
```
Estandarizar:
- Email: Validar on blur
- Campos requeridos: Validar on blur
- Formato: Validar on blur
- Formulario completo: Validar on submit
```

---

## 🎯 Decisiones Pendientes para Mañana

### 1. Correcciones UX
**Pregunta:** ¿Corrijo primero los 8 problemas críticos del UX o implementamos con el diseño actual?

**Opciones:**
- **A)** Corregir UX primero (1-2 horas)
- **B)** Implementar y corregir después

### 2. Punto de Inicio
**Pregunta:** ¿Por dónde empezamos?

**Opciones:**
- **A)** Login (pantalla más simple para probar flujo)
- **B)** Setup del proyecto (React 19 + Vite + TypeScript)
- **C)** Arquitectura base (estructura de carpetas, scope rules)

### 3. Flujo de Desarrollo
**Pregunta:** ¿Seguimos estrictamente el flujo TDD del CLAUDE.md?

**Flujo definido:**
```
1. scope-rule-architect → Diseño estructura
2. tdd-test-first → Crear tests (RED)
3. Implementar código (GREEN)
4. security-auditor → Antes de merge
5. wcag-compliance-auditor → Después de UI
```

**Opciones:**
- **A)** Seguir flujo estrictamente
- **B)** Ajustar según necesidad

### 4. Backend
**Pregunta:** ¿Qué backend utilizamos?

**Opciones:**
- **A)** Frontend-only (localStorage/IndexedDB)
- **B)** Mock API (JSON Server)
- **C)** Backend real (Node.js, Supabase, Firebase, etc.)

---

## 📦 Stack Tecnológico Definido

Según `CLAUDE.md`:

```yaml
Frontend:
  - React: 19
  - TypeScript: ✅
  - Estado: Zustand
  - Server State: React Query
  - Estilos: Tailwind CSS
  - Testing: Vitest + React Testing Library
  - Linting: ESLint + Prettier (auto-aplicado)

Metodología:
  - TDD (Test-Driven Development)
  - Scope Rule (Global vs Local)
```

---

## 🗂️ Estructura de Carpetas Propuesta

```
epoxiron/
├── src/
│   ├── features/              # Features (scope rule)
│   │   ├── auth/              # Login
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── stores/
│   │   │   └── __tests__/
│   │   ├── albaranes/
│   │   ├── clientes/
│   │   └── tarifas/
│   ├── shared/                # Componentes globales (2+ features)
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── tests/
├── design.md                  # Diseño técnico existente
├── design_ux.md               # Diseño UX (9 pantallas)
├── CLAUDE.md                  # Reglas de desarrollo
└── PLAN_IMPLEMENTACION.md     # Este archivo
```

---

## 📝 Pantallas a Implementar

### Prioridad 1 (MVP)
1. **Login** - Autenticación básica
2. **Dashboard** - Vista de albaranes del día
3. **Menú Principal** - Navegación
4. **Pantalla Albarán** - Crear/Editar (modo dual)

### Prioridad 2
5. **Listar Albaranes** - Búsqueda y filtros
6. **Cliente Nuevo** - Crear cliente
7. **Crear Tarifa** - Nueva tarifa

### Prioridad 3
8. **Listar Clientes** - Gestión de clientes
9. **Listar Tarifas** - Gestión de tarifas

---

## 🔄 Flujo TDD Propuesto

### Para cada Feature:

```bash
# 1. Arquitectura
/task scope-rule-architect "Diseñar estructura para [feature]"

# 2. Tests (RED)
/task tdd-test-first "Crear tests para [feature]"

# 3. Implementación (GREEN)
# Código que pase los tests

# 4. Seguridad
/task security-auditor "Auditar [feature]"

# 5. Accesibilidad (si es UI)
/task wcag-compliance-auditor "Auditar accesibilidad [feature]"

# 6. Commit
/task git-commit-specialist "Generar commit para [feature]"
```

---

## ✅ Checklist para Mañana

### Antes de empezar
- [ ] Responder las 4 decisiones pendientes
- [ ] Confirmar correcciones UX (sí/no)
- [ ] Confirmar punto de inicio
- [ ] Confirmar backend

### Setup inicial
- [ ] Crear proyecto React 19 + Vite + TypeScript
- [ ] Configurar Tailwind CSS
- [ ] Configurar Vitest + React Testing Library
- [ ] Configurar ESLint + Prettier
- [ ] Instalar Zustand y React Query
- [ ] Crear estructura de carpetas

### Primer feature (según decisión)
- [ ] Ejecutar scope-rule-architect
- [ ] Ejecutar tdd-test-first
- [ ] Implementar código
- [ ] Ejecutar security-auditor (si aplica)
- [ ] Ejecutar wcag-compliance-auditor (si aplica)
- [ ] Commit con git-commit-specialist

---

## 📌 Notas Importantes

### Reglas de Commits (CLAUDE.md)
```
❌ NUNCA mencionar "Claude" en commits
✅ Usar convencional commits:
  - Architecture: "feat: add [feature] architecture"
  - Tests: "test: add [feature] tests (RED)"
  - Implementation: "feat: implement [feature] (GREEN)"
  - Security: "fix: security improvements"
  - A11Y: "feat: improve accessibility"
```

### Reglas de Scope
```
- Global: Usado por 2+ features → src/shared/
- Local: Usado por 1 feature → src/features/[feature]/
```

### Reglas de Implementación
```
❌ NUNCA escribir código sin tests
❌ NUNCA implementar sin tests fallando (RED)
✅ SIEMPRE aplicar ESLint + Prettier
```

---

## 🚀 Próximos Pasos para Mañana

1. **Responder decisiones pendientes** (preguntas 1-4)
2. **Setup del proyecto** (si decides empezar por ahí)
3. **Implementar primer feature** (Login, Dashboard, o según elección)
4. **Seguir flujo TDD** estrictamente

---

## 💬 Preguntas para Responder Mañana

1. ¿Corrijo los 8 problemas críticos de UX antes de implementar? (Sí/No)
2. ¿Por dónde empiezo? (Login / Setup / Arquitectura)
3. ¿Sigo el flujo TDD del CLAUDE.md estrictamente? (Sí/Ajustar)
4. ¿Qué backend uso? (localStorage / Mock API / Backend real)

---

**Preparado para empezar mañana. ¡Buena noche! 🌙**
