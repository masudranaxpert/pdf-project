import { Tool, ToolCategoryInfo } from '@/types';

export const toolCategories: ToolCategoryInfo[] = [
  {
    id: 'modification',
    title: 'Modify & Edit',
    icon: 'FileEdit',
    description: 'Edit and modify your PDF documents',
  },
  {
    id: 'export',
    title: 'Export PDF',
    icon: 'FileOutput',
    description: 'Convert PDF to other formats',
  },
  {
    id: 'import',
    title: 'Create PDF',
    icon: 'FileInput',
    description: 'Convert files to PDF',
  },
  {
    id: 'security',
    title: 'Security',
    icon: 'Shield',
    description: 'Protect and unlock PDFs',
  },
];

export const tools: Tool[] = [
  // Modification & Editing
  {
    id: 'merge',
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one document with optional table of contents',
    icon: 'Layers',
    category: 'modification',
  },
  {
    id: 'split',
    title: 'Split PDF',
    description: 'Divide a PDF into multiple documents by page or range',
    icon: 'Scissors',
    category: 'modification',
  },
  {
    id: 'compress',
    title: 'Compress PDF',
    description: 'Reduce file size while maintaining quality',
    icon: 'Minimize2',
    category: 'modification',
  },
  {
    id: 'bookmarks',
    title: 'Manage Bookmarks',
    description: 'Add, edit, or delete bookmarks in your PDF',
    icon: 'Bookmark',
    category: 'modification',
  },
  // Export (Convert From PDF)
  {
    id: 'pdf-to-jpg',
    title: 'PDF to JPG',
    description: 'Convert PDF pages to high-quality JPG images',
    icon: 'Image',
    category: 'export',
  },
  {
    id: 'pdf-to-png',
    title: 'PDF to PNG',
    description: 'Convert PDF pages to PNG images with transparency',
    icon: 'ImagePlus',
    category: 'export',
  },
  {
    id: 'pdf-to-html',
    title: 'PDF to HTML',
    description: 'Convert PDF to HTML format for web use',
    icon: 'Code2',
    category: 'export',
  },
  {
    id: 'pdf-to-markdown',
    title: 'PDF to Markdown',
    description: 'Extract text and convert to Markdown format',
    icon: 'FileText',
    category: 'export',
  },
  {
    id: 'pdf-to-json',
    title: 'PDF to JSON',
    description: 'Extract structured data to JSON format',
    icon: 'Braces',
    category: 'export',
  },
  {
    id: 'extract-images',
    title: 'Extract Images',
    description: 'Extract all embedded images from PDF',
    icon: 'Images',
    category: 'export',
  },
  // Import (Convert To PDF)
  {
    id: 'excel-to-pdf',
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF documents',
    icon: 'Table',
    category: 'import',
  },
  {
    id: 'image-to-pdf',
    title: 'Image to PDF',
    description: 'Convert JPG, PNG, or HEIF images to PDF',
    icon: 'FileImage',
    category: 'import',
  },
  {
    id: 'markdown-to-pdf',
    title: 'Markdown to PDF',
    description: 'Convert Markdown files to beautifully formatted PDF',
    icon: 'FileCode',
    category: 'import',
  },
  // Security
  {
    id: 'protect',
    title: 'Password Protect',
    description: 'Add password protection to your PDF',
    icon: 'Lock',
    category: 'security',
  },
  {
    id: 'unlock',
    title: 'Unlock PDF',
    description: 'Remove password protection from PDF',
    icon: 'Unlock',
    category: 'security',
  },
];
