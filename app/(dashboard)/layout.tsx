"use client";

import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardStateProvider } from '@/hooks/use-dashboard-state';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardStateProvider>
            <SidebarProvider>
                <div className="min-h-screen flex w-full bg-background">
                    {/* Sidebar */}
                    <AppSidebar />

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col min-w-0">
                        <DashboardHeader />
                        <div className="flex-1 overflow-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </DashboardStateProvider>
    );
}
