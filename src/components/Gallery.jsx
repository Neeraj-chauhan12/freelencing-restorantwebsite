import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Default beautiful food images from unsplash
  const defaultImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop', alt: 'Pizza' },
    { id: 2, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop', alt: 'Burgers' },
    { id: 3, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop', alt: 'Pasta' },
    { id: 4, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop', alt: 'Salad' },
    { id: 5, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop', alt: 'Asian Cuisine' },
    { id: 6, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop', alt: 'Dessert' },
    { id: 7, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop', alt: 'Beverages' },
    { id: 8, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop', alt: 'Main Course' },
  ]

  const galleryImages = images.length > 0 ? images : defaultImages

  return (
    <div>
      {/* Gallery Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className='relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-48'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center'>
              <p className='text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300'>
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
        >
          <div className='relative max-w-2xl w-full'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute -top-10 -right-10 text-white hover:text-red-500 transition'
            >
              <X className='h-8 w-8' />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='w-full rounded-lg'
            />
            <p className='text-white text-center mt-4 text-lg font-semibold'>
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
