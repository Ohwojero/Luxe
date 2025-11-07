"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import AdminDashboard from "@/components/admin/dashboard"
import AdminProducts from "@/components/admin/products"
import AdminOrders from "@/components/admin/orders"
import AdminAnalytics from "@/components/admin/analytics"
import { BarChart3, Package, Users, TrendingUp, LogOut } from "lucide-react"
import Link from "next/link"

type AdminSection = "dashboard" | "products" | "orders" | "analytics"

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: Users },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
]

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard")

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <h1 className="font-serif text-xl font-bold text-primary">Luxe</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          isActive={activeSection === item.id}
                          onClick={() => setActiveSection(item.id as AdminSection)}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/" className="text-destructive hover:text-destructive">
                    <LogOut className="w-4 h-4" />
                    <span>Exit Admin</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-40 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="font-serif text-2xl font-bold text-foreground">
                {activeSection === "dashboard" && "Dashboard"}
                {activeSection === "products" && "Products"}
                {activeSection === "orders" && "Orders"}
                {activeSection === "analytics" && "Analytics"}
              </h1>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6">
            {activeSection === "dashboard" && <AdminDashboard />}
            {activeSection === "products" && <AdminProducts />}
            {activeSection === "orders" && <AdminOrders />}
            {activeSection === "analytics" && <AdminAnalytics />}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
