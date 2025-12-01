import type {AuthResponse, LoginData } from "../types/auth";




export async function login(data: LoginData): Promise<AuthResponse> {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  //fetch simula una llamada a una API externa
  //method: POST, porque estamos enviando datos
  //headers: especifica que el contenido es JSON
  //body: convierte los datos de login a una cadena JSON

  if (!response.ok) {
    throw new Error('Credenciales incorrectas')
  }

  const result: AuthResponse = await response.json()

  localStorage.setItem('auth_token', result.token)
  //Guarda el token en localStorage para mantener la sesión del usuario

  return result
}
export function logout(): void {
  localStorage.removeItem('auth_token')
  //Elimina el token del localStorage para cerrar la sesión del usuario
}