import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  // Default beautiful food images - using reliable food image sources
  const defaultImages = [
    { id: 1, src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Paneer Butter Masala' },
    { id: 2, src: 'https://images.pexels.com/photos/960983/pexels-photo-960983.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Paneer Tikka' },
    { id: 3, src: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Soft Drinks Collection' },
    { id: 4, src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Fresh Juices' },
    { id: 5, src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Delicious Burger' },
    { id: 6, src: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Pizza Margherita' },
    { id: 7, src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Pasta Alfredo' },
    { id: 8, src: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Grilled Chicken' },
    { id: 9, src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Fresh Salad' },
    { id: 10, src: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Chocolate Cake' },
    { id: 11, src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Biryani' },
    { id: 12, src: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Butter Chicken' },
    { id: 13, src: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Ice Cream Sundae' },
    { id: 14, src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Vegetable Stir Fry' },
    { id: 15, src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Coffee Collection' },
    { id: 16, src: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Naan Bread' },
    { id: 17, src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Paneer Chilli' },
    { id: 18, src: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Mocktail Drinks' },
    { id: 19, src: 'https://images.pexels.com/photos/960983/pexels-photo-960983.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Dal Makhani' },
    { id: 20, src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', alt: 'Fruit Salad' },
  ]

 
  return (
    <div>
      {/* Gallery Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
       

       {
        defaultImages.map((image)=>(
            <div key={image.id} className='relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-48'>
                <img className='w-full h-full object-cover group-hover:scale-110 transition duration-300' src={image.src} />
            </div>   
        ))
       }
      </div>

      
    </div>
  )
}

export default Gallery
