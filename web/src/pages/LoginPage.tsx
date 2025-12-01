import { LoginForm } from '@/features/auth/components/LoginForm'

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Epoxiron
        </h1>
        <p className="text-gray-600 mb-6">
          Sistema de Gestión de Albaranes
        </p>
        <LoginForm />
      </div>
    </div>
  )
}
