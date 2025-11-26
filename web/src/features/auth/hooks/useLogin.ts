import { useMutation } from '@tanstack/react-query'
// Herramienta para manejar llamadas asíncronas al servidor

import { login as loginApi } from '../api/authApi'
// La función que llama al servidor (la que TÚ creaste en authApi.ts)

import { useAuthStore } from '../stores/authStore'
// El store donde guardamos usuario y token (lo creaste en authStore.ts)

import type { LoginData } from '../types/auth'
// El tipo: { email: string, password: string }


export function useLogin() {
  // Obtener la función para guardar usuario
  const { setAuth } = useAuthStore()

  // Configurar la operación de login
  const mutation = useMutation({
    mutationFn: loginApi,  // Qué función ejecutar
    
    onSuccess: (data) => {  // Qué hacer si funciona
      setAuth(data.user, data.token)  // Guardar en el store
    }
  })

  // Retornar 3 cosas útiles
  return {
    login: mutation.mutate,      // Función para hacer login
    isLoading: mutation.isPending, // ¿Está cargando?
    error: mutation.error        // ¿Hubo error?
  }
}