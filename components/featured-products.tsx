"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Silk Face Serum",
    price: "$68",
    image: "/luxury-facial-serum-skincare-premium.jpg",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Rose Glow Moisturizer",
    price: "$52",
    image: "/rose-glow-moisturizer-skincare.jpg",
    category: "Skincare",
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick",
    price: "$38",
    image: "/luxury-velvet-matte-lipstick-makeup.jpg",
    category: "Makeup",
  },
  {
    id: 4,
    name: "Golden Hour Highlighter",
    price: "$45",
    image: "/golden-hour-highlighter-luxury-makeup.jpg",
    category: "Makeup",
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Curated selections of our most-loved products, featuring premium ingredients and luxurious formulations.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden h-96 mb-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
                >
                  <button className="p-3 bg-white rounded-full hover:bg-accent transition-colors">
                    <ShoppingBag className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="p-3 bg-white rounded-full hover:bg-accent transition-colors">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.category}</span>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-lg font-semibold text-foreground">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
