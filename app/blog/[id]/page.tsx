"use client"

import { motion } from "framer-motion"
import { Clock, User, Share2, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"

const BLOG_POSTS: Record<number, any> = {
  1: {
    id: 1,
    title: "10 Essential Skincare Tips for Glowing Skin",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min",
    category: "Skincare Tips",
    image: "/luxury-cosmetics-skincare-tips-glowing-skin.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Achieving glowing skin is more than just applying products. It's about understanding your skin's needs and following a consistent routine tailored to your skin type.</p>

      <h2>1. Cleanse Twice Daily</h2>
      <p>Start with a gentle cleanser in the morning and evening to remove makeup, dirt, and impurities. Cleansing sets the foundation for your entire skincare routine.</p>

      <h2>2. Exfoliate Regularly</h2>
      <p>Remove dead skin cells 2-3 times a week with a gentle exfoliant. This helps products penetrate better and reveals fresh, glowing skin underneath.</p>

      <h2>3. Hydrate from Within</h2>
      <p>Drink at least 8 glasses of water daily. Hydration is crucial for maintaining skin elasticity and achieving that coveted dewy glow.</p>

      <h2>4. Use a Quality Moisturizer</h2>
      <p>Apply moisturizer while your skin is still slightly damp. This locks in hydration and prevents dryness throughout the day.</p>

      <h2>5. Don't Skip SPF</h2>
      <p>Sun protection is non-negotiable. Use a broad-spectrum SPF 30 or higher daily to prevent premature aging and protect your skin.</p>

      <h2>Conclusion</h2>
      <p>Consistency is key when it comes to skincare. Follow these tips religiously, and you'll notice a visible improvement in your skin's radiance within weeks.</p>
    `,
  },
  2: {
    id: 2,
    title: "The Science Behind Our Premium Formulations",
    author: "Dr. Emily Chen",
    date: "March 10, 2024",
    readTime: "12 min",
    category: "Science",
    image: "/premium-cosmetics-science-formulations.jpg",
    content: `
      <h2>Introduction</h2>
      <p>At Luxe, we believe that beauty should be backed by science. Our premium formulations are developed through rigorous research and testing to ensure maximum efficacy and safety.</p>

      <h2>The Role of Active Ingredients</h2>
      <p>Our products feature carefully selected active ingredients like hyaluronic acid, vitamin C, and peptides, each chosen for their proven benefits in skincare science.</p>

      <h2>Clinical Testing and Results</h2>
      <p>Every formulation undergoes extensive clinical testing to validate its effectiveness. We measure improvements in skin hydration, texture, and overall appearance.</p>

      <h2>Sustainable Sourcing</h2>
      <p>We source ingredients responsibly, ensuring they are ethically obtained and environmentally friendly while maintaining the highest quality standards.</p>

      <h2>Conclusion</h2>
      <p>Our commitment to science-driven beauty means you can trust our products to deliver real, visible results.</p>
    `,
  },
  3: {
    id: 3,
    title: "Sustainability in Beauty: Our Commitment to Earth",
    author: "James Rodriguez",
    date: "March 5, 2024",
    readTime: "10 min",
    category: "Sustainability",
    image: "/sustainable-beauty-packaging-eco-friendly.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Sustainability is at the heart of everything we do at Luxe. We're committed to reducing our environmental impact while delivering exceptional beauty products.</p>

      <h2>Eco-Friendly Packaging</h2>
      <p>Our packaging is made from recycled materials and is fully recyclable. We're phasing out single-use plastics and exploring innovative, sustainable alternatives.</p>

      <h2>Ethical Sourcing</h2>
      <p>We work directly with suppliers who share our commitment to ethical practices, ensuring fair labor conditions and sustainable harvesting methods.</p>

      <h2>Carbon Neutral Operations</h2>
      <p>We're actively working towards carbon neutrality by offsetting our emissions and implementing energy-efficient practices in our manufacturing facilities.</p>

      <h2>Community Impact</h2>
      <p>Beyond environmental sustainability, we support local communities through various initiatives and partnerships that promote positive change.</p>

      <h2>Conclusion</h2>
      <p>Choosing sustainable beauty is choosing a better future. Join us in making a positive impact on our planet.</p>
    `,
  },
  4: {
    id: 4,
    title: "2024 Beauty Trends You Need to Know",
    author: "Lisa Park",
    date: "February 28, 2024",
    readTime: "9 min",
    category: "Trends",
    image: "/2024-beauty-trends-makeup-minimalism.jpg",
    content: `
      <h2>Introduction</h2>
      <p>The beauty landscape is constantly evolving. Here are the key trends shaping 2024 and how to incorporate them into your routine.</p>

      <h2>Skinimalism</h2>
      <p>Less is more with skinimalism – focusing on healthy, glowing skin rather than heavy makeup. Emphasize skincare over cosmetics.</p>

      <h2>Clean Beauty</h2>
      <p>Consumers are increasingly seeking clean, non-toxic products. Look for formulations free from harmful chemicals and parabens.</p>

      <h2>Personalization</h2>
      <p>Beauty is becoming more personalized with AI-driven recommendations and custom-formulated products based on your unique needs.</p>

      <h2>Sustainable Luxury</h2>
      <p>Luxury brands are embracing sustainability, offering high-end products with eco-friendly packaging and ethical sourcing.</p>

      <h2>Conclusion</h2>
      <p>Stay ahead of the curve by embracing these trends while maintaining what works best for your individual beauty journey.</p>
    `,
  },
  5: {
    id: 5,
    title: "Finding Your Perfect Foundation Match",
    author: "Maya Patel",
    date: "February 20, 2024",
    readTime: "7 min",
    category: "Makeup Guide",
    image: "/foundation-makeup-matching-guide.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Finding the right foundation can transform your makeup routine. Here's how to choose the perfect shade and formula for your skin.</p>

      <h2>Understanding Your Skin Tone</h2>
      <p>Consider your undertone – warm, cool, or neutral – and match it with foundation shades that complement your natural coloring.</p>

      <h2>Testing Foundation</h2>
      <p>Always test foundation on your jawline in natural light. The right shade should blend seamlessly with your skin tone.</p>

      <h2>Choosing the Right Formula</h2>
      <p>Select based on your skin type: liquid for dry skin, powder for oily skin, or tinted moisturizer for a natural look.</p>

      <h2>Application Tips</h2>
      <p>Use the right tools and techniques for even application. Build coverage gradually for a natural, flawless finish.</p>

      <h2>Conclusion</h2>
      <p>The perfect foundation enhances your natural beauty. Take your time to find the one that makes you feel confident and beautiful.</p>
    `,
  },
  6: {
    id: 6,
    title: "The Power of Rituals: Creating Your Beauty Routine",
    author: "Sophie Anderson",
    date: "February 15, 2024",
    readTime: "11 min",
    category: "Skincare Tips",
    image: "/beauty-skincare-routine-ritual-wellness.jpg",
    content: `
      <h2>Introduction</h2>
      <p>A consistent beauty routine is more than just steps – it's a ritual that nurtures both your skin and your well-being.</p>

      <h2>The Morning Ritual</h2>
      <p>Start your day with cleansing, moisturizing, and sun protection. Set a positive tone for the day ahead.</p>

      <h2>The Evening Reset</h2>
      <p>Remove makeup and impurities, then nourish your skin with targeted treatments while you sleep.</p>

      <h2>Weekly Treatments</h2>
      <p>Incorporate masks, exfoliation, and deep treatments once or twice a week for enhanced results.</p>

      <h2>Mindful Application</h2>
      <p>Take your time with each step, practicing mindfulness to make your routine a moment of self-care.</p>

      <h2>Adapting to Seasons</h2>
      <p>Adjust your routine based on weather and seasonal changes to keep your skin balanced year-round.</p>

      <h2>Conclusion</h2>
      <p>A beauty ritual is a commitment to yourself. Embrace the process and enjoy the journey to healthier, more radiant skin.</p>
    `,
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = BLOG_POSTS[postId]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-foreground/60 text-lg">Post not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-96 md:h-[500px] overflow-hidden"
      >
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{post.category}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 pb-6 border-b border-border flex-wrap">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-foreground/60" />
              <span className="text-foreground/80">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-foreground/60" />
              <span className="text-foreground/80">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-foreground/60" />
              <span className="text-foreground/80">{post.readTime} read</span>
            </div>
            <button className="ml-auto p-2 hover:bg-muted rounded-lg transition-colors">
              <Share2 className="w-5 h-5 text-foreground/60" />
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-6"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/<h2>/g, '<h2 class="font-serif text-3xl font-bold text-foreground mt-8 mb-4">')
              .replace(/<h2/g, '<h2 class="font-serif text-3xl font-bold text-foreground mt-8 mb-4"')
              .replace(/<p>/g, '<p class="text-foreground/80 leading-relaxed">')
              .replace(/<\/h2>/g, "</h2>"),
          }}
        />

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[2, 3].map((id) => (
              <Link
                key={id}
                href={`/blog/${id}`}
                className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="space-y-3">
                  <div className="h-40 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={`/luxury-skincare-beauty-article-.jpg?key=ghha5&height=300&width=400&query=luxury skincare beauty article ${id}`}
                      alt="Related"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    Article {id}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </article>

      <Footer />
    </main>
  )
}
