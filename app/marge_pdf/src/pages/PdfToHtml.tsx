import { Code2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export default function PdfToHtml() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ToolWorkspace
        title="PDF to HTML"
        description="Convert your PDF documents to clean, semantic HTML"
        icon={Code2}
        color="purple"
      />
      <Footer />
    </div>
  );
}
