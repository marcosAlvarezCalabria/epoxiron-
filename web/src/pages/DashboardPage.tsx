import { useAuthStore } from '@/features/auth/stores/authStore'
import { useNavigate } from 'react-router-dom'

export function DashboardPage() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Epoxiron</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">👤 {user?.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              🚪 Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ✅ ¡Bienvenido al Dashboard!
          </h2>
          <p className="text-gray-600 mb-4">
            Has iniciado sesión correctamente como <strong>{user?.email}</strong>
          </p>
          <p className="text-gray-500">
            Aquí irá el contenido del sistema de gestión de albaranes...
          </p>
        </div>
      </main>
    </div>
  )
}
