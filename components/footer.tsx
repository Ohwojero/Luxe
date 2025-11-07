"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Paintbrush as Pinterest, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif font-bold">Luxe</h3>
            <p className="text-background/80 text-sm">
              Premium cosmetics and skincare for the modern, conscious beauty enthusiast.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/shop" className="hover:text-background transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=makeup" className="hover:text-background transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/shop?category=skincare" className="hover:text-background transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/shop?category=fragrance" className="hover:text-background transition-colors">
                  Fragrance
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-background transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-background/70 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-background/70 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-background/70 transition-colors">
                <Pinterest className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-background/70 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70"
        >
          <p>&copy; 2025 Luxe Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="hover:text-background transition-colors">
              Shipping Info
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
