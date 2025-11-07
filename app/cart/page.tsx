"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Trash2, ShoppingBag } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  const shipping = items.length > 0 && total >= 100 ? 0 : 10
  const subtotal = total
  const tax = Number((subtotal * 0.1).toFixed(2))
  const finalTotal = subtotal + tax + shipping

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-foreground/60 text-lg">
              {items.length} item{items.length !== 1 ? "s" : ""} in your cart
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 md:gap-6 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
                >
                  {/* Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                      <p className="text-primary font-semibold">${item.price}</p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-lg w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 font-semibold min-w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors ml-auto"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold text-lg text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 h-fit sticky top-24"
            >
              <div className="p-6 bg-card rounded-2xl border border-border space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-3 border-b border-border pb-4">
                  <div className="flex justify-between text-foreground/80">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/80">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-emerald-600 font-semibold">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-foreground/80">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-3xl font-bold text-primary">${finalTotal.toFixed(2)}</span>
                </div>

                {total < 100 && (
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-foreground/80">Add ${(100 - total).toFixed(2)} more for free shipping</p>
                  </div>
                )}

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-center hover:shadow-lg transition-all hover:bg-opacity-90"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="block w-full py-3 border-2 border-primary text-primary rounded-full font-semibold text-center hover:bg-primary/10 transition-colors"
                >
                  Continue Shopping
                </Link>

                <button
                  onClick={clearCart}
                  className="w-full py-3 text-destructive hover:bg-destructive/10 rounded-full font-semibold transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 space-y-6">
            <ShoppingBag className="w-20 h-20 mx-auto text-foreground/20" />
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-foreground">Your Cart is Empty</h2>
              <p className="text-foreground/60 text-lg">Start shopping to add items to your cart</p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all hover:bg-opacity-90"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </Link>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  )
}
