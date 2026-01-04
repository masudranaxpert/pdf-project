"use client";

import { FileText, FileEdit, FileOutput, FileInput, Shield, Home, PanelLeftClose, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

import { useDashboardState } from '@/hooks/use-dashboard-state';

const navItems = [
  { id: null, title: 'All Tools', icon: Home },
  { id: 'modification', title: 'Modify & Edit', icon: FileEdit },
  { id: 'export', title: 'Export PDF', icon: FileOutput },
  { id: 'import', title: 'Create PDF', icon: FileInput },
  { id: 'security', title: 'Security', icon: Shield },
];

/**
 * AppSidebar Component
 * Navigation sidebar for PDF tool categories with collapse functionality
 */
export function AppSidebar() {
  const { activeCategory, setActiveCategory } = useDashboardState();
  const router = useRouter();
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const handleCategoryClick = (categoryId: string | null) => {
    // Navigate to home if not already there
    if (pathname !== '/') {
      router.push('/');
    }
    setActiveCategory(categoryId);
  };

  return (
    <Sidebar
      className="border-r border-sidebar-border transition-all duration-300"
      collapsible="icon"
    >
      <SidebarHeader className={cn(
        "border-b border-sidebar-border transition-all duration-300",
        isCollapsed ? "p-2" : "p-5"
      )}>
        <div className={cn("flex items-center", isCollapsed ? "justify-center" : "gap-3")}>
          <div className={cn(
            "rounded-xl bg-primary flex items-center justify-center flex-shrink-0 transition-all duration-300",
            isCollapsed ? "w-8 h-8" : "w-10 h-10"
          )}>
            <FileText className={cn("text-primary-foreground transition-all", isCollapsed ? "w-4 h-4" : "w-5 h-5")} />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h1 className="font-semibold text-sidebar-foreground truncate">PDF Tools</h1>
              <p className="text-xs text-muted-foreground truncate">Professional Suite</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className={cn(
        "transition-all duration-300",
        isCollapsed ? "px-0 py-2" : "px-3 py-4"
      )}>
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-3 mb-2">
              Categories
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className={cn(isCollapsed && "items-center gap-2")}>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id ?? 'all'}>
                  <SidebarMenuButton
                    onClick={() => handleCategoryClick(item.id)}
                    tooltip={isCollapsed ? item.title : undefined}
                    isActive={activeCategory === item.id && pathname === '/'}
                    className={cn(
                      "w-full transition-colors",
                      !isCollapsed ? "justify-start gap-3 px-3 py-2.5 rounded-lg" : "justify-center rounded-md"
                    )}
                  >
                    <item.icon className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-4 h-4")} />
                    {!isCollapsed && <span className="truncate">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Collapse Button */}
      <div className={cn(
        "mt-auto border-t border-sidebar-border",
        isCollapsed ? "p-2" : "p-3"
      )}>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className={cn(
            "w-full gap-2 text-muted-foreground hover:text-foreground",
            isCollapsed ? "justify-center px-2" : "justify-start"
          )}
        >
          {isCollapsed ? (
            <PanelLeft className="w-4 h-4" />
          ) : (
            <>
              <PanelLeftClose className="w-4 h-4" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </Sidebar>
  );
}
