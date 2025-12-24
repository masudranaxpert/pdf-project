import { motion } from "framer-motion";

interface DocumentPulseProps {
  progress?: number;
  status?: string;
}

export function DocumentPulse({ progress = 0, status = "Processing..." }: DocumentPulseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card p-8 md:p-12 max-w-md mx-auto"
    >
      {/* Document Skeleton with Scanning Effect */}
      <div className="relative w-full aspect-[3/4] bg-secondary rounded-2xl overflow-hidden mb-6">
        {/* Document Lines (Skeleton) */}
        <div className="absolute inset-4 flex flex-col gap-3">
          <div className="h-6 bg-muted rounded-lg w-3/4" />
          <div className="h-4 bg-muted rounded-lg w-full" />
          <div className="h-4 bg-muted rounded-lg w-5/6" />
          <div className="h-4 bg-muted rounded-lg w-full" />
          <div className="h-4 bg-muted rounded-lg w-2/3" />
          <div className="mt-4 h-20 bg-muted rounded-lg w-full" />
          <div className="h-4 bg-muted rounded-lg w-full" />
          <div className="h-4 bg-muted rounded-lg w-4/5" />
          <div className="h-4 bg-muted rounded-lg w-full" />
          <div className="h-4 bg-muted rounded-lg w-3/4" />
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)",
            }}
            animate={{
              top: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Glow Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">{status}</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Status Message */}
      <p className="text-center text-sm text-muted-foreground">
        Your files are being processed locally. Nothing is uploaded.
      </p>
    </motion.div>
  );
}
