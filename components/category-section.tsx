"use client";

import { Tool, ToolCategoryInfo } from '@/types';
import { ToolCard } from './tool-card';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategorySectionProps {
  category: ToolCategoryInfo;
  tools: Tool[];
}

const categoryAccentColors: Record<string, string> = {
  modification: 'text-category-modification',
  export: 'text-category-export',
  import: 'text-category-import',
  security: 'text-category-security',
};

/**
 * CategorySection Component
 * Groups tools by category with a header and responsive grid
 */
export function CategorySection({ category, tools }: CategorySectionProps) {
  const IconComponent = (Icons.icons as Record<string, React.ComponentType<{ className?: string }>>)[category.icon] || Icons.Folder;

  return (
    <section className="animate-fade-in">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={cn(
          "w-9 h-9 rounded-lg flex items-center justify-center bg-muted",
          categoryAccentColors[category.id]
        )}>
          <IconComponent className="w-4.5 h-4.5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {category.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}
      </div>
    </section>
  );
}
