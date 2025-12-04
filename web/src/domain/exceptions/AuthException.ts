/**
 * DOMAIN EXCEPTION: AuthException
 *
 * Authentication-specific business errors.
 *
 * Location: Domain Layer
 * Reason: Defines business errors (not technical errors)
 * Dependencies: None
 */

export type AuthErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_INVALID'
  | 'USER_NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'SESSION_EXPIRED'

export class AuthException extends Error {
  public readonly code: AuthErrorCode
  public readonly timestamp: Date

  constructor(code: AuthErrorCode, message: string) {
    super(message)
    this.name = 'AuthException'
    this.code = code
    this.timestamp = new Date()

    Object.setPrototypeOf(this, AuthException.prototype)
  }

  static invalidCredentials(): AuthException {
    return new AuthException(
      'INVALID_CREDENTIALS',
      'Email o contraseña incorrectos'
    )
  }

  static tokenExpired(): AuthException {
    return new AuthException(
      'TOKEN_EXPIRED',
      'Tu sesión ha expirado. Por favor inicia sesión nuevamente.'
    )
  }

  static tokenInvalid(): AuthException {
    return new AuthException(
      'TOKEN_INVALID',
      'Token de autenticación inválido'
    )
  }

  static userNotFound(): AuthException {
    return new AuthException(
      'USER_NOT_FOUND',
      'Usuario no encontrado'
    )
  }

  static unauthorized(): AuthException {
    return new AuthException(
      'UNAUTHORIZED',
      'No tienes permisos para realizar esta acción'
    )
  }

  static sessionExpired(): AuthException {
    return new AuthException(
      'SESSION_EXPIRED',
      'Tu sesión ha expirado'
    )
  }

  isCredentialsError(): boolean {
    return this.code === 'INVALID_CREDENTIALS'
  }

  isTokenError(): boolean {
    return (
      this.code === 'TOKEN_EXPIRED' ||
      this.code === 'TOKEN_INVALID'
    )
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      timestamp: this.timestamp.toISOString(),
    }
  }
}
