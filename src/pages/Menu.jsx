import React, { useState } from 'react'
import { ShoppingCart, Plus, Minus } from 'lucide-react'

const Menu = () => {
  const [cart, setCart] = useState({})

  const menuCategories = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      items: [
        {
          id: 1,
          name: 'Garlic Bread',
          desc: 'Crispy bread with garlic and herbs',
          image: 'https://images.unsplash.com/photo-1541332257892-f90df6b0b0b0?w=400&h=300&fit=crop',
        },
        {
          id: 2,
          name: 'Mozzarella Sticks',
          desc: 'Golden fried mozzarella with marinara sauce',
          image: 'https://images.unsplash.com/photo-1547496502-afac4d95b470?w=400&h=300&fit=crop',
        },
        {
          id: 3,
          name: 'Spring Rolls',
          desc: 'Crispy rolls with vegetable filling',
          image: 'https://images.unsplash.com/photo-1609501676725-ddf7d1a2e90a?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      id: 'mains',
      name: 'Main Courses',
      items: [
        {
          id: 4,
          name: 'Grilled Salmon',
          desc: 'Fresh salmon with lemon butter sauce',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        },
        {
          id: 5,
          name: 'Chicken Tikka Masala',
          desc: 'Tender chicken in creamy tomato sauce',
          image: 'https://images.unsplash.com/photo-1553379393-abdee6b28fe7?w=400&h=300&fit=crop',
        },
        {
          id: 6,
          name: 'Beef Steak',
          desc: 'Prime cut beef with seasonal vegetables',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        },
        {
          id: 7,
          name: 'Vegetable Pasta',
          desc: 'Fresh pasta with mixed vegetables',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      id: 'pizza',
      name: 'Pizzas',
      items: [
        {
          id: 8,
          name: 'Margherita Pizza',
          desc: 'Classic pizza with tomato and mozzarella',
          image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
        },
        {
          id: 9,
          name: 'Pepperoni Pizza',
          desc: 'Loaded with pepperoni and cheese',
          image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=300&fit=crop',
        },
        {
          id: 10,
          name: 'Veggie Deluxe Pizza',
          desc: 'Fresh vegetables on crispy dough',
          image: 'https://images.unsplash.com/photo-1647883229256-e91a80c465c7?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 11,
          name: 'Chocolate Cake',
          desc: 'Rich and moist chocolate cake',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        },
        {
          id: 12,
          name: 'Tiramisu',
          desc: 'Traditional Italian dessert',
          image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop',
        },
        {
          id: 13,
          name: 'Cheesecake',
          desc: 'Creamy cheesecake with berry sauce',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      id: 'beverages',
      name: 'Beverages',
      items: [
        {
          id: 14,
          name: 'Fresh Lemonade',
          desc: 'Homemade fresh lemonade',
          image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
        },
        {
          id: 15,
          name: 'Iced Coffee',
          desc: 'Chilled coffee with ice',
          image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop',
        },
        {
          id: 16,
          name: 'Fresh Orange Juice',
          desc: 'Freshly squeezed orange juice',
          image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
        },
      ],
    },
  ]




  



  return (
    <div className='pt-16 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-orange-900 to-red-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-4'>Our Menu</h1>
          <p className='text-lg text-gray-200'>
            Explore our delicious selection of dishes
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Cart Summary */}
      

        {/* Menu Categories */}
        {menuCategories.map((category) => (
          <div key={category.id} className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-4 border-orange-500'>
              {category.name}
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'
                >
                  {/* Item Image */}
                  <div className='relative h-48 overflow-hidden bg-gray-200'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                    />
                  </div>

                  {/* Item Details */}
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      {item.name}
                    </h3>
                    <p className='text-gray-600 mb-4 text-sm'>{item.desc}</p>

                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
