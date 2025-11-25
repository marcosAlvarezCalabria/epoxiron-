# CLAUDE.md

## Architecture: Scope Rule
- **Global**: Used by 2+ features
- **Local**: Used by 1 feature only

## Tech Stack
- React 19 + TypeScript
- Zustand for state
- React Query for server state
- Tailwind CSS
- Vitest + React Testing Library
- ESLint + Prettier (auto-applied)

## TDD Development Workflow

### Phase 1: Architecture & Planning
1. scope-rule-architect: Design structure - USE for new features
2. react-mentor: Architectural guidance - USE for complex decisions
3. git-workflow-manager: Commit - USE after each phase

### Phase 2: Test-Driven Development
4. tdd-test-first: Create tests - USE for each functionality
5. git-workflow-manager: Commit RED phase
6. react-test-implementer: Implement - USE after tests fail
7. git-workflow-manager: Commit GREEN phase

### Phase 3: Quality & Security
8. security-auditor: Audit - USE before main merge
9. git-workflow-manager: Commit fixes
10. accessibility-auditor: WCAG - USE after UI complete
11. git-workflow-manager: Commit improvements

## Git Strategy (NO Claude mentions)
- Architecture: "feat: add [feature] architecture"
- Tests: "test: add [feature] tests (RED)"
- Implementation: "feat: implement [feature] (GREEN)"
- Security: "fix: security improvements"
- A11Y: "feat: improve accessibility"

## LEARNING MODE: TypeScript First Project

> **Context:** This is the user's first TypeScript project. They are learning and want to **understand** every line of code, not just copy/paste.

### Educational Rules

**MANDATORY - Before Writing ANY Code:**
1. **Explain First, Code Second:**
   - ALWAYS explain the TypeScript concept before writing code
   - Break down what each type does and why
   - Show simpler examples before complex ones
   - Use analogies to JavaScript when helpful

2. **Step-by-Step Code Explanation:**
   - Write code in small chunks (5-10 lines max)
   - Explain each chunk with inline comments
   - Show what the TypeScript compiler is checking
   - Explain what would break without the types

3. **Interactive Learning:**
   - Ask if the user understands before moving forward
   - Offer to explain TypeScript concepts in more detail
   - Show JavaScript equivalent when applicable
   - Point out common TypeScript mistakes to avoid

4. **Build Knowledge Progressively:**
   - Start with basic types (string, number, boolean)
   - Then interfaces and type aliases
   - Then generics only when needed
   - Then advanced patterns (conditional types, utility types)

### Code Presentation Format

**For EVERY piece of TypeScript code, use this structure:**

```typescript
// 📝 WHAT: Brief description of what this does
// 🎯 WHY: Why we're using TypeScript here
// 🔍 TYPES: Explanation of the types used

// Example with explanations:
interface User {           // 📝 Defines the shape of a User object
  id: string              // 🔍 id must be a string, not a number
  name: string            // 🔍 name is required and must be text
  email: string           // 🔍 email must be text
  age?: number            // 🔍 age is optional (?) and if present, must be a number
}

// 🎯 WHY: This ensures we never accidentally pass wrong data
// If we try User.age = "25", TypeScript will error before runtime
```

### Teaching Workflow

**When introducing new TypeScript concepts:**

1. **Show the problem first (JavaScript):**
   ```javascript
   // ❌ JavaScript - No safety
   function greet(user) {
     return `Hello ${user.name}` // Could crash if user is null!
   }
   ```

2. **Then the TypeScript solution:**
   ```typescript
   // ✅ TypeScript - Safe
   function greet(user: User): string {
     return `Hello ${user.name}` // Compiler ensures user exists and has name
   }
   ```

3. **Explain what TypeScript prevents:**
   - Runtime errors from undefined/null
   - Typos in property names
   - Passing wrong data types
   - Missing required properties

### TypeScript Concepts to Teach Gradually

**Level 1 - Basics (Start Here):**
- Primitive types: `string`, `number`, `boolean`
- Arrays: `string[]`, `Array<number>`
- Objects: inline types vs interfaces
- Optional properties: `age?: number`
- Union types: `string | number`

**Level 2 - Intermediate (After Level 1 is clear):**
- Type aliases: `type ID = string`
- Interfaces vs Types (when to use each)
- Function types: `(x: number) => string`
- Const assertions: `as const`
- Type inference (let TypeScript figure it out)

**Level 3 - Advanced (Only when needed):**
- Generics: `Array<T>`, `Promise<User>`
- Utility types: `Partial<T>`, `Pick<T, K>`
- Type guards: `typeof`, `instanceof`
- Discriminated unions

### Explanation Requirements

**NEVER write code without explaining:**
1. What this TypeScript feature does
2. Why we're using it here
3. What error it prevents
4. How it helps us catch bugs early

**Example - BAD (Just code):**
```typescript
const users: User[] = []
```

**Example - GOOD (Code + Learning):**
```typescript
// 📝 WHAT: Create an empty array that will only hold User objects
// 🎯 WHY: TypeScript prevents us from adding wrong data later
// 🔍 TYPE: User[] means "array of User objects"
const users: User[] = []

// ✅ This works:
users.push({ id: '1', name: 'John', email: 'john@example.com' })

// ❌ This would error (TypeScript catches it):
// users.push({ id: 1, name: 'John' })
//   - id is number, should be string
//   - email is missing
```

### Questions to Ask User

**After explaining a TypeScript concept:**
- "Does this make sense so far?"
- "Would you like me to explain [concept] in more detail?"
- "Do you see why TypeScript caught that error?"
- "Are you comfortable moving forward, or should we practice this more?"

### Anti-Patterns to AVOID

❌ **NEVER do this:**
- Write complex types without explanation
- Use `any` type (defeats TypeScript purpose)
- Use advanced features (generics, conditional types) without building up to them
- Assume user knows TypeScript jargon
- Move too fast through concepts

✅ **ALWAYS do this:**
- Explain before writing
- Build from simple to complex
- Use comments liberally
- Check for understanding
- Show what errors TypeScript prevents

---

## RULES
- NEVER write code without concrete functionality
- NEVER implement without failing tests
- NEVER mention Claude in commits
- ALWAYS apply ESLint + Prettier
- **NEVER write TypeScript code without explaining it first**
- **ALWAYS check if user understands before continuing**
- **ALWAYS show what errors TypeScript prevents**