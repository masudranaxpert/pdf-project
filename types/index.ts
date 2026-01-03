export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ToolCategory;
}

export type ToolCategory = 
  | 'modification'
  | 'export'
  | 'import'
  | 'security';

export interface ToolCategoryInfo {
  id: ToolCategory;
  title: string;
  icon: string;
  description: string;
}
