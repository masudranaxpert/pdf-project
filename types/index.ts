export interface UploadedFile {
    id: string;
    name: string;
    size: number;
    type: string;
    file?: File;
}

export interface ProcessingStatus {
    isProcessing: boolean;
    progress: number;
    message: string;
}

export interface CompressionLevel {
    id: string;
    label: string;
    description: string;
    quality: string;
}

export const COMPRESSION_LEVELS: CompressionLevel[] = [
    {
        id: "low",
        label: "Low Compression",
        description: "Best quality, larger file size",
        quality: "high",
    },
    {
        id: "medium",
        label: "Medium Compression",
        description: "Balanced quality and size",
        quality: "medium",
    },
    {
        id: "high",
        label: "High Compression",
        description: "Smaller file size, lower quality",
        quality: "low",
    },
];
