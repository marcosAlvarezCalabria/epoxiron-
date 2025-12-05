/**
 * VALUE OBJECT: Measurements
 *
 * Represents measurements of an item (linear meters or square meters).
 *
 * Location: Domain Layer
 * Reason: Business concept with specific rules
 * Dependencies: None (pure TypeScript)
 */

export class Measurements {
  private readonly linearMeters: number | null
  private readonly squareMeters: number | null
  private readonly thickness: number | null

  constructor(params: {
    linearMeters?: number
    squareMeters?: number
    thickness?: number
  }) {
    if (
      (params.linearMeters === undefined || params.linearMeters === null) &&
      (params.squareMeters === undefined || params.squareMeters === null)
    ) {
      this.linearMeters = null
      this.squareMeters = null
    } else {
      if (params.linearMeters !== undefined && params.linearMeters <= 0) {
        throw new Error('Linear meters must be greater than 0')
      }
      if (params.squareMeters !== undefined && params.squareMeters <= 0) {
        throw new Error('Square meters must be greater than 0')
      }

      this.linearMeters = params.linearMeters ?? null
      this.squareMeters = params.squareMeters ?? null
    }

    if (params.thickness !== undefined && params.thickness <= 0) {
      throw new Error('Thickness must be greater than 0')
    }
    this.thickness = params.thickness ?? null
  }

  getLinearMeters(): number | null {
    return this.linearMeters
  }

  getSquareMeters(): number | null {
    return this.squareMeters
  }

  getThickness(): number | null {
    return this.thickness
  }

  hasMeasurements(): boolean {
    return this.linearMeters !== null || this.squareMeters !== null
  }

  requiresMinimumRate(): boolean {
    return !this.hasMeasurements()
  }

  hasSpecialThickness(): boolean {
    return this.thickness !== null
  }

  equals(other: Measurements): boolean {
    return (
      this.linearMeters === other.linearMeters &&
      this.squareMeters === other.squareMeters &&
      this.thickness === other.thickness
    )
  }

  toString(): string {
    const parts: string[] = []

    if (this.linearMeters !== null) {
      parts.push(`${this.linearMeters} ml`)
    }
    if (this.squareMeters !== null) {
      parts.push(`${this.squareMeters} m²`)
    }
    if (this.thickness !== null) {
      parts.push(`thickness ${this.thickness}mm`)
    }

    return parts.length > 0 ? parts.join(', ') : 'No measurements'
  }

  static createWithoutMeasurements(): Measurements {
    return new Measurements({})
  }

  static createWithLinearMeters(lm: number, thickness?: number): Measurements {
    return new Measurements({ linearMeters: lm, thickness })
  }

  static createWithSquareMeters(sm: number, thickness?: number): Measurements {
    return new Measurements({ squareMeters: sm, thickness })
  }
}
