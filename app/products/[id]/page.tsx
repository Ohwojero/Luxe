"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star, Heart, Share2, Check, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCart } from "@/context/cart-context"

// Mock product data
const PRODUCTS: Record<number, any> = {
  1: {
    id: 1,
    name: "Silk Face Serum",
    price: 68,
    rating: 4.8,
    reviews: 124,
    category: "Skincare",
    description:
      "A luxurious facial serum infused with premium silicones and natural oils. Provides intense hydration and a luminous finish to your complexion.",
    image: "/luxury-silk-face-serum-skincare-product.jpg",
    images: ["/luxury-silk-face-serum-skincare-product.jpg", "/silk-serum-bottle-close-up-luxury.jpg", "/serum-product-application-skincare.jpg"],
    ingredients: ["Hyaluronic Acid Complex", "Rose Hip Oil", "Vitamin E", "Retinol Alternative", "Squalane"],
    benefits: [
      "Intense hydration and nourishment",
      "Improves skin elasticity and firmness",
      "Reduces fine lines and wrinkles",
      "Enhances skin radiance and glow",
      "Non-comedogenic formula",
    ],
    usage: "Apply 2-3 drops to clean skin morning and evening. Gently massage until absorbed.",
    inStock: true,
  },
  2: {
    id: 2,
    name: "Rose Glow Moisturizer",
    price: 52,
    rating: 4.9,
    reviews: 89,
    category: "Skincare",
    description: "A silky, rose-infused moisturizer that locks in hydration and leaves skin feeling soft and supple.",
    image: "/rose-glow-moisturizer-cream-luxury.jpg",
    images: ["/rose-glow-moisturizer-cream-luxury.jpg", "/rose-moisturizer-jar-luxury-skincare.jpg", "/moisturizer-texture-application.jpg"],
    ingredients: ["Rose Extract", "Ceramides", "Glycerin", "Aloe Vera", "Jojoba Oil"],
    benefits: [
      "Deep hydration and moisture retention",
      "Soothes and calms irritated skin",
      "Strengthens skin barrier",
      "Lightweight and absorbs quickly",
      "Suitable for all skin types",
    ],
    usage: "Apply to face and neck after cleansing. Use morning and evening.",
    inStock: true,
  },
  3: {
    id: 3,
    name: "Velvet Matte Lipstick",
    price: 38,
    rating: 4.7,
    reviews: 156,
    category: "Makeup",
    description:
      "A highly pigmented, long-wearing lipstick with a velvety matte finish. Comfortable wear without drying out lips.",
    image: "/velvet-matte-lipstick-luxury-makeup.jpg",
    images: ["/velvet-matte-lipstick-luxury-makeup.jpg", "/matte-lipstick-swatches-colors.jpg", "/lipstick-application-makeup.jpg"],
    ingredients: ["Vitamin E", "Jojoba Oil", "Pigments", "Silicones", "Conditioning Agents"],
    benefits: [
      "Long-wearing, up to 8 hours",
      "Matte finish without flaking",
      "Highly pigmented and vibrant colors",
      "Comfortable and hydrating",
      "Available in 12 stunning shades",
    ],
    usage: "Apply directly to lips. Use lip liner for precision application.",
    inStock: true,
  },
  4: {
    id: 4,
    name: "Golden Hour Highlighter",
    price: 45,
    rating: 4.9,
    reviews: 203,
    category: "Makeup",
    description:
      "A luminous highlighter that creates a radiant, dimensional glow. Buildable coverage for customized shine.",
    image: "/golden-hour-highlighter-glow-makeup.jpg",
    images: ["/golden-hour-highlighter-glow-makeup.jpg", "/highlighter-powder-shimmer-luxe.jpg", "/placeholder.svg?height=400&width=300"],
    ingredients: ["Mica", "Silica", "Titanium Dioxide", "Iron Oxides", "Vitamin A Palmitate"],
    benefits: [
      "Creates a radiant, glowing complexion",
      "Buildable and blendable formula",
      "Dimensional and multi-dimensional glow",
      "Cruelty-free and vegan",
      "Long-lasting wear",
    ],
    usage: "Apply to cheekbones, brow bone, and nose using a highlighter brush.",
    inStock: true,
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = PRODUCTS[productId]

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-32">
          <p className="text-foreground/60 text-lg">Product not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, quantity, image: product.image })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-96 md:h-full bg-secondary/10">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.category}</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
                <span className="text-foreground/60">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-foreground">${product.price}</div>

              {/* Description */}
              <p className="text-lg text-foreground/70 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-muted transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  isAdded ? "bg-emerald-500 text-white" : "bg-primary text-primary-foreground hover:shadow-lg"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </motion.button>

              {/* Secondary Actions */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save
                </button>
                <button className="flex-1 py-3 border-2 border-border text-foreground rounded-full font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-lg">
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Availability</p>
                <p className="font-semibold text-emerald-600">In Stock</p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Shipping</p>
                <p className="font-semibold text-foreground">Free over $100</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 space-y-12"
        >
          {/* Ingredients */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-foreground">Key Ingredients</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.ingredients.map((ingredient: string, index: number) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-foreground">Benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-foreground">How to Use</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{product.usage}</p>
          </div>

          {/* Related Products */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(PRODUCTS)
                .filter((p: any) => p.id !== productId)
                .slice(0, 3)
                .map((relatedProduct: any, index: number) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="rounded-2xl overflow-hidden h-64 mb-4 bg-card hover:shadow-md transition-shadow">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-lg font-bold text-foreground">${relatedProduct.price}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
