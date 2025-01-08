import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: 12.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil",
    price: 14.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crispy romaine with classic caesar dressing",
    price: 9.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, red onions, and tangy BBQ sauce",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Spicy Chicken Burger",
    description: "Crispy chicken breast with spicy mayo and pickles",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Greek Salad",
    description: "Fresh cucumbers, tomatoes, olives, and feta cheese",
    price: 11.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms and parmesan",
    price: 18.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Fish & Chips",
    description: "Beer-battered cod with crispy fries and tartar sauce",
    price: 17.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Veggie Supreme Pizza",
    description: "Bell peppers, mushrooms, onions, and black olives",
    price: 15.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Bacon Deluxe Burger",
    description: "Beef patty with crispy bacon, cheddar, and BBQ sauce",
    price: 14.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon herb butter",
    price: 22.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1567162874-3eb0664dcd43?auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    name: "Chicken Alfredo Pasta",
    description: "Fettuccine in creamy sauce with grilled chicken",
    price: 16.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023402d?auto=format&fit=crop&q=80"
  },
  {
    id: 13,
    name: "Vegetarian Burger",
    description: "Plant-based patty with avocado and chipotle mayo",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&q=80"
  },
  {
    id: 14,
    name: "Cobb Salad",
    description: "Grilled chicken, bacon, egg, and blue cheese",
    price: 13.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&q=80"
  },
  {
    id: 15,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 15.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80"
  },
  {
    id: 16,
    name: "Shrimp Scampi",
    description: "Garlic butter shrimp with linguine pasta",
    price: 20.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80"
  },
  {
    id: 17,
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    price: 12.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&q=80"
  },
  {
    id: 18,
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella with marinara sauce",
    price: 8.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&q=80"
  },
  {
    id: 19,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream",
    price: 7.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80"
  },
  {
    id: 20,
    name: "New York Cheesecake",
    description: "Classic cheesecake with berry compote",
    price: 8.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd5107340c?auto=format&fit=crop&q=80"
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-lg font-bold text-indigo-600">${item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button 
                onClick={() => {
                  addToCart(item);
                  alert(`${item.name} added to cart!`);
                }}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
              >
                <Plus className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;