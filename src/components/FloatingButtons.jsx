import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'

const FloatingButtons = () => {
  const whatsappNumber = '7906599728' // Replace with your actual number
  const phoneNumber = '+91 9917672322' // Replace with your actual number

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello!`, '_blank')
  }

  const handlePhone = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <>
      {/* Mobile floating buttons - visible only on mobile devices */}
      <div className='md:hidden fixed bottom-20 right-4 flex flex-col gap-4 z-30'>
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className='flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110'
          title='Chat on WhatsApp'
        >
          <MessageCircle className='h-6 w-6' />
        </button>

        {/* Phone Button */}
        <button
          onClick={handlePhone}
          className='flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110'
          title='Call us'
        >
          <Phone className='h-6 w-6' />
        </button>
      </div>

      {/* Desktop floating buttons - visible only on desktop */}
      <div className='hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-30'>
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className='flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110'
          title='Chat on WhatsApp'
        >
          <MessageCircle className='h-7 w-7' />
        </button>

        {/* Phone Button */}
        <button
          onClick={handlePhone}
          className='flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110'
          title='Call us'
        >
          <Phone className='h-7 w-7' />
        </button>
      </div>
    </>
  )
}

export default FloatingButtons
