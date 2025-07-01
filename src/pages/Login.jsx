import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, User, HelpCircle } from 'lucide-react'

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
      setError('Por favor, preencha todos os campos.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Entrar na sua conta</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-blue-800 text-sm">
                <strong>Não tem uma conta?</strong> Você pode usar o site sem entrar, mas com uma conta você pode deixar suas próprias avaliações!
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <div className="relative">
              <input
                type="email"
                className="input-field pl-10 text-lg"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                type="password"
                className="input-field pl-10 text-lg"
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</div>}
          <button type="submit" className="btn-primary w-full text-lg py-3">Entrar</button>
        </form>
        
        <div className="text-center mt-6 text-sm text-gray-600">
          <p className="mb-2">Não tem uma conta?</p>
          <Link to="/register" className="text-primary-600 hover:underline font-medium">
            Criar conta grátis
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login 