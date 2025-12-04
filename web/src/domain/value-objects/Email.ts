/**
 * VALUE OBJECT: Email
 *
 * Represents an immutable, validated email address.
 *
 * Location: Domain Layer
 * Reason: Defines business rule "what is a valid email"
 * Dependencies: None (pure TypeScript)
 */

export class Email {
  private readonly value: string

  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new Error(`Email inválido: ${email}`)
    }

    this.value = email.toLowerCase().trim()
  }

  private isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  getValue(): string {
    return this.value
  }

  equals(other: Email): boolean {
    return this.value === other.value
  }

  toString(): string {
    return this.value
  }
}
