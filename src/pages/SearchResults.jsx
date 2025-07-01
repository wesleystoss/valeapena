import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, Star, CheckCircle, MapPin, Users, Calendar } from 'lucide-react'
import CompanyCard from '../components/CompanyCard'

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    verified: false
  })

  const query = searchParams.get('q') || ''

  useEffect(() => {
    setSearchQuery(query)
    // Simular busca de dados
    setTimeout(() => {
      const mockCompanies = [
        {
          id: 1,
          name: 'TechStore',
          category: 'Tecnologia',
          rating: 4.8,
          reviews: 1247,
          logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Loja especializada em produtos de tecnologia com ótimo atendimento',
          isVerified: true,
          location: 'São Paulo, SP'
        },
        {
          id: 2,
          name: 'EcoModa',
          category: 'Moda',
          rating: 4.6,
          reviews: 892,
          logo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Roupas sustentáveis e de qualidade',
          isVerified: true,
          location: 'Rio de Janeiro, RJ'
        },
        {
          id: 3,
          name: 'CasaBela',
          category: 'Casa e Jardim',
          rating: 4.7,
          reviews: 1563,
          logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Decoração e móveis para sua casa',
          isVerified: true,
          location: 'Belo Horizonte, MG'
        },
        {
          id: 4,
          name: 'FitLife',
          category: 'Saúde e Fitness',
          rating: 4.9,
          reviews: 2341,
          logo: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Produtos para uma vida mais saudável',
          isVerified: true,
          location: 'Curitiba, PR'
        },
        {
          id: 5,
          name: 'DigitalStore',
          category: 'Tecnologia',
          rating: 4.3,
          reviews: 567,
          logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Produtos digitais e software',
          isVerified: false,
          location: 'Porto Alegre, RS'
        },
        {
          id: 6,
          name: 'FashionHub',
          category: 'Moda',
          rating: 4.2,
          reviews: 789,
          logo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=60&h=60&facepad=2',
          description: 'Tendências da moda atual',
          isVerified: false,
          location: 'Salvador, BA'
        }
      ]
      
      // Filtrar por query
      const filtered = mockCompanies.filter(company => 
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.category.toLowerCase().includes(query.toLowerCase()) ||
        company.description.toLowerCase().includes(query.toLowerCase())
      )
      
      setCompanies(filtered)
      setLoading(false)
    }, 1000)
  }, [query])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() })
    }
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const filteredCompanies = companies.filter(company => {
    if (filters.category && company.category !== filters.category) return false
    if (filters.rating && company.rating < parseFloat(filters.rating)) return false
    if (filters.verified && !company.isVerified) return false
    return true
  })

  const categories = [...new Set(companies.map(c => c.category))]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Resultados da busca
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar empresas, produtos ou serviços..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </form>

          {query && (
            <p className="text-gray-600 mt-2">
              {loading ? 'Buscando...' : `${filteredCompanies.length} resultado(s) para "${query}"`}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Filtros</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avaliação mínima
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Qualquer avaliação</option>
                  <option value="4.5">4.5+ estrelas</option>
                  <option value="4.0">4.0+ estrelas</option>
                  <option value="3.5">3.5+ estrelas</option>
                  <option value="3.0">3.0+ estrelas</option>
                </select>
              </div>

              {/* Verified Filter */}
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => handleFilterChange('verified', e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Apenas empresas verificadas
                  </span>
                </label>
              </div>

              {/* Clear Filters */}
              {(filters.category || filters.rating || filters.verified) && (
                <button
                  onClick={() => setFilters({ category: '', rating: '', verified: false })}
                  className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <span className="ml-2 text-gray-600">Carregando...</span>
              </div>
            ) : filteredCompanies.length > 0 ? (
              <div className="space-y-4">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhuma empresa encontrada
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou fazer uma nova busca.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults 