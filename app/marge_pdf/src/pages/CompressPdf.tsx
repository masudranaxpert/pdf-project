import { Minimize2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export default function CompressPdf() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ToolWorkspace
        title="Compress PDF"
        description="Reduce file size while maintaining quality"
        icon={Minimize2}
        color="orange"
      />
      <Footer />
    </div>
  );
}
