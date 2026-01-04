"use client";

import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardContent } from '@/components/dashboard-content';

/**
 * Index Page
 * Main dashboard for PDF tools
 */
export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
                {/* Sidebar */}
                <AppSidebar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Main Content */}
                <main className="flex-1 flex flex-col min-w-0">
                    <DashboardHeader
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />
                    <div className="flex-1 overflow-auto">
                        <DashboardContent
                            activeCategory={activeCategory}
                            searchQuery={searchQuery}
                        />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
