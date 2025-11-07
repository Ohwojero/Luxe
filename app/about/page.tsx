"use client"

import { motion } from "framer-motion"
import { Award, Users, Leaf, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Leaf, label: "Sustainable Practices", value: "100%" },
    { icon: Heart, label: "Products Loved", value: "200+" },
  ]

  const timeline = [
    {
      year: "2018",
      title: "Founded",
      description: "Luxe Beauty was born with a vision to create premium, ethical cosmetics.",
    },
    {
      year: "2019",
      title: "First Collection",
      description: "Launched our signature skincare line with positive reception from beauty critics.",
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "Achieved carbon-neutral status and switched to 100% recyclable packaging.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our reach to 25 countries with dedicated customer support.",
    },
    {
      year: "2024",
      title: "Innovation Lab",
      description: "Opened state-of-the-art research facility for next-gen formulations.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[500px] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">Our Story</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We believe beauty should never come at the cost of ethics, sustainability, or self-respect. Luxe Beauty
              was founded on the principle that luxury and responsibility can coexist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-serif text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To create transformative beauty products that empower individuals to feel confident and beautiful,
                  while championing sustainability and ethical practices every step of the way.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Our Core Values</h3>
                <ul className="space-y-3">
                  {["Authenticity", "Sustainability", "Inclusion", "Innovation", "Transparency"].map((value, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-96 md:h-full rounded-2xl overflow-hidden"
            >
              <img src="/luxury-cosmetics-skincare-brand-mission.jpg" alt="Our mission" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Journey</h2>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                {/* Timeline Point */}
                <div className="hidden md:flex flex-col items-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && <div className="w-1 h-32 bg-primary/20 mt-4" />}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 bg-card rounded-2xl border border-border">
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{item.year}</p>
                  <h3 className="font-semibold text-xl text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Passionate individuals dedicated to creating the best beauty products in the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sofia Martinez", role: "Founder & CEO" },
              { name: "Emma Johnson", role: "Head of Product" },
              { name: "James Chen", role: "Sustainability Lead" },
              { name: "Olivia Brown", role: "Community Manager" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={`/professional-.jpg?height=300&width=300&query=professional-${member.name.replace(/\s+/g, "-").toLowerCase()}-headshot`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Awards & Recognition</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Best Sustainable Beauty Brand 2024",
              "Innovation Excellence Award",
              "Customer Choice Award",
              "Ethical Beauty Certification",
              "Green Business Achievement",
              "Top 10 Beauty Startups",
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-2xl border border-border text-center hover:border-primary/30 transition-colors"
              >
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
