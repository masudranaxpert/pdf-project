import { Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export default function MergePdf() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ToolWorkspace
        title="Merge PDF"
        description="Combine multiple PDF files into a single document"
        icon={Layers}
        color="blue"
      />
      <Footer />
    </div>
  );
}
