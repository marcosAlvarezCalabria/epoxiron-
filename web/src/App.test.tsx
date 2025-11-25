// 📝 WHAT: Test para verificar que el componente App funciona
// 🎯 WHY: Asegurarnos que el componente se renderiza correctamente
// 🔍 TYPES: Vitest + React Testing Library

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

// 📝 describe: Agrupa tests relacionados
describe('App', () => {
  // 📝 it: Define un test individual
  it('debe mostrar el título Epoxiron', () => {
    // 1. ARRANGE (Preparar): Renderizar el componente
    render(<App />)

    // 2. ACT (Actuar): Buscar el elemento en la página
    const titulo = screen.getByText('Epoxiron')

    // 3. ASSERT (Verificar): Comprobar que existe
    expect(titulo).toBeInTheDocument()
  })

  it('debe mostrar el subtítulo del sistema', () => {
    render(<App />)

    const subtitulo = screen.getByText('Sistema de Gestión de Albaranes')

    expect(subtitulo).toBeInTheDocument()
  })
})
