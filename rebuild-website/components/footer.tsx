import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 group">
              <div className="bg-orange-500 rounded-lg p-2 group-hover:bg-orange-600 transition-colors">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">PDFBoss</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {
                "Your complete PDF toolkit. Merge, split, compress, and convert PDFs effortlessly with just a few clicks."
              }
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Popular Tools"}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/tools/merge-pdf" className="hover:text-foreground transition-colors">
                  {"Merge PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/split-pdf" className="hover:text-foreground transition-colors">
                  {"Split PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/compress-pdf" className="hover:text-foreground transition-colors">
                  {"Compress PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/pdf-to-word" className="hover:text-foreground transition-colors">
                  {"PDF to Word"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Converters"}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/tools/jpg-to-pdf" className="hover:text-foreground transition-colors">
                  {"JPG to PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/word-to-pdf" className="hover:text-foreground transition-colors">
                  {"Word to PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/excel-to-pdf" className="hover:text-foreground transition-colors">
                  {"Excel to PDF"}
                </a>
              </li>
              <li>
                <a href="/tools/powerpoint-to-pdf" className="hover:text-foreground transition-colors">
                  {"PowerPoint to PDF"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{"Company"}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground transition-colors">
                  {"About Us"}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  {"Contact"}
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  {"Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  {"Terms of Service"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{"© 2025 PDFBoss. All rights reserved. Made with ♥ for PDF lovers."}</p>
        </div>
      </div>
    </footer>
  )
}
