import React from 'react'
import { Star } from 'lucide-react'

const GoogleReviews = () => {
  // Sample reviews data - Replace with your actual Google reviews
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      date: '2 weeks ago',
      text: 'Amazing food and excellent service! The ambiance is perfect for a family dinner. Highly recommended!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 5,
      date: '1 month ago',
      text: 'Best restaurant in town! The menu is diverse and every dish is prepared with care. Must visit!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      rating: 4,
      date: '2 months ago',
      text: 'Great food quality and friendly staff. The only downside was a bit of a wait during peak hours.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    },
    {
      id: 4,
      name: 'Emma Davis',
      rating: 5,
      date: '3 months ago',
      text: 'Fantastic experience! The chef really knows how to create delicious dishes. Will definitely come back!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    },
  ]

  const renderStars = (rating) => {
    return (
      <div className='flex gap-1'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          What Our Customers Say
        </h2>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex gap-2'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='h-6 w-6 fill-yellow-400 text-yellow-400' />
            ))}
          </div>
          <p className='text-lg font-semibold text-gray-700'>4.8 out of 5</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className='grid md:grid-cols-2 gap-6'>
        {reviews.map((review) => (
          <div
            key={review.id}
            className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-l-4 border-orange-500'
          >
            {/* Stars */}
            <div className='mb-3'>
              {renderStars(review.rating)}
            </div>

            {/* Review Text */}
            <p className='text-gray-700 mb-4 leading-relaxed'>
              "{review.text}"
            </p>

            {/* Author Info */}
            <div className='flex items-center gap-4'>
              <img
                src={review.avatar}
                alt={review.name}
                className='h-10 w-10 rounded-full'
              />
              <div>
                <p className='font-semibold text-gray-800'>{review.name}</p>
                <p className='text-sm text-gray-500'>{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Reviews Button */}
      <div className='text-center mt-8'>
        <a
          href='#'
          className='inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300'
        >
          View All Reviews on Google
        </a>
      </div>
    </div>
  )
}

export default GoogleReviews
