import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, X, CheckCircle2 } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

interface UniversalActionZoneProps {
  onFilesAdded?: (files: File[]) => void;
  maxFiles?: number;
  compact?: boolean;
}

export function UniversalActionZone({ 
  onFilesAdded, 
  maxFiles = 10,
  compact = false 
}: UniversalActionZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type === "application/pdf"
    );
    
    if (files.length > 0) {
      const newFiles: UploadedFile[] = files.slice(0, maxFiles).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: formatFileSize(file.size),
      }));
      
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, maxFiles));
      onFilesAdded?.(files);
    }
  }, [maxFiles, onFilesAdded]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    
    if (files.length > 0) {
      const newFiles: UploadedFile[] = files.slice(0, maxFiles).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: formatFileSize(file.size),
      }));
      
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, maxFiles));
      onFilesAdded?.(files);
    }
  }, [maxFiles, onFilesAdded]);

  const removeFile = useCallback((id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  }, []);

  return (
    <div className="w-full">
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        animate={{
          scale: isDragging ? 1.02 : 1,
          borderColor: isDragging ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)",
        }}
        className={`action-zone ${isDragging ? "action-zone-active" : ""} ${
          compact ? "p-6 md:p-8" : "p-8 md:p-12"
        } cursor-pointer transition-all duration-300`}
      >
        <input
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="file-upload"
        />
        
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            animate={{ 
              y: isDragging ? -10 : 0,
              scale: isDragging ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`${compact ? "w-14 h-14" : "w-20 h-20"} rounded-3xl bg-primary/10 flex items-center justify-center mb-4`}
          >
            <Upload className={`${compact ? "w-7 h-7" : "w-10 h-10"} text-primary`} />
          </motion.div>
          
          <h3 className={`${compact ? "text-lg" : "text-xl md:text-2xl"} font-bold mb-2`}>
            {isDragging ? "Drop your PDFs here" : "Drop PDFs anywhere"}
          </h3>
          
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            Drag and drop your PDF files here, or{" "}
            <label htmlFor="file-upload" className="text-primary font-medium cursor-pointer hover:underline">
              browse
            </label>{" "}
            to select files
          </p>
          
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Up to {maxFiles} files • 100% private • No upload required</span>
          </div>
        </div>
      </motion.div>

      {/* Uploaded Files List */}
      <AnimatePresence>
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {uploadedFiles.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-sm truncate max-w-[200px] md:max-w-[300px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{file.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
