import { Link } from 'react-router-dom'
import { Star, CheckCircle, MapPin } from 'lucide-react'

const CompanyCard = ({ company }) => {
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

  return (
    <Link to={`/company/${company.id}`} className="block">
      <div className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <div className="flex items-start space-x-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={company.logo}
              alt={`Logo ${company.name}`}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                {company.name}
              </h3>
              {company.isVerified && (
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
              )}
            </div>

            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {company.category}
            </p>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {company.description}
            </p>

            {/* Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(company.rating)
                          ? 'text-warning-400 fill-current'
                          : i < company.rating
                          ? 'text-warning-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium ${getRatingColor(company.rating)}`}>
                  {company.rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {company.reviews.toLocaleString()} avaliações
              </span>
            </div>

            {/* Rating Text */}
            <div className="mt-2">
              <span className={`text-xs font-medium ${getRatingColor(company.rating)}`}>
                {getRatingText(company.rating)}
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-5 transition-opacity rounded-xl pointer-events-none" />
      </div>
    </Link>
  )
}

export default CompanyCard 