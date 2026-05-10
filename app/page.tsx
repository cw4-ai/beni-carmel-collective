'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const products = [
  { id: 1, name: 'Essential Hoodie', category: 'Hoodies', price: '$120', color: 'Black' },
  { id: 2, name: 'Elevated Tee', category: 'T-Shirts', price: '$45', color: 'Cream' },
  { id: 3, name: 'Executive Jacket', category: 'Jackets', price: '$280', color: 'Olive' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bcc-black text-bcc-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-bcc-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0"
            >
              <h1 className="text-2xl font-serif font-bold tracking-wider">BCC</h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-bcc-gold transition">Shop</a>
              <a href="#" className="hover:text-bcc-gold transition">About</a>
              <a href="#" className="hover:text-bcc-gold transition">Lookbook</a>
              <a href="#" className="hover:text-bcc-gold transition">Contact</a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-bcc-gold/10 rounded-lg transition hidden md:block">
                <Heart size={20} />
              </button>
              <button className="p-2 hover:bg-bcc-gold/10 rounded-lg transition hidden md:block">
                <ShoppingBag size={20} />
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect border-b border-bcc-gold/10"
        >
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block hover:text-bcc-gold transition">Shop</a>
            <a href="#" className="block hover:text-bcc-gold transition">About</a>
            <a href="#" className="block hover:text-bcc-gold transition">Lookbook</a>
            <a href="#" className="block hover:text-bcc-gold transition">Contact</a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bcc-navy via-bcc-black to-bcc-forest opacity-60"></div>
        <div className="absolute inset-0 parallax"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider"
          >
            More Than Fashion.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-serif mb-8 text-bcc-gold"
          >
            A Calling.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-bcc-beige text-lg mb-12"
          >
            Béni Carmel Collective
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-bcc-gold text-bcc-black font-semibold rounded-lg hover:bg-bcc-beige transition"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Collection</h2>
            <p className="text-bcc-beige">Curated pieces from Béni Carmel Collective</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 bg-gradient-to-br from-bcc-beige to-bcc-gold rounded-lg overflow-hidden mb-4 glass-effect">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-bcc-black text-2xl font-serif font-bold mb-2">BCC</p>
                      <p className="text-bcc-black text-sm">{product.color}</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
                <p className="text-bcc-beige text-sm mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-bcc-gold text-lg font-semibold">{product.price}</span>
                  <button className="p-2 hover:bg-bcc-gold/10 rounded-lg transition">
                    <Heart size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-bcc-navy/20 to-bcc-forest/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-bcc-beige text-lg leading-relaxed mb-8">
              A collective built on purpose, creativity, and elevation. We believe fashion transcends aesthetics—it's a statement of identity, culture, and vision. Every piece carries the Béni Carmel ethos: blessed energy, mountain mindset, and collective excellence.
            </p>
            <p className="text-bcc-gold font-serif text-xl italic">
              "Elevation is a collective experience."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join the Collective</h2>
            <p className="text-bcc-beige mb-8">Stay updated with new drops, stories, and community moments</p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 bg-bcc-black border border-bcc-gold/30 rounded-lg text-bcc-cream placeholder-bcc-beige/50 focus:outline-none focus:border-bcc-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-bcc-gold text-bcc-black font-semibold rounded-lg hover:bg-bcc-beige transition"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-bcc-gold/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">Béni Carmel</h3>
              <p className="text-bcc-beige text-sm">Luxury streetwear for the collective.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-bcc-beige text-sm">
                <li><a href="#" className="hover:text-bcc-gold transition">Men</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">Women</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-bcc-beige text-sm">
                <li><a href="#" className="hover:text-bcc-gold transition">Story</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">Team</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-bcc-beige text-sm">
                <li><a href="#" className="hover:text-bcc-gold transition">Instagram</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">Twitter</a></li>
                <li><a href="#" className="hover:text-bcc-gold transition">TikTok</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-bcc-gold/10 pt-8 text-center text-bcc-beige text-sm">
            <p>&copy; 2026 Béni Carmel Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
