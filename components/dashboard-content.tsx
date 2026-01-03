import { useMemo } from 'react';
import { tools, toolCategories } from '@/data/tools';
import { CategorySection } from './category-section';
import { FileX } from 'lucide-react';

interface DashboardContentProps {
  activeCategory: string | null;
  searchQuery: string;
}

/**
 * DashboardContent Component
 * Main content area displaying filtered tools by category
 */
export function DashboardContent({ activeCategory, searchQuery }: DashboardContentProps) {
  const filteredTools = useMemo(() => {
    let result = tools;

    // Filter by category
    if (activeCategory) {
      result = result.filter((tool) => tool.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.title.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const categoriesToShow = useMemo(() => {
    if (activeCategory) {
      return toolCategories.filter((cat) => cat.id === activeCategory);
    }
    return toolCategories;
  }, [activeCategory]);

  // No results state
  if (filteredTools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <FileX className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-1">No tools found</h3>
        <p className="text-sm text-muted-foreground text-center max-w-sm">
          Try adjusting your search or browse all categories to find what you need.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-10">
      {/* Hero Section - only show when viewing all */}
      {!activeCategory && !searchQuery && (
        <div className="bg-gradient-to-br from-primary/5 via-accent/30 to-background rounded-2xl p-6 md:p-8 border border-border/50">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            PDF Tool Suite
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive collection of tools to modify, convert, and secure your PDF documents.
            Select a tool below to get started.
          </p>
        </div>
      )}

      {/* Category Sections */}
      {categoriesToShow.map((category) => {
        const categoryTools = filteredTools.filter(
          (tool) => tool.category === category.id
        );

        if (categoryTools.length === 0) return null;

        return (
          <CategorySection
            key={category.id}
            category={category}
            tools={categoryTools}
          />
        );
      })}
    </div>
  );
}
