import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className='pt-16 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-orange-900 to-red-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-200'>
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-8'>Get In Touch</h2>

            <div className='space-y-8'>
              {/* Phone */}
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <Phone className='h-8 w-8 text-orange-500' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Phone
                  </h3>
                  <p className='text-gray-600'>+1 (234) 567-8900</p>
                  <p className='text-gray-600'>+1 (234) 567-8901</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <Mail className='h-8 w-8 text-orange-500' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Email
                  </h3>
                  <p className='text-gray-600'>info@foodhub.com</p>
                  <p className='text-gray-600'>support@foodhub.com</p>
                </div>
              </div>

              {/* Address */}
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <MapPin className='h-8 w-8 text-orange-500' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Address
                  </h3>
                  <p className='text-gray-600'>
                    123 Main Street
                    <br />
                    Your City, ST 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <Clock className='h-8 w-8 text-orange-500' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Hours
                  </h3>
                  <p className='text-gray-600'>
                    Monday - Friday: 10:00 AM - 10:00 PM
                    <br />
                    Saturday: 11:00 AM - 11:00 PM
                    <br />
                    Sunday: 11:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300'
                  placeholder='Your Name'
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300'
                  placeholder='your@email.com'
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor='phone' className='block text-gray-700 font-semibold mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300'
                  placeholder='+1 (234) 567-8900'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-gray-700 font-semibold mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows='5'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2'
              >
                <Send className='h-5 w-5' />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Find Us On The Map
          </h2>
          <div className='bg-white rounded-lg shadow-md overflow-hidden h-96'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.00601!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2241e5f19f%3A0x123456789!2s123%20Main%20St!5e0!3m2!1sen!2sus!4v1234567890'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                q: 'Do you offer delivery?',
                a: 'Yes! We offer delivery service within 10 km radius of our restaurant. Orders typically arrive within 30-45 minutes.',
              },
              {
                q: 'What are your payment methods?',
                a: 'We accept cash, all major credit cards, and digital payment methods like PayPal and Apple Pay.',
              },
              {
                q: 'Can I make reservations online?',
                a: 'Yes! You can make reservations through our website or by calling us directly. We recommend booking during peak hours.',
              },
              {
                q: 'Do you have vegetarian options?',
                a: 'Absolutely! We have a variety of vegetarian and vegan dishes. Check our menu for options.',
              },
            ].map((faq, idx) => (
              <div key={idx} className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-lg font-semibold text-gray-800 mb-3'>
                  {faq.q}
                </h3>
                <p className='text-gray-600'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
