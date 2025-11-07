"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BarChart3, Package, Users, TrendingUp, LogOut, X } from "lucide-react"

interface AdminSidebarProps {
  activeSection: string
  onSectionChange: (section: any) => void
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ activeSection, onSectionChange, isOpen, onClose }: AdminSidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: Users },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed md:static w-64 h-screen bg-card border-r border-border p-6 z-40 overflow-y-auto"
      >
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl font-bold text-primary">Luxe Admin</h1>
            <button onClick={onClose} className="md:hidden p-2 hover:bg-muted rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id)
                    onClose()
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="pt-8 border-t border-border">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-destructive hover:bg-destructive/10 rounded-lg transition-colors font-semibold"
            >
              <LogOut className="w-5 h-5" />
              Exit Admin
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
