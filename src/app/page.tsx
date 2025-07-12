import Link from 'next/link';
import { ShoppingBag, Heart, Search, User } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sa-earth-50 to-sa-clay-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-sa-green">
                Ietsie
              </Link>
            </div>
            
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for unique items..."
                  className="w-full pl-10 pr-4 py-2 border border-sa-earth-300 rounded-lg focus:ring-2 focus:ring-sa-gold focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-sa-earth-400" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-sa-earth-600 hover:text-sa-green">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 text-sa-earth-600 hover:text-sa-green">
                <ShoppingBag className="h-6 w-6" />
              </button>
              <button className="p-2 text-sa-earth-600 hover:text-sa-green">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-sa-green mb-6">
            Discover South African
            <span className="block text-sa-gold">Handmade Treasures</span>
          </h1>
          <p className="text-xl text-sa-earth-700 mb-8 max-w-3xl mx-auto">
            Connect with local artisans and find unique, handcrafted items that tell the story of South African heritage and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-sa-primary">
              Start Shopping
            </button>
            <button className="btn-sa-secondary">
              Become a Seller
            </button>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sa-green text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Traditional Beadwork', emoji: '💎' },
              { name: 'African Art', emoji: '🎨' },
              { name: 'Handwoven Textiles', emoji: '🧵' },
              { name: 'Pottery & Ceramics', emoji: '🏺' },
              { name: 'Jewelry', emoji: '💍' },
              { name: 'Home Decor', emoji: '🏠' },
              { name: 'Clothing', emoji: '👗' },
              { name: 'Heritage Items', emoji: '🏛️' },
            ].map((category) => (
              <div
                key={category.name}
                className="card-sa text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.emoji}</div>
                <h3 className="font-semibold text-sa-earth-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sa-green text-center mb-12">
            Featured Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hand-carved Wooden Sculpture',
                price: 'R 450.00',
                artist: 'Thabo Mthembu',
                location: 'KwaZulu-Natal',
              },
              {
                title: 'Traditional Zulu Beadwork Necklace',
                price: 'R 280.00',
                artist: 'Nomsa Dlamini',
                location: 'Eastern Cape',
              },
              {
                title: 'Handwoven Ndebele Table Runner',
                price: 'R 320.00',
                artist: 'Grace Mahlangu',
                location: 'Mpumalanga',
              },
            ].map((item, index) => (
              <div key={index} className="card-sa hover:shadow-lg transition-shadow">
                <div className="h-48 bg-sa-earth-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sa-earth-400">Image Coming Soon</span>
                </div>
                <h3 className="font-semibold text-lg text-sa-earth-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-za-currency mb-2">{item.price}</p>
                <p className="text-sm text-sa-earth-600">
                  by {item.artist}
                </p>
                <p className="text-xs text-sa-earth-500">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sa-green text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Ietsie</h3>
              <ul className="space-y-2 text-sm">
                <li>Our Story</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-2 text-sm">
                <li>Start Selling</li>
                <li>Seller Handbook</li>
                <li>Community</li>
                <li>Education</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sa-blue mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Ietsie. Proudly South African. Made with ❤️ in SA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}