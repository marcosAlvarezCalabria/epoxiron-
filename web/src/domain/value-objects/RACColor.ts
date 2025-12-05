/**
 * VALUE OBJECT: RACColor
 *
 * Represents a RAC color code or a special color.
 *
 * Location: Domain Layer
 * Reason: Business concept - RAC colors have a specific format
 * Dependencies: None (pure TypeScript)
 */

export class RACColor {
  private readonly code: string
  private readonly isRAC: boolean

  constructor(code: string, isRAC: boolean = true) {
    const cleanCode = code.trim()

    if (!cleanCode) {
      throw new Error('Color cannot be empty')
    }

    if (isRAC) {
      const regex = /^(RAC\s*)?(\d{4})$/i
      if (!regex.test(cleanCode)) {
        throw new Error(`Invalid RAC color: ${code}. Expected format: RAC 1234 or 1234`)
      }
    }

    this.code = cleanCode
    this.isRAC = isRAC
  }

  getCode(): string {
    return this.code
  }

  isRACColor(): boolean {
    return this.isRAC
  }

  isSpecialColor(): boolean {
    return !this.isRAC
  }

  equals(other: RACColor): boolean {
    return this.code === other.code && this.isRAC === other.isRAC
  }

  toString(): string {
    return this.isRAC ? `RAC ${this.code}` : this.code
  }

  static createRAC(code: string): RACColor {
    return new RACColor(code, true)
  }

  static createSpecial(name: string): RACColor {
    return new RACColor(name, false)
  }
}
