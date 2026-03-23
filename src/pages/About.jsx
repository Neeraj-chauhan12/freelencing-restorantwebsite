import React from 'react'
import { Heart, Award, Users, Target } from 'lucide-react'

const About = () => {
  return (
    <div className='pt-16 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-orange-900 to-red-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-4'>About FoodHub</h1>
          <p className='text-lg text-gray-200'>
            Learn about our story and passion for great food
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Main Story Section */}
        <div className='grid md:grid-cols-2 gap-12 mb-16 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Story</h2>
            <p className='text-gray-700 mb-4 leading-relaxed'>
              FoodHub was founded in 2015 with a simple vision: to bring authentic,
              delicious food to our community. What started as a small family kitchen
              has grown into a beloved restaurant known for quality and excellence.
            </p>
            <p className='text-gray-700 mb-4 leading-relaxed'>
              Every dish we serve is prepared with passion and the finest ingredients.
              Our chefs combine traditional recipes with modern techniques to create
              unforgettable culinary experiences.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              Today, we're proud to serve thousands of satisfied customers and continue
              our mission to deliver excellence in every plate.
            </p>
          </div>
          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
              alt='Restaurant'
              className='rounded-lg shadow-xl'
            />
            <div className='absolute -bottom-6 -right-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg'>
              <p className='text-2xl font-bold'>10+</p>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <div className='bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500'>
            <Target className='h-12 w-12 text-orange-500 mb-4' />
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h3>
            <p className='text-gray-700'>
              To provide exceptional dining experiences by serving high-quality food,
              backed by outstanding customer service in a warm and welcoming atmosphere.
            </p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-500'>
            <Heart className='h-12 w-12 text-red-500 mb-4' />
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Vision</h3>
            <p className='text-gray-700'>
              To be the most loved restaurant in the region, recognized for our
              commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
            Why Choose FoodHub
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Award,
                title: 'Award Winning',
                desc: 'Recognized for excellence in food and service',
              },
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Passionate chefs and dedicated staff',
              },
              {
                icon: Heart,
                title: 'Quality First',
                desc: 'Only the finest ingredients and preparation',
              },
              {
                icon: Target,
                title: 'Customer Focus',
                desc: 'Your satisfaction is our top priority',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className='text-center'>
                  <Icon className='h-12 w-12 text-orange-500 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
            Meet Our Team
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                name: 'Chef Marco',
                role: 'Head Chef',
                image:
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
              },
              {
                name: 'Sarah Johnson',
                role: 'Sous Chef',
                image:
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
              },
              {
                name: 'Mike Wilson',
                role: 'Kitchen Manager',
                image:
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
              },
              {
                name: 'Emma Davis',
                role: 'Service Manager',
                image:
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
              },
            ].map((member, idx) => (
              <div key={idx} className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {member.name}
                  </h3>
                  <p className='text-gray-600'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className='bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-xl p-12 mb-16'>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div>
              <p className='text-4xl font-bold mb-2'>10K+</p>
              <p className='text-lg'>Happy Customers</p>
            </div>
            <div>
              <p className='text-4xl font-bold mb-2'>50+</p>
              <p className='text-lg'>Menu Items</p>
            </div>
            <div>
              <p className='text-4xl font-bold mb-2'>15+</p>
              <p className='text-lg'>Years Experience</p>
            </div>
            <div>
              <p className='text-4xl font-bold mb-2'>4.8★</p>
              <p className='text-lg'>Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
            Our Values
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Quality',
                desc: 'We never compromise on the quality of our ingredients or preparation. Every dish is made with care and attention to detail.',
              },
              {
                title: 'Integrity',
                desc: 'We believe in honest practices and transparency with our customers. Your trust is important to us.',
              },
              {
                title: 'Community',
                desc: 'We are committed to giving back to our community and building lasting relationships with our customers.',
              },
            ].map((value, idx) => (
              <div key={idx} className='bg-white rounded-lg shadow-md p-8'>
                <h3 className='text-xl font-serif font-bold text-orange-500 mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-700'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
