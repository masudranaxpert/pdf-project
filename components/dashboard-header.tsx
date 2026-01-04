"use client";

import { Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';

import { useDashboardState } from '@/hooks/use-dashboard-state';

/**
 * DashboardHeader Component
 * Top header with search, theme toggle, and mobile menu trigger
 */
export function DashboardHeader() {
  const { searchQuery, setSearchQuery } = useDashboardState();
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="flex items-center gap-4 px-4 md:px-6 h-16">
        {/* Mobile Menu Trigger */}
        <SidebarTrigger className="md:hidden">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </SidebarTrigger>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Documentation
          </Button>
        </div>
      </div>
    </header>
  );
}
