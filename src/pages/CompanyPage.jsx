import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Star, CheckCircle, MapPin, Phone, Mail, Globe, Users, Calendar, ThumbsUp, MessageCircle, Share2, Flag } from 'lucide-react'
import ReviewForm from '../components/ReviewForm'

const CompanyPage = () => {
  const { id } = useParams()
  const [company, setCompany] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      const mockCompany = {
        id: parseInt(id),
        name: 'TechStore',
        category: 'Tecnologia',
        rating: 4.8,
        reviews: 1247,
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=120&h=120&facepad=2',
        description: 'Loja especializada em produtos de tecnologia com ótimo atendimento. Oferecemos uma ampla variedade de produtos eletrônicos, desde smartphones até computadores e acessórios. Nossa missão é proporcionar a melhor experiência de compra com produtos de qualidade e preços competitivos.',
        isVerified: true,
        location: 'São Paulo, SP',
        phone: '(11) 99999-9999',
        email: 'contato@techstore.com.br',
        website: 'https://techstore.com.br',
        founded: '2018',
        employees: '50-100',
        address: 'Rua das Tecnologias, 123 - Centro, São Paulo - SP, 01234-567'
      }

      const mockReviews = [
        {
          id: 1,
          userName: 'Maria Silva',
          userAvatar: 'https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=MS',
          rating: 5,
          comment: 'Excelente atendimento! Comprei um notebook e chegou antes do prazo. O produto é exatamente como descrito e a qualidade é incrível. Recomendo muito!',
          date: '2024-01-15',
          helpful: 12,
          verified: true
        },
        {
          id: 2,
          userName: 'João Santos',
          userAvatar: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=JS',
          rating: 4,
          comment: 'Roupas de qualidade e entrega rápida. Vale muito a pena! O atendimento foi muito bom e o produto chegou em perfeitas condições.',
          date: '2024-01-14',
          helpful: 8,
          verified: true
        },
        {
          id: 3,
          userName: 'Ana Costa',
          userAvatar: 'https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=AC',
          rating: 5,
          comment: 'Móveis lindos e preços justos. Super recomendo! A qualidade dos produtos é excepcional e o serviço de entrega foi muito profissional.',
          date: '2024-01-13',
          helpful: 15,
          verified: true
        },
        {
          id: 4,
          userName: 'Pedro Oliveira',
          userAvatar: 'https://via.placeholder.com/40x40/EF4444/FFFFFF?text=PO',
          rating: 4,
          comment: 'Produtos de qualidade e preços competitivos. O atendimento foi muito bom e a entrega foi rápida. Recomendo!',
          date: '2024-01-12',
          helpful: 6,
          verified: false
        }
      ]

      setCompany(mockCompany)
      setReviews(mockReviews)
      setLoading(false)
    }, 1000)
  }, [id])

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-success-600'
    if (rating >= 4.0) return 'text-warning-600'
    if (rating >= 3.0) return 'text-orange-600'
    return 'text-red-600'
  }

  const getRatingText = (rating) => {
    if (rating >= 4.5) return 'Excelente'
    if (rating >= 4.0) return 'Muito Bom'
    if (rating >= 3.0) return 'Bom'
    return 'Regular'
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: company.name,
        text: `Confira a avaliação da ${company.name} no Vale a Pena!`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Empresa não encontrada</h2>
          <p className="text-gray-600">A empresa que você está procurando não existe.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Header */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={company.logo}
                alt={`Logo ${company.name}`}
                className="w-24 h-24 rounded-xl object-cover"
              />
            </div>

            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                {company.isVerified && (
                  <CheckCircle className="w-6 h-6 text-primary-600" title="Empresa verificada" />
                )}
              </div>

              <p className="text-lg text-gray-600 mb-3">{company.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{company.employees} funcionários</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Desde {company.founded}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex-shrink-0 text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(company.rating)
                        ? 'text-warning-400 fill-current'
                        : i < company.rating
                        ? 'text-warning-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className={`text-2xl font-bold ${getRatingColor(company.rating)}`}>
                {company.rating}
              </div>
              <div className={`text-sm font-medium ${getRatingColor(company.rating)}`}>
                {getRatingText(company.rating)}
              </div>
              <div className="text-sm text-gray-500">
                {company.reviews.toLocaleString()} avaliações
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowReviewForm(true)}
              className="btn-primary"
            >
              Avaliar Empresa
            </button>
            <button
              onClick={handleShare}
              className="btn-secondary flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Compartilhar</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Flag className="w-4 h-4" />
              <span>Reportar</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Visão Geral' },
              { id: 'reviews', label: 'Avaliações' },
              { id: 'contact', label: 'Contato' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sobre a empresa</h3>
                  <p className="text-gray-700 leading-relaxed">{company.description}</p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Estatísticas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{company.rating}</div>
                      <div className="text-sm text-gray-500">Avaliação média</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{company.reviews.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">Total de avaliações</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{company.founded}</div>
                      <div className="text-sm text-gray-500">Ano de fundação</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{company.employees}</div>
                      <div className="text-sm text-gray-500">Funcionários</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Avaliações ({reviews.length})
                  </h3>
                  <button
                    onClick={() => setShowReviewForm(true)}
                    className="btn-primary"
                  >
                    Escrever Avaliação
                  </button>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="card">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{review.userName}</span>
                              {review.verified && (
                                <CheckCircle className="w-4 h-4 text-primary-600" title="Compra verificada" />
                              )}
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
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-1 hover:text-primary-600">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{review.helpful}</span>
                              </button>
                              <span>{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{company.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{company.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      {company.website}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <span className="text-gray-700">{company.address}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-4">Resumo</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categoria:</span>
                    <span className="font-medium">{company.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Localização:</span>
                    <span className="font-medium">{company.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verificada:</span>
                    <span className="font-medium text-success-600">
                      {company.isVerified ? 'Sim' : 'Não'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-4">Distribuição de Avaliações</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = Math.floor(Math.random() * 100) + 50 // Mock data
                    const percentage = Math.round((count / company.reviews) * 100)
                    return (
                      <div key={stars} className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-warning-400 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <ReviewForm
          company={company}
          onClose={() => setShowReviewForm(false)}
          onSubmit={(review) => {
            setReviews(prev => [review, ...prev])
            setShowReviewForm(false)
          }}
        />
      )}
    </div>
  )
}

export default CompanyPage 