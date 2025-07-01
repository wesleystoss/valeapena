import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, User } from 'lucide-react'

const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de login
    if (email && password) {
      setIsLoggedIn(true)
      setUser({ name: 'Usuário Exemplo', email, type: 'user' })
      navigate('/')
    } else {
      setError('Preencha todos os campos.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Entrar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <div className="relative">
              <input
                type="email"
                className="input-field pl-10"
                placeholder="Seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <div className="relative">
              <input
                type="password"
                className="input-field pl-10"
                placeholder="Sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="btn-primary w-full">Entrar</button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-primary-600 hover:underline">Cadastre-se</Link>
        </div>
      </div>
    </div>
  )
}

export default Login 