"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import AboutBrand from "@/components/about-brand"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <AboutBrand />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
