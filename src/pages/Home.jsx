import React from 'react'
import { Link } from 'react-router-dom'
import { ChefHat, Clock, Users, MapPin } from 'lucide-react'
import Gallery from '../components/Gallery'
import GoogleReviews from '../components/GoogleReviews'

const Home = () => {
  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section
        className='relative h-screen bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 text-white flex items-center justify-center overflow-hidden'
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        {/* Content */}
        <div className='relative z-10 text-center px-4 md:px-8 max-w-2xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 animate-fadeIn'>
            Welcome to FoodHub
          </h1>
          <p className='text-lg md:text-2xl mb-8 text-gray-200'>
            Experience the finest culinary delights with fresh ingredients and authentic flavors
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <Link
              to="/menu"
              className='bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105'
            >
              View Menu
            </Link>
            <Link
              to="/order"
              className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition duration-300 transform hover:scale-105'
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='text-white'>↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12'>
            Why Choose Us
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: ChefHat,
                title: 'Expert Chefs',
                desc: 'Experienced chefs with years of culinary expertise',
              },
              {
                icon: Clock,
                title: 'Fast Service',
                desc: 'Quick delivery and service without compromising quality',
              },
              {
                icon: Users,
                title: 'Family Friendly',
                desc: 'Perfect place for family gatherings and celebrations',
              },
              {
                icon: MapPin,
                title: 'Prime Location',
                desc: 'Easily accessible from anywhere in the city',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300'
                >
                  <Icon className='h-12 w-12 text-orange-500 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12'>
            Food Gallery
          </h2>
          <Gallery />
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-orange-500 to-red-500 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Order?
          </h2>
          <p className='text-lg mb-8'>
            Book your table or place your order online for delivery or pickup
          </p>
          <Link
            to="/order"
            className='bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block transform hover:scale-105'
          >
            Make a Reservation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            <div>
              <h3 className='text-xl font-bold text-yellow-300 mb-4'>FoodHub</h3>
              <p className='text-gray-400'>
                Serving delicious food with passion and quality
              </p>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <Link to="/menu" className='hover:text-white transition'>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className='hover:text-white transition'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className='hover:text-white transition'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Contact Info</h4>
              <p className='text-gray-400'>
                Phone: +1 (234) 567-8900
                <br />
                Email: info@foodhub.com
              </p>
            </div>
          </div>
          <div className='border-t border-gray-700 pt-8 text-center text-gray-400'>
            <p>&copy; 2024 FoodHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
