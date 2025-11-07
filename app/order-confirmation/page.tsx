"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Mail, Package } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Success Icon */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
            <CheckCircle className="w-20 h-20 mx-auto text-emerald-500" />
          </motion.div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Thank You for Your Order</h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Your order has been successfully placed and is being prepared for shipment. You'll receive tracking
              information shortly.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-card rounded-2xl border border-border space-y-3"
            >
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Confirmation Email</h3>
              <p className="text-sm text-foreground/70">Check your inbox for order confirmation and tracking details</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-card rounded-2xl border border-border space-y-3"
            >
              <Package className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Fast Shipping</h3>
              <p className="text-sm text-foreground/70">Your items will ship within 1-2 business days</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border space-y-3 text-sm">
            <p className="text-foreground/60">Have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="text-primary hover:underline">
                Contact Support
              </Link>
              <Link href="/shipping" className="text-primary hover:underline">
                Shipping Info
              </Link>
              <Link href="/returns" className="text-primary hover:underline">
                Return Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
