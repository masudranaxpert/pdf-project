"use client";

import { Tool, ToolCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface ToolCardProps {
  tool: Tool;
}

const categoryColors: Record<ToolCategory, string> = {
  modification: 'bg-category-modification/10 text-category-modification',
  export: 'bg-category-export/10 text-category-export',
  import: 'bg-category-import/10 text-category-import',
  security: 'bg-category-security/10 text-category-security',
};

const categoryBorderColors: Record<ToolCategory, string> = {
  modification: 'group-hover:border-category-modification/30',
  export: 'group-hover:border-category-export/30',
  import: 'group-hover:border-category-import/30',
  security: 'group-hover:border-category-security/30',
};

/**
 * ToolCard Component
 * Displays a PDF tool with icon, title, description, and action button
 */
export function ToolCard({ tool }: ToolCardProps) {
  const router = useRouter();
  const IconComponent = (Icons.icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] || Icons.File;

  const handleClick = () => {
    router.push(`/tool/${tool.id}`);
  };

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-200 ease-out",
        "border border-border/60 shadow-card hover:shadow-card-hover",
        "hover:-translate-y-0.5",
        categoryBorderColors[tool.category]
      )}
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div className="flex flex-col gap-4">
          {/* Icon */}
          <div className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200",
            "group-hover:scale-105",
            categoryColors[tool.category]
          )}>
            <IconComponent className="w-5 h-5" />
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            <h3 className="font-semibold text-card-foreground leading-tight">
              {tool.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {tool.description}
            </p>
          </div>

          {/* Action Button */}
          <Button
            variant="secondary"
            size="sm"
            className="w-full mt-1 gap-2 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
