import { Scissors } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolWorkspace } from "@/components/ToolWorkspace";

export default function SplitPdf() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ToolWorkspace
        title="Split PDF"
        description="Extract pages or split your PDF into separate documents"
        icon={Scissors}
        color="green"
      />
      <Footer />
    </div>
  );
}
