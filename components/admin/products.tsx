"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Edit2, Trash2, Search } from "lucide-react"
import AddProductDialog from "./add-product-dialog"

const initialProducts = [
  { id: 1, name: "Silk Face Serum", price: "$68", stock: 245, category: "Skincare", status: "Active" },
  { id: 2, name: "Rose Glow Moisturizer", price: "$52", stock: 189, category: "Skincare", status: "Active" },
  { id: 3, name: "Velvet Matte Lipstick", price: "$38", stock: 412, category: "Makeup", status: "Active" },
  { id: 4, name: "Golden Hour Highlighter", price: "$45", stock: 98, category: "Makeup", status: "Low Stock" },
  { id: 5, name: "Ocean Breeze Fragrance", price: "$72", stock: 0, category: "Fragrance", status: "Out of Stock" },
]

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddProduct = (newProduct: Omit<typeof initialProducts[0], 'id'>) => {
    const newId = Math.max(...products.map(p => p.id)) + 1
    setProducts([...products, { ...newProduct, id: newId }])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-sm relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <AddProductDialog onAddProduct={handleAddProduct} />
      </div>

      {/* Products Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-card rounded-2xl border border-border overflow-x-auto"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Product Name</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Category</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Price</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Stock</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">{product.name}</td>
                <td className="py-3 px-4 text-foreground/80">{product.category}</td>
                <td className="py-3 px-4 font-semibold text-foreground">{product.price}</td>
                <td className="py-3 px-4 text-foreground/80">{product.stock}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === "Active"
                        ? "bg-emerald-500/20 text-emerald-600"
                        : product.status === "Low Stock"
                          ? "bg-yellow-500/20 text-yellow-600"
                          : "bg-red-500/20 text-red-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-destructive" />
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
