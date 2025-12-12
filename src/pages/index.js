import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Heart, Star, TrendingUp } from 'lucide-react';

const MarketWebsite = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 299000, image: "🎧", category: "electronics", rating: 4.8, sales: 1250 },
    { id: 2, name: "Smart Watch Pro", price: 450000, image: "⌚", category: "electronics", rating: 4.9, sales: 2100 },
    { id: 3, name: "Leather Backpack", price: 180000, image: "🎒", category: "fashion", rating: 4.6, sales: 890 },
    { id: 4, name: "Running Shoes", price: 220000, image: "👟", category: "fashion", rating: 4.7, sales: 1500 },
    { id: 5, name: "Coffee Maker", price: 350000, image: "☕", category: "home", rating: 4.5, sales: 650 },
    { id: 6, name: "Air Purifier", price: 420000, image: "🌬️", category: "home", rating: 4.8, sales: 780 },
    { id: 7, name: "Gaming Mouse", price: 150000, image: "🖱️", category: "electronics", rating: 4.7, sales: 920 },
    { id: 8, name: "Yoga Mat", price: 85000, image: "🧘", category: "sports", rating: 4.6, sales: 540 },
    { id: 9, name: "Bluetooth Speaker", price: 190000, image: "🔊", category: "electronics", rating: 4.8, sales: 1100 },
    { id: 10, name: "Sunglasses", price: 120000, image: "🕶️", category: "fashion", rating: 4.5, sales: 670 },
    { id: 11, name: "Desk Lamp", price: 95000, image: "💡", category: "home", rating: 4.6, sales: 430 },
    { id: 12, name: "Water Bottle", price: 45000, image: "💧", category: "sports", rating: 4.7, sales: 890 }
  ];

  const categories = [
    { id: 'all', name: 'Barchasi', icon: '🏪' },
    { id: 'electronics', name: 'Elektronika', icon: '📱' },
    { id: 'fashion', name: 'Moda', icon: '👔' },
    { id: 'home', name: 'Uy-joy', icon: '🏠' },
    { id: 'sports', name: 'Sport', icon: '⚽' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user1' && password === 'passwd123!') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Login yoki parol xato!');
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-pulse"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🛒</div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Market.uz
            </h1>
            <p className="text-gray-600">Xush kelibsiz!</p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔒</div>
              <input
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl animate-shake">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Kirish
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>Test uchun:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-2">user1 / passwd123!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🛒</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Market.uz
              </h1>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart size={24} className="text-gray-700" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart size={24} className="text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cart.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">Yangi Yil Chegirmalari!</h2>
              <p className="text-xl opacity-90">50% gacha chegirma barcha mahsulotlarda</p>
            </div>
            <div className="text-6xl animate-bounce">🎁</div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Mahsulotlar <span className="text-purple-600">({filteredProducts.length})</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-7xl">
                  {product.image}
                </div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
                {product.sales > 1000 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <TrendingUp size={14} />
                    <span>TOP</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1 mb-2">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.sales} sotildi)</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">
                      {product.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">so'm</p>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600">Mahsulot topilmadi</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Market.uz</h3>
              <p className="text-gray-400">O'zbekistondagi eng yaxshi onlayn market</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aloqa</h4>
              <p className="text-gray-400">📞 +998 90 123 45 67</p>
              <p className="text-gray-400">✉️ info@market.uz</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
              <div className="flex space-x-4 text-2xl">
                <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">📷</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">✈️</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Market.uz. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MarketWebsite;