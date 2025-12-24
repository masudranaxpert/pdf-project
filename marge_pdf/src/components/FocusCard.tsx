import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface FocusCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: "blue" | "green" | "orange" | "purple";
  index?: number;
}

const colorMap = {
  blue: {
    bg: "bg-primary/10",
    icon: "text-primary",
    hover: "group-hover:bg-primary/20",
    gradient: "from-primary/20 to-primary/5",
  },
  green: {
    bg: "bg-emerald-500/10",
    icon: "text-emerald-500",
    hover: "group-hover:bg-emerald-500/20",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  orange: {
    bg: "bg-orange-500/10",
    icon: "text-orange-500",
    hover: "group-hover:bg-orange-500/20",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  purple: {
    bg: "bg-violet-500/10",
    icon: "text-violet-500",
    hover: "group-hover:bg-violet-500/20",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
};

export function FocusCard({ title, description, icon: Icon, path, color, index = 0 }: FocusCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link to={path} className="block group">
        <motion.div
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          className="focus-card p-8 md:p-10 h-full relative overflow-hidden"
        >
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-6 transition-all duration-300 shadow-lg`}
            >
              <Icon className={`w-8 h-8 ${colors.icon}`} />
            </motion.div>

            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span>Get started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
