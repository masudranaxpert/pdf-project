import { motion } from "framer-motion";
import { Layers, Scissors, Minimize2, Code2, Shield, Zap, Lock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { UniversalActionZone } from "@/components/UniversalActionZone";
import { FocusCard } from "@/components/FocusCard";
import { StepsSection } from "@/components/StepsSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into a single document. Arrange pages in any order you want.",
    icon: Layers,
    path: "/merge-pdf",
    color: "blue" as const,
  },
  {
    title: "Split PDF",
    description: "Extract specific pages or split your PDF into separate documents with precision.",
    icon: Scissors,
    path: "/split-pdf",
    color: "green" as const,
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while maintaining quality. Perfect for email attachments.",
    icon: Minimize2,
    path: "/compress-pdf",
    color: "orange" as const,
  },
  {
    title: "PDF to HTML",
    description: "Convert your PDF documents to clean, semantic HTML code for web use.",
    icon: Code2,
    path: "/pdf-to-html",
    color: "purple" as const,
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description: "Files never leave your browser",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process files instantly",
  },
  {
    icon: Lock,
    title: "No Sign-up",
    description: "Use all tools for free",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-60 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-32 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                No uploads. No servers. 100% private.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-balance leading-[1.1]"
            >
              PDF Tools That
              <br />
              <span className="gradient-text-primary">Respect Your Privacy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Merge, split, compress, and convert PDFs entirely in your browser. 
              Your files never leave your device.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold block">{feature.title}</span>
                    <span className="text-xs text-muted-foreground">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Universal Action Zone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <UniversalActionZone />
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-sm font-medium rounded-full mb-4 text-muted-foreground">
              All Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Powerful Tools, Zero Compromise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to work with PDFs, without the bloat or privacy concerns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <FocusCard
                key={tool.path}
                {...tool}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="modern-card p-12 md:p-16 text-center border border-border"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none rounded-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Start processing your PDFs right now. No registration, no waiting.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="xl"
                  variant="hero"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group"
                >
                  Drop Your Files Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
