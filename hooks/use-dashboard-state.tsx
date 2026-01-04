"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardStateContextType {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const DashboardStateContext = createContext<DashboardStateContextType | undefined>(undefined);

export function DashboardStateProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DashboardStateContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DashboardStateContext.Provider>
  );
}

export function useDashboardState() {
  const context = useContext(DashboardStateContext);
  if (context === undefined) {
    throw new Error('useDashboardState must be used within a DashboardStateProvider');
  }
  return context;
}
