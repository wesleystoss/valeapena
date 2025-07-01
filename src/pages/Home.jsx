import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Star, Users, TrendingUp, Shield, Heart, ArrowRight, ThumbsUp, MessageCircle, Calendar, HelpCircle, CheckCircle } from 'lucide-react'
import CompanyCard from '../components/CompanyCard'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  // Dados mockados para demonstração
  const featuredCompanies = [
    {
      id: 1,
      name: 'TechStore',
      category: 'Tecnologia',
      rating: 4.8,
      reviews: 1247,
      logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=60&h=60&facepad=2',
      description: 'Loja especializada em produtos de tecnologia com ótimo atendimento',
      isVerified: true
    },
    {
      id: 2,
      name: 'EcoModa',
      category: 'Moda',
      rating: 4.6,
      reviews: 892,
      logo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60&facepad=2',
      description: 'Roupas sustentáveis e de qualidade',
      isVerified: true
    },
    {
      id: 3,
      name: 'CasaBela',
      category: 'Casa e Jardim',
      rating: 4.7,
      reviews: 1563,
      logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=60&h=60&facepad=2',
      description: 'Decoração e móveis para sua casa',
      isVerified: true
    },
    {
      id: 4,
      name: 'FitLife',
      category: 'Saúde e Fitness',
      rating: 4.9,
      reviews: 2341,
      logo: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60&facepad=2',
      description: 'Produtos para uma vida mais saudável',
      isVerified: true
    }
  ]

  const recentReviews = [
    {
      id: 1,
      companyName: 'TechStore',
      userName: 'Maria Silva',
      rating: 5,
      comment: 'Excelente atendimento! Comprei um notebook e chegou antes do prazo. Recomendo muito!',
      date: '2024-01-15'
    },
    {
      id: 2,
      companyName: 'EcoModa',
      userName: 'João Santos',
      rating: 4,
      comment: 'Roupas de qualidade e entrega rápida. Vale muito a pena!',
      date: '2024-01-14'
    },
    {
      id: 3,
      companyName: 'CasaBela',
      userName: 'Ana Costa',
      rating: 5,
      comment: 'Móveis lindos e preços justos. Super recomendo!',
      date: '2024-01-13'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Descubra se{' '}
              <span className="text-warning-300">vale a pena</span>
              <br />
              comprar de uma empresa
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              <strong>Como funciona:</strong> Pessoas como você compartilham suas experiências 
              de compra para ajudar outras pessoas a escolher as melhores empresas.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-primary-100 mb-4 text-lg">
                <strong>Digite o nome da empresa que você quer pesquisar:</strong>
              </p>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Exemplo: Magazine Luiza, Casas Bahia, Americanas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-gray-900 text-lg rounded-lg shadow-lg focus:ring-4 focus:ring-primary-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-colors text-lg"
                >
                  <Search className="w-6 h-6" />
                </button>
              </form>
              <p className="text-primary-100 text-sm mt-2">
                💡 <strong>Dica:</strong> Digite o nome da empresa e clique na lupa ou pressione Enter
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-base">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>+50.000 pessoas usando</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5" />
                <span>+10.000 empresas avaliadas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <MessageCircle className="w-5 h-5" />
                <span>+100.000 comentários</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como usar o Vale a Pena?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              É muito simples! Siga estes 3 passos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-primary-600">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Busque a empresa</h3>
              <p className="text-gray-600">
                Digite o nome da empresa na caixa de busca acima. Pode ser qualquer empresa: lojas, restaurantes, serviços...
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-success-600">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Veja as avaliações</h3>
              <p className="text-gray-600">
                Leia o que outras pessoas disseram sobre a empresa. Veja as notas e comentários de quem já comprou lá.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-warning-600">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Decida se compra</h3>
              <p className="text-gray-600">
                Com base nas avaliações, você decide se vale a pena comprar daquela empresa ou não.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que usar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que usar o Vale a Pena?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja os benefícios de usar nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Avaliações Confiáveis</h3>
              <p className="text-gray-600">
                Todas as avaliações são de pessoas reais que realmente compraram da empresa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reputação Clara</h3>
              <p className="text-gray-600">
                Veja claramente se a empresa é boa ou não através das notas e comentários.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidade Ajudando</h3>
              <p className="text-gray-600">
                Milhares de pessoas compartilhando experiências para ajudar umas às outras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas em Destaque */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Empresas Bem Avaliadas
              </h2>
              <p className="text-gray-600">
                Estas são algumas das empresas mais bem avaliadas pelos nossos usuários
              </p>
            </div>
            <Link
              to="/search"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-lg"
            >
              <span>Ver todas as empresas</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações Recentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que as pessoas estão dizendo
            </h2>
            <p className="text-gray-600">
              Veja alguns comentários recentes de nossos usuários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReviews.map((review) => (
              <div key={review.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.companyName}</h3>
                    <p className="text-sm text-gray-500">por {review.userName}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-warning-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Recomendado</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer ajudar outras pessoas?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compartilhe suas experiências de compra e ajude outras pessoas a tomar melhores decisões
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Criar Conta Grátis
            </Link>
            <Link
              to="/search"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Buscar Empresas
            </Link>
          </div>
          <p className="text-primary-100 mt-4 text-sm">
            💡 <strong>Dica:</strong> Você pode usar o site sem criar conta, mas com uma conta você pode deixar suas próprias avaliações!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home 