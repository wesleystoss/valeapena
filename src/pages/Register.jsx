import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User, Mail, Lock, Building2, HelpCircle } from 'lucide-react'

const Register = ({ setIsLoggedIn, setUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('user')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && password) {
      setIsLoggedIn(true)
      setUser({ name, email, type })
      navigate('/')
    } else {
      setError('Por favor, preencha todos os campos.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Criar conta grátis</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <HelpCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-800 text-sm">
                <strong>Por que criar uma conta?</strong> Com uma conta você pode deixar suas próprias avaliações e ajudar outras pessoas!
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seu nome completo
            </label>
            <div className="relative">
              <input
                type="text"
                className="input-field pl-10 text-lg"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
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
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
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
                placeholder="Crie uma senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Use pelo menos 6 caracteres
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de conta
            </label>
            <select
              className="input-field text-lg"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="user">Pessoa comum (quero avaliar empresas)</option>
              <option value="company">Empresa (quero gerenciar minha empresa)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              {type === 'user' 
                ? 'Você poderá avaliar empresas e ver avaliações'
                : 'Você poderá gerenciar a página da sua empresa'
              }
            </p>
          </div>
          {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</div>}
          <button type="submit" className="btn-primary w-full text-lg py-3">Criar conta</button>
        </form>
        
        <div className="text-center mt-6 text-sm text-gray-600">
          <p className="mb-2">Já tem uma conta?</p>
          <Link to="/login" className="text-primary-600 hover:underline font-medium">
            Entrar na minha conta
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

export default Register 