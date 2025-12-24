import { motion } from "framer-motion";
import { Upload, Settings, Download, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Your Files",
    description: "Drag and drop your PDF files directly into the browser. Everything stays on your device.",
    icon: Upload,
    color: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    title: "Configure Options",
    description: "Choose your settings like page order, compression level, or output format.",
    icon: Settings,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    number: "03",
    title: "Download Result",
    description: "Get your processed PDF instantly. Fast, secure, and completely private.",
    icon: Download,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export function StepsSection() {
  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-sm font-medium rounded-full mb-4 text-muted-foreground">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Three Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Process your PDFs in seconds. No account required, no file uploads to servers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 text-center relative z-10">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  Step {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg`}
                >
                  <step.icon className="w-10 h-10" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Checkmark */}
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
