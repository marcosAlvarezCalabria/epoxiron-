// 📝 WHAT: Funciones de utilidad simples
// 🎯 WHY: Para aprender cómo funcionan los tests

// Función simple: sumar dos números
export function sumar(a: number, b: number): number {
  return a + b
}

// Función: verificar si un número es par
export function esPar(numero: number): boolean {
  return numero % 2 === 0
}

// Función: saludar con nombre
export function saludar(nombre: string): string {
  return `Hola, ${nombre}!`
}
