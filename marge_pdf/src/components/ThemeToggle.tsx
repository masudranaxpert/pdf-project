import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-secondary border border-border p-1 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <Moon className="w-3.5 h-3.5 text-primary" />
      </div>

      {/* Toggle Circle */}
      <motion.div
        className="w-6 h-6 rounded-full bg-card shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 22 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {theme === "dark" ? (
            <Moon className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
