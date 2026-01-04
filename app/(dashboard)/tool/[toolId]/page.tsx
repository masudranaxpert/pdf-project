"use client";

import { useParams, useRouter } from 'next/navigation';
import { tools, toolCategories } from '@/data/tools';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDropZone } from '@/components/file-drop-zone';
import { ProcessingStatus } from '@/components/processing-status';
import { useFileUpload } from '@/hooks/use-file-upload';
import { ArrowLeft, Download, Settings2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const categoryColors: Record<string, string> = {
    modification: 'bg-category-modification/10 text-category-modification',
    export: 'bg-category-export/10 text-category-export',
    import: 'bg-category-import/10 text-category-import',
    security: 'bg-category-security/10 text-category-security',
};

/**
 * ToolPage Component
 * Individual page for each PDF tool with options and file processing
 * Refactored to work within the persistent dashboard layout
 */
export default function ToolPage() {
    const params = useParams<{ toolId: string }>();
    const router = useRouter();
    const { file, preview, isLoading, progress, error, handleFile, clearFile, simulateProcessing } = useFileUpload();

    // Tool-specific options state
    const [options, setOptions] = useState({
        quality: 'high',
        generateToc: false,
        pageRange: '',
        password: '',
        outputFormat: 'jpg',
    });

    const tool = tools.find(t => t.id === params.toolId);
    const category = toolCategories.find(c => c.id === tool?.category);

    if (!tool) {
        return (
            <div className="flex h-full items-center justify-center p-8 text-center">
                <div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">Tool not found</h1>
                    <Button onClick={() => router.push('/')} variant="outline">
                        Go back to dashboard
                    </Button>
                </div>
            </div>
        );
    }

    const IconComponent = (Icons.icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] || Icons.File;

    const handleProcess = () => {
        if (file) {
            simulateProcessing();
        }
    };

    const isComplete = progress >= 100;

    // Tool-specific options based on category/tool
    const renderOptions = () => {
        switch (tool.id) {
            case 'merge':
                return (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="toc" className="text-sm">Generate Table of Contents</Label>
                            <Switch
                                id="toc"
                                checked={options.generateToc}
                                onCheckedChange={(checked) => setOptions(prev => ({ ...prev, generateToc: checked }))}
                            />
                        </div>
                    </div>
                );
            case 'split':
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="range" className="text-sm">Page Range</Label>
                            <Input
                                id="range"
                                placeholder="e.g., 1-5, 8, 12-15"
                                value={options.pageRange}
                                onChange={(e) => setOptions(prev => ({ ...prev, pageRange: e.target.value }))}
                            />
                            <p className="text-xs text-muted-foreground">Leave empty to split all pages</p>
                        </div>
                    </div>
                );
            case 'compress':
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="quality" className="text-sm">Compression Quality</Label>
                            <Select
                                value={options.quality}
                                onValueChange={(value) => setOptions(prev => ({ ...prev, quality: value }))}
                            >
                                <SelectTrigger id="quality">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low (Smallest file)</SelectItem>
                                    <SelectItem value="medium">Medium (Balanced)</SelectItem>
                                    <SelectItem value="high">High (Best quality)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                );
            case 'pdf-to-jpg':
            case 'pdf-to-png':
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="format" className="text-sm">Output Format</Label>
                            <Select
                                value={options.outputFormat}
                                onValueChange={(value) => setOptions(prev => ({ ...prev, outputFormat: value }))}
                            >
                                <SelectTrigger id="format">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="jpg">JPG</SelectItem>
                                    <SelectItem value="png">PNG</SelectItem>
                                    <SelectItem value="webp">WebP</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="img-quality" className="text-sm">Image Quality</Label>
                            <Select
                                value={options.quality}
                                onValueChange={(value) => setOptions(prev => ({ ...prev, quality: value }))}
                            >
                                <SelectTrigger id="img-quality">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">72 DPI</SelectItem>
                                    <SelectItem value="medium">150 DPI</SelectItem>
                                    <SelectItem value="high">300 DPI</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                );
            case 'protect':
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={options.password}
                                onChange={(e) => setOptions(prev => ({ ...prev, password: e.target.value }))}
                            />
                        </div>
                    </div>
                );
            case 'unlock':
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="unlock-password" className="text-sm">Current Password</Label>
                            <Input
                                id="unlock-password"
                                type="password"
                                placeholder="Enter current password"
                                value={options.password}
                                onChange={(e) => setOptions(prev => ({ ...prev, password: e.target.value }))}
                            />
                        </div>
                    </div>
                );
            default:
                return (
                    <p className="text-sm text-muted-foreground">
                        No additional options available for this tool.
                    </p>
                );
        }
    };

    return (
        <div className="p-4 md:p-6 pb-20">
            {/* Tool Header - Content Specific */}
            <div className="flex items-center gap-4 mb-8">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push('/')}
                    className="h-9 w-9"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        categoryColors[tool.category]
                    )}>
                        <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-foreground">{tool.title}</h1>
                        <p className="text-xs text-muted-foreground">{category?.title}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Main Upload Area */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Upload File</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FileDropZone
                                    onFileSelect={handleFile}
                                    file={file}
                                    preview={preview}
                                    onClear={clearFile}
                                />
                                {error && (
                                    <p className="text-sm text-destructive mt-3">{error}</p>
                                )}
                            </CardContent>
                        </Card>

                        {/* Processing Status */}
                        {(isLoading || progress > 0) && (
                            <ProcessingStatus isLoading={isLoading} progress={progress} />
                        )}

                        {/* Actions */}
                        <div className="flex gap-3">
                            <Button
                                onClick={handleProcess}
                                disabled={!file || isLoading}
                                className="flex-1 h-12"
                            >
                                {isLoading ? 'Processing...' : `Process ${tool.title}`}
                            </Button>
                            {isComplete && (
                                <Button variant="outline" className="h-12 gap-2">
                                    <Download className="w-4 h-4" />
                                    Download
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Options Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <Settings2 className="w-4 h-4" />
                                    Options
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {renderOptions()}
                            </CardContent>
                        </Card>

                        {/* Tool Description */}
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-medium text-foreground mb-2">About this tool</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {tool.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
