"use client"

import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const salesData = [
  { month: "Jan", revenue: 4000, orders: 240 },
  { month: "Feb", revenue: 5200, orders: 290 },
  { month: "Mar", revenue: 6800, orders: 350 },
  { month: "Apr", revenue: 5900, orders: 310 },
  { month: "May", revenue: 7200, orders: 420 },
  { month: "Jun", revenue: 8100, orders: 480 },
]

const categoryData = [
  { category: "Makeup", revenue: 12500 },
  { category: "Skincare", revenue: 18900 },
  { category: "Fragrance", revenue: 9200 },
  { category: "Haircare", revenue: 7800 },
]

export default function AdminAnalytics() {
  return (
    <div className="space-y-8">
      {/* Sales Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-card rounded-2xl border border-border"
      >
        <h2 className="font-semibold text-lg text-foreground mb-6">Sales Trends</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-foreground)" opacity={0.7} />
            <YAxis stroke="var(--color-foreground)" opacity={0.7} />
            <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} />
            <Line type="monotone" dataKey="orders" stroke="var(--color-accent)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Category Revenue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 bg-card rounded-2xl border border-border"
      >
        <h2 className="font-semibold text-lg text-foreground mb-6">Revenue by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="category" stroke="var(--color-foreground)" opacity={0.7} />
            <YAxis stroke="var(--color-foreground)" opacity={0.7} />
            <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }} />
            <Bar dataKey="revenue" fill="var(--color-primary)" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
