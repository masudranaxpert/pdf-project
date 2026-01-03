import { cn } from '@/lib/utils';
import { CheckCircle, Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  isLoading: boolean;
  progress: number;
  className?: string;
}

/**
 * ProcessingStatus Component
 * Shows processing progress with animated bar
 */
export function ProcessingStatus({ isLoading, progress, className }: ProcessingStatusProps) {
  const isComplete = progress >= 100;

  if (!isLoading && progress === 0) return null;

  return (
    <div className={cn("bg-card border border-border rounded-xl p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isComplete ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          )}
          <span className="font-medium text-foreground">
            {isComplete ? 'Processing Complete!' : 'Processing...'}
          </span>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            isComplete ? "bg-green-500" : "bg-primary"
          )}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {isComplete && (
        <p className="text-sm text-muted-foreground mt-3">
          Your file has been processed successfully. You can download it below.
        </p>
      )}
    </div>
  );
}
