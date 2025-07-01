import { useState } from 'react'
import { Star, X } from 'lucide-react'

const ReviewForm = ({ company, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating === 0 || !comment.trim()) {
      setError('Dê uma nota e escreva um comentário.')
      return
    }
    onSubmit({
      id: Date.now(),
      userName: 'Você',
      userAvatar: 'https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=VC',
      rating,
      comment,
      date: new Date().toISOString(),
      helpful: 0,
      verified: false
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Avaliar {company.name}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`rating-star ${star <= rating ? 'filled' : 'empty'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">Clique para dar sua nota</span>
          </div>
          <div>
            <textarea
              className="input-field min-h-[80px] resize-none"
              placeholder="Escreva seu comentário..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              maxLength={400}
            />
            <div className="text-xs text-gray-400 text-right">{comment.length}/400</div>
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" className="btn-primary w-full">Enviar Avaliação</button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm 