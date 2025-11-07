"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingBag, Heart, Eye, Star } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"

interface ProductProps {
  product: {
    id: number
    name: string
    price: number
    category: string
    image: string
    rating: number
    reviews: number
  }
  index: number
}

export default function ProductCard({ product, index }: ProductProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { addItem } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
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

        {/* Quick Action Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
        >
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
            className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <ShoppingBag className="w-5 h-5 text-foreground" />
          </button>
          <Link
            href={`/products/${product.id}`}
            className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <Eye className="w-5 h-5 text-foreground" />
          </Link>
          <button className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.category}</span>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-foreground">${product.price}</p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-xs font-semibold text-foreground">{product.rating}</span>
            <span className="text-xs text-foreground/60">({product.reviews})</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
