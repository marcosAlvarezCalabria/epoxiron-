// 📝 WHAT: Archivo de configuración inicial para tests
// 🎯 WHY: Carga utilidades globales antes de ejecutar cualquier test
// 🔍 TYPE: Setup file para Vitest

import '@testing-library/jest-dom'

// Este archivo se ejecuta automáticamente antes de cada test
// Aquí cargamos jest-dom que añade matchers útiles como:
// - expect(element).toBeInTheDocument()
// - expect(element).toHaveClass('className')
// - expect(element).toBeVisible()
