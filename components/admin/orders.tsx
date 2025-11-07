"use client"

import { motion } from "framer-motion"
import { Eye, Download } from "lucide-react"

const orders = [
  { id: "#001", customer: "Sarah Mitchell", products: 3, amount: "$248.50", status: "Delivered", date: "Mar 15" },
  { id: "#002", customer: "Emma Johnson", products: 2, amount: "$156.25", status: "Processing", date: "Mar 14" },
  { id: "#003", customer: "Jessica Lee", products: 1, amount: "$89.99", status: "Shipped", date: "Mar 13" },
  { id: "#004", customer: "Alex Chen", products: 4, amount: "$325.00", status: "Pending", date: "Mar 12" },
  { id: "#005", customer: "Maria Garcia", products: 2, amount: "$179.50", status: "Delivered", date: "Mar 11" },
  { id: "#006", customer: "James Wilson", products: 5, amount: "$425.75", status: "Processing", date: "Mar 10" },
]

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-card rounded-2xl border border-border overflow-x-auto"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Order ID</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Products</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">{order.id}</td>
                <td className="py-3 px-4 text-foreground/80">{order.customer}</td>
                <td className="py-3 px-4 text-foreground/80">{order.products} items</td>
                <td className="py-3 px-4 font-semibold text-foreground">{order.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-emerald-500/20 text-emerald-600"
                        : order.status === "Processing"
                          ? "bg-blue-500/20 text-blue-600"
                          : order.status === "Shipped"
                            ? "bg-purple-500/20 text-purple-600"
                            : "bg-yellow-500/20 text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-foreground/80">{order.date}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-foreground/70" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
