import { describe, it, expect, beforeEach, vi } from 'vitest'
import { login, logout } from '../authApi'
import type { LoginData } from '../../types/auth'
/******************AUTH API******************/
describe('authApi', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })
/********************************LOGIN******************************/
  describe('login', () => {
    it('debe retornar token y usuario cuando las credenciales son correctas', async () => {
      globalThis.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          token: 'fake-token-123',
          user: {
            id: '1',
            email: 'test@test.com',
            name: 'Test User'
          }
        })
      })

      const loginData: LoginData = {
        email: 'test@test.com',
        password: '123456'
      }

      const response = await login(loginData)

      expect(response.token).toBeDefined()
      expect(response.user).toBeDefined()
      expect(response.user.email).toBe(loginData.email)
    })

    it('debe guardar el token en localStorage', async () => {
      globalThis.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          token: 'fake-token-123',
          user: {
            id: '1',
            email: 'test@test.com',
            name: 'Test User'
          }
        })
      })

      const loginData: LoginData = {
        email: 'test@test.com',
        password: '123456'
      }

      const response = await login(loginData)

      const savedToken = localStorage.getItem('auth_token')
      expect(savedToken).toBe(response.token)
    })

    it('debe lanzar error cuando las credenciales son incorrectas', async () => {
      globalThis.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 401
      })

      const loginData: LoginData = {
        email: 'wrong@test.com',
        password: 'wrongpass'
      }

      await expect(login(loginData)).rejects.toThrow()
    })

    it('debe lanzar error cuando falta el email', async () => {
      globalThis.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 400
      })

      const loginData = {
        password: '123456'
      } as LoginData

      await expect(login(loginData)).rejects.toThrow()
    })

    it('debe lanzar error cuando falta el password', async () => {
      globalThis.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 400
      })

      const loginData = {
        email: 'test@test.com'
      } as LoginData

      await expect(login(loginData)).rejects.toThrow()
    })
  })
//***************LOGOUT******************************/
  describe('logout', () => {
    it('debe eliminar el token de localStorage', () => {
      localStorage.setItem('auth_token', 'fake-token')

      logout()

      const token = localStorage.getItem('auth_token')
      expect(token).toBeNull()
    })

    it('debe funcionar incluso si no hay token', () => {
      expect(() => logout()).not.toThrow()
    })
  })
})