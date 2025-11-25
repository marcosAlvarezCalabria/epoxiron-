// 📝 WHAT: Tests para las funciones de utilidad
// 🎯 WHY: Verificar que las funciones funcionan correctamente
// 🔍 PATTERN: AAA (Arrange, Act, Assert)

import { describe, it, expect } from 'vitest'
import { sumar, esPar, saludar } from './utils'

// ============================================
// 🎯 TESTS PARA LA FUNCIÓN SUMAR
// ============================================
describe('sumar', () => {
  // Test 1: Suma básica
  it('debe sumar 2 + 3 y devolver 5', () => {
    // 1. ARRANGE (Preparar): Definir datos de entrada
    const a = 2
    const b = 3

    // 2. ACT (Actuar): Ejecutar la función
    const resultado = sumar(a, b)

    // 3. ASSERT (Verificar): Comprobar el resultado
    expect(resultado).toBe(5)
    // 📝 toBe(5) significa "debe ser igual a 5"
  })

  // Test 2: Suma con negativos
  it('debe sumar números negativos correctamente', () => {
    const resultado = sumar(-5, 3)
    expect(resultado).toBe(-2)
  })

  // Test 3: Suma con cero
  it('debe manejar el cero correctamente', () => {
    const resultado = sumar(10, 0)
    expect(resultado).toBe(10)
  })
})

// ============================================
// 🎯 TESTS PARA LA FUNCIÓN ESPAR
// ============================================
describe('esPar', () => {
  // Test 1: Número par
  it('debe devolver true para números pares', () => {
    const resultado = esPar(4)
    expect(resultado).toBe(true)
  })

  // Test 2: Número impar
  it('debe devolver false para números impares', () => {
    const resultado = esPar(5)
    expect(resultado).toBe(false)
  })

  // Test 3: El cero es par
  it('debe considerar 0 como par', () => {
    const resultado = esPar(0)
    expect(resultado).toBe(true)
  })
})

// ============================================
// 🎯 TESTS PARA LA FUNCIÓN SALUDAR
// ============================================
describe('saludar', () => {
  // Test 1: Saludo básico
  it('debe saludar correctamente', () => {
    const resultado = saludar('Marcos')
    expect(resultado).toBe('Hola, Marcos!')
  })

  // Test 2: Verificar que contiene el nombre
  it('debe incluir el nombre en el saludo', () => {
    const resultado = saludar('Ana')
    // 📝 toContain verifica que el string contiene un texto
    expect(resultado).toContain('Ana')
  })
})
