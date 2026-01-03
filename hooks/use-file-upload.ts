"use client";

import { useState, useCallback } from 'react';

export interface FileUploadState {
  file: File | null;
  preview: string | null;
  isLoading: boolean;
  error: string | null;
  progress: number;
}

export function useFileUpload() {
  const [state, setState] = useState<FileUploadState>({
    file: null,
    preview: null,
    isLoading: false,
    error: null,
    progress: 0,
  });

  const handleFile = useCallback((file: File) => {
    // Validate file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/heif', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/markdown'];

    if (!validTypes.includes(file.type) && !file.name.endsWith('.md')) {
      setState(prev => ({ ...prev, error: 'Invalid file type. Please upload a supported file.' }));
      return;
    }

    // Create preview for images
    let preview: string | null = null;
    if (file.type.startsWith('image/')) {
      preview = URL.createObjectURL(file);
    }

    setState({
      file,
      preview,
      isLoading: false,
      error: null,
      progress: 0,
    });
  }, []);

  const clearFile = useCallback(() => {
    if (state.preview) {
      URL.revokeObjectURL(state.preview);
    }
    setState({
      file: null,
      preview: null,
      isLoading: false,
      error: null,
      progress: 0,
    });
  }, [state.preview]);

  const simulateProcessing = useCallback(() => {
    setState(prev => ({ ...prev, isLoading: true, progress: 0 }));

    const interval = setInterval(() => {
      setState(prev => {
        const newProgress = prev.progress + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          return { ...prev, progress: 100, isLoading: false };
        }
        return { ...prev, progress: newProgress };
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return {
    ...state,
    handleFile,
    clearFile,
    simulateProcessing,
  };
}
