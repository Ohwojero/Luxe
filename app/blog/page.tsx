"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, User, Search, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Essential Skincare Tips for Glowing Skin",
    excerpt: "Discover the most important skincare practices that will transform your complexion.",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min",
    category: "Skincare Tips",
    image: "/skincare-tips-glowing-skin.jpg",
  },
  {
    id: 2,
    title: "The Science Behind Our Premium Formulations",
    excerpt: "Understanding the ingredients that make Luxe products so effective.",
    author: "Dr. Emily Chen",
    date: "March 10, 2024",
    readTime: "12 min",
    category: "Science",
    image: "/premium-cosmetics-science-formulations.jpg",
  },
  {
    id: 3,
    title: "Sustainability in Beauty: Our Commitment to Earth",
    excerpt: "How we're reducing our environmental impact one product at a time.",
    author: "James Rodriguez",
    date: "March 5, 2024",
    readTime: "10 min",
    category: "Sustainability",
    image: "/sustainable-beauty-packaging-eco-friendly.jpg",
  },
  {
    id: 4,
    title: "2024 Beauty Trends You Need to Know",
    excerpt: "From minimalist makeup to skinimalism, explore the trends shaping beauty.",
    author: "Lisa Park",
    date: "February 28, 2024",
    readTime: "9 min",
    category: "Trends",
    image: "/2024-beauty-trends-makeup-minimalism.jpg",
  },
  {
    id: 5,
    title: "Finding Your Perfect Foundation Match",
    excerpt: "A comprehensive guide to choosing the right foundation shade and formula.",
    author: "Maya Patel",
    date: "February 20, 2024",
    readTime: "7 min",
    category: "Makeup Guide",
    image: "/foundation-makeup-matching-guide.jpg",
  },
  {
    id: 6,
    title: "The Power of Rituals: Creating Your Beauty Routine",
    excerpt: "Why consistency matters and how to build a sustainable beauty routine.",
    author: "Sophie Anderson",
    date: "February 15, 2024",
    readTime: "11 min",
    category: "Skincare Tips",
    image: "/beauty-skincare-routine-ritual-wellness.jpg",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(BLOG_POSTS.map((post) => post.category))]

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Beauty & Wellness Blog</h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Expert insights, beauty tips, and industry trends to elevate your skincare and makeup knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="space-y-4 h-full">
                    {/* Image */}
                    <div className="relative h-64 rounded-2xl overflow-hidden bg-card">
                      <img
                        src={post.image || "/skincare-tips-glowing-skin.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm line-clamp-2">{post.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-foreground/60 pt-3 border-t border-border">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No articles found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
