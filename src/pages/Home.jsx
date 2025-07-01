import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Star, Users, TrendingUp, Shield, Heart, ArrowRight, ThumbsUp, MessageCircle, Calendar } from 'lucide-react'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubra se{' '}
              <span className="text-warning-300">vale a pena</span>
              <br />
              comprar de uma empresa
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Nossa comunidade compartilha experiências e recomendações para ajudar você 
              a tomar as melhores decisões de compra.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar empresas, produtos ou serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-gray-900 text-lg rounded-lg shadow-lg focus:ring-4 focus:ring-primary-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>+50.000 usuários</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>+10.000 empresas</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>+100.000 avaliações</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Vale a Pena?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece tudo que você precisa para tomar decisões de compra inteligentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Avaliações Confiáveis</h3>
              <p className="text-gray-600">
                Todas as avaliações são verificadas e vêm de usuários reais com experiências autênticas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reputação Transparente</h3>
              <p className="text-gray-600">
                Sistema de reputação claro que mostra a qualidade real de cada empresa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidade Ativa</h3>
              <p className="text-gray-600">
                Milhares de usuários compartilhando experiências e ajudando uns aos outros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Empresas em Destaque
              </h2>
              <p className="text-gray-600">
                As empresas mais bem avaliadas pela nossa comunidade
              </p>
            </div>
            <Link
              to="/search"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>Ver todas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Avaliações Recentes
            </h2>
            <p className="text-gray-600">
              Veja o que nossa comunidade está dizendo
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
                        className={`w-4 h-4 ${
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
            Junte-se à nossa comunidade
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compartilhe suas experiências e ajude outros a tomar melhores decisões de compra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Cadastre-se Grátis
            </Link>
            <Link
              to="/search"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Buscar Empresas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 