import React, { useState } from 'react'
import { Calendar, Clock, Users, MapPin, CreditCard } from 'lucide-react'

const OrderReservation = () => {
  const [activeTab, setActiveTab] = useState('reservation')
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  })

  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryTime: '',
    items: [],
  })

  const handleReservationChange = (e) => {
    const { name, value } = e.target
    setReservationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleOrderChange = (e) => {
    const { name, value } = e.target
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    alert('Reservation confirmed! We will send you a confirmation email shortly.')
    setReservationData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: '',
    })
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully! We will deliver your food shortly.')
    setOrderData({
      name: '',
      email: '',
      phone: '',
      address: '',
      deliveryTime: '',
      items: [],
    })
  }

  return (
    <div className='pt-16 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-orange-900 to-red-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-4'>Order & Reservation</h1>
          <p className='text-lg text-gray-200'>
            Book your table or place your order online
          </p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Tab Buttons */}
        <div className='flex gap-4 mb-8'>
          <button
            onClick={() => setActiveTab('reservation')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition duration-300 ${
              activeTab === 'reservation'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border-2 border-orange-500'
            }`}
          >
            <Calendar className='h-5 w-5 inline-block mr-2' />
            Make a Reservation
          </button>
          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition duration-300 ${
              activeTab === 'order'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border-2 border-orange-500'
            }`}
          >
            <MapPin className='h-5 w-5 inline-block mr-2' />
            Place an Order
          </button>
        </div>

        {/* Reservation Form */}
        {activeTab === 'reservation' && (
          <div className='bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
              Make a Reservation
            </h2>

            <form onSubmit={handleReservationSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={reservationData.name}
                    onChange={handleReservationChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='John Doe'
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
                    value={reservationData.email}
                    onChange={handleReservationChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='john@example.com'
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
                    value={reservationData.phone}
                    onChange={handleReservationChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='+1 (234) 567-8900'
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor='date' className='block text-gray-700 font-semibold mb-2'>
                    Date
                  </label>
                  <input
                    type='date'
                    id='date'
                    name='date'
                    value={reservationData.date}
                    onChange={handleReservationChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor='time' className='block text-gray-700 font-semibold mb-2'>
                    Time
                  </label>
                  <input
                    type='time'
                    id='time'
                    name='time'
                    value={reservationData.time}
                    onChange={handleReservationChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor='guests' className='block text-gray-700 font-semibold mb-2'>
                    Number of Guests
                  </label>
                  <select
                    id='guests'
                    name='guests'
                    value={reservationData.guests}
                    onChange={handleReservationChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor='specialRequests' className='block text-gray-700 font-semibold mb-2'>
                  Special Requests
                </label>
                <textarea
                  id='specialRequests'
                  name='specialRequests'
                  value={reservationData.specialRequests}
                  onChange={handleReservationChange}
                  rows='4'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Any dietary restrictions or special requests...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300'
              >
                Confirm Reservation
              </button>
            </form>

            {/* Info Box */}
            <div className='mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded'>
              <p className='text-gray-700'>
                <strong>Note:</strong> We'll send you a confirmation email with your
                reservation details. For group reservations (10+ guests), please call us directly.
              </p>
            </div>
          </div>
        )}

        {/* Order Form */}
        {activeTab === 'order' && (
          <div className='bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
              Place an Order
            </h2>

            <form onSubmit={handleOrderSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={orderData.name}
                    onChange={handleOrderChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='John Doe'
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
                    value={orderData.email}
                    onChange={handleOrderChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='john@example.com'
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
                    value={orderData.phone}
                    onChange={handleOrderChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    placeholder='+1 (234) 567-8900'
                  />
                </div>

                {/* Delivery Time */}
                <div>
                  <label htmlFor='deliveryTime' className='block text-gray-700 font-semibold mb-2'>
                    Preferred Delivery Time
                  </label>
                  <select
                    id='deliveryTime'
                    name='deliveryTime'
                    value={orderData.deliveryTime}
                    onChange={handleOrderChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  >
                    <option value=''>Select time...</option>
                    <option value='asap'>As Soon As Possible (30-45 min)</option>
                    <option value='1hour'>1 Hour</option>
                    <option value='2hours'>2 Hours</option>
                    <option value='3hours'>3 Hours</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor='address' className='block text-gray-700 font-semibold mb-2'>
                  Delivery Address
                </label>
                <textarea
                  id='address'
                  name='address'
                  value={orderData.address}
                  onChange={handleOrderChange}
                  required
                  rows='3'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Enter your full delivery address...'
                ></textarea>
              </div>

              {/* Order Note */}
              <div className='p-4 bg-green-50 border-l-4 border-green-500 rounded'>
                <p className='text-gray-700'>
                  <strong>To complete your order:</strong> Please click "Place Order" and you'll be
                  redirected to our menu page to select your items. Then proceed to checkout.
                </p>
              </div>

              {/* Payment Method Info */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='p-4 bg-gray-50 rounded-lg'>
                  <CreditCard className='h-6 w-6 text-orange-500 mb-2' />
                  <h3 className='font-semibold text-gray-800 mb-2'>Credit Card</h3>
                  <p className='text-sm text-gray-600'>Pay securely online</p>
                </div>
                <div className='p-4 bg-gray-50 rounded-lg'>
                  <MapPin className='h-6 w-6 text-orange-500 mb-2' />
                  <h3 className='font-semibold text-gray-800 mb-2'>Cash on Delivery</h3>
                  <p className='text-sm text-gray-600'>Pay when delivered</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300'
              >
                Continue to Menu
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderReservation
