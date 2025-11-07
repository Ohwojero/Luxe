"use client"

import { useState, useMemo } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"

const PRODUCTS = [
  {
    id: 1,
    name: "Silk Face Serum",
    price: 68,
    category: "Skincare",
    image: "/luxury-silk-face-serum-skincare-product.jpg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Rose Glow Moisturizer",
    price: 52,
    category: "Skincare",
    image: "/rose-glow-moisturizer-cream-luxury.jpg",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick",
    price: 38,
    category: "Makeup",
    image: "/velvet-matte-lipstick-luxury-makeup.jpg",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Golden Hour Highlighter",
    price: 45,
    category: "Makeup",
    image: "/golden-hour-highlighter-glow-makeup.jpg",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    name: "Ocean Breeze Fragrance",
    price: 72,
    category: "Fragrance",
    image: "/ocean-breeze-fragrance-luxury-bottle.jpg",
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 6,
    name: "Silk Hair Mask",
    price: 42,
    category: "Haircare",
    image: "/silk-hair-mask-treatment-luxury.jpg",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 7,
    name: "Radiance Eye Cream",
    price: 58,
    category: "Skincare",
    image: "/radiance-eye-cream-luxury-skincare.jpg",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 8,
    name: "Berry Bliss Concealer",
    price: 32,
    category: "Makeup",
    image: "/berry-bliss-concealer-luxury-makeup.jpg",
    rating: 4.7,
    reviews: 178,
  },
]

type SortOption = "newest" | "popular" | "price-low" | "price-high"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const categories = ["All", "Makeup", "Skincare", "Fragrance", "Haircare"]

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS

    // Filter by category
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      products = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Sort
    switch (sortBy) {
      case "popular":
        products.sort((a, b) => b.reviews - a.reviews)
        break
      case "price-low":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        products.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return products
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Collection</h1>
            <p className="text-foreground/60 text-lg">
              Discover our curated selection of premium cosmetics and skincare products
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Search */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Search</label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                      />
                      <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="space-y-2">
                <label htmlFor="sort" className="text-sm font-semibold text-foreground">
                  Sort By
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <p className="text-foreground/60 text-lg">No products found</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
