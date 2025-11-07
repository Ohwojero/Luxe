"use client"

import { motion } from "framer-motion"
import { Leaf, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "All our ingredients are ethically sourced from sustainable suppliers worldwide.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "We never test on animals. Every product is crafted with compassion.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Formulated with luxury ingredients for visible, transformative results.",
  },
]

export default function AboutBrand() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden h-96 md:h-full">
              <img src="/elegant-minimalist-beauty-brand-aesthetic.jpg" alt="Our brand story" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Philosophy</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                At Luxe, we believe beauty goes beyond appearance. We're committed to creating products that celebrate
                your natural radiance while respecting our planet and all living creatures.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-foreground/60 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
