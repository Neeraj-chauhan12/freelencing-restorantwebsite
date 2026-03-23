import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Order/Reservation', path: '/order' },
  ]

  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-orange-900 to-red-900 text-white shadow-lg z-40'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link 
            to="/" 
            className='text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition duration-300'
          >
            🍽️ FoodHub
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-1'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className='px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-800 transition duration-300 ease-in-out transform hover:scale-105'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md hover:bg-orange-800 transition duration-300'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className='md:hidden pb-4 space-y-2 animate-fadeIn'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className='block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-800 transition duration-300'
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
