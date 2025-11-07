"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Join Our Community</h2>
            <p className="text-foreground/70 text-lg">
              Get exclusive access to new launches, beauty tips, and special offers. Plus, get 15% off your first order.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-semibold"
            >
              Thank you! Check your email for your 15% discount code.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
