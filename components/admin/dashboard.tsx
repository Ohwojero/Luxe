"use client"

import { motion } from "framer-motion"
import { TrendingUp, Package, Users, DollarSign } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    label: "Total Revenue",
    value: "$45,231.89",
    change: "+12.5%",
  },
  {
    icon: Package,
    label: "Total Orders",
    value: "1,234",
    change: "+8.2%",
  },
  {
    icon: Users,
    label: "Active Customers",
    value: "5,821",
    change: "+15.3%",
  },
  {
    icon: TrendingUp,
    label: "Conversion Rate",
    value: "3.24%",
    change: "+2.1%",
  },
]

const recentOrders = [
  { id: "#001", customer: "Sarah Mitchell", amount: "$248.50", status: "Delivered", date: "Mar 15" },
  { id: "#002", customer: "Emma Johnson", amount: "$156.25", status: "Processing", date: "Mar 14" },
  { id: "#003", customer: "Jessica Lee", amount: "$89.99", status: "Shipped", date: "Mar 13" },
  { id: "#004", customer: "Alex Chen", amount: "$325.00", status: "Pending", date: "Mar 12" },
  { id: "#005", customer: "Maria Garcia", amount: "$179.50", status: "Delivered", date: "Mar 11" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-emerald-600 font-semibold mt-4">{stat.change} from last month</p>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 bg-card rounded-2xl border border-border"
      >
        <h2 className="font-semibold text-lg text-foreground mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground/70">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground/70">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground/70">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground/70">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground/70">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-foreground">{order.id}</td>
                  <td className="py-3 px-4 text-foreground/80">{order.customer}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
