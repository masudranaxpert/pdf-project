import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, ArrowLeft, Download, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { UniversalActionZone } from "./UniversalActionZone";
import { DocumentPulse } from "./DocumentPulse";
import { Button } from "./ui/button";

interface ToolWorkspaceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green" | "orange" | "purple";
}

type WorkspaceState = "upload" | "processing" | "complete";

const colorMap = {
  blue: "bg-primary/10 text-primary",
  green: "bg-emerald-500/10 text-emerald-500",
  orange: "bg-orange-500/10 text-orange-500",
  purple: "bg-violet-500/10 text-violet-500",
};

export function ToolWorkspace({ title, description, icon: Icon, color }: ToolWorkspaceProps) {
  const [state, setState] = useState<WorkspaceState>("upload");
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const startProcessing = () => {
    if (files.length === 0) return;
    
    setState("processing");
    setProgress(0);

    // Simulate processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setState("complete");
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);
  };

  const reset = () => {
    setState("upload");
    setProgress(0);
    setFiles([]);
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all tools
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <motion.div
              layoutId={`tool-icon-${title}`}
              className={`w-16 h-16 rounded-2xl ${colorMap[color]} flex items-center justify-center`}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
            <div>
              <motion.h1
                layoutId={`tool-title-${title}`}
                className="text-3xl md:text-4xl font-bold"
              >
                {title}
              </motion.h1>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
        </motion.div>

        {/* Workspace Content */}
        <AnimatePresence mode="wait">
          {state === "upload" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <UniversalActionZone onFilesAdded={handleFilesAdded} compact />
              
              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center"
                >
                  <Button
                    onClick={startProcessing}
                    size="lg"
                    className="px-8"
                  >
                    Process {files.length} file{files.length > 1 ? "s" : ""}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

          {state === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <DocumentPulse progress={progress} status="Processing your PDF..." />
            </motion.div>
          )}

          {state === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.5 }}
                >
                  <Download className="w-10 h-10 text-emerald-500" />
                </motion.div>
              </motion.div>

              <h2 className="text-2xl font-bold mb-2">Processing Complete!</h2>
              <p className="text-muted-foreground mb-8">
                Your file is ready to download.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg" onClick={reset}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Process Another
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
