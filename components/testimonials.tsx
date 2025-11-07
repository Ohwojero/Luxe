"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Beauty Enthusiast",
    content:
      "The quality is absolutely exceptional. My skin has never looked better, and I love that the brand is truly committed to sustainability.",
    rating: 5,
    image: "/professional-headshot-woman-portrait.jpg",
  },
  {
    name: "Emma Johnson",
    role: "Skincare Expert",
    content:
      "Finally a luxury brand that delivers on both promises - beautiful results and ethical practices. Worth every penny.",
    rating: 5,
    image: "/professional-headshot-woman-portrait.jpg",
  },
  {
    name: "Jessica Lee",
    role: "Makeup Artist",
    content: "I recommend Luxe to all my clients. The formulations are incredible and the packaging is stunning.",
    rating: 5,
    image: "/professional-headshot-woman-portrait.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Loved by Our Community</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who've discovered their best beauty routine.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
