import { Link } from "react-router-dom";
import { FileText, Github, Twitter } from "lucide-react";

const footerLinks = {
  tools: [
    { name: "Merge PDF", path: "/merge-pdf" },
    { name: "Split PDF", path: "/split-pdf" },
    { name: "Compress PDF", path: "/compress-pdf" },
    { name: "PDF to HTML", path: "/pdf-to-html" },
  ],
  company: [
    { name: "About", path: "#" },
    { name: "Privacy", path: "#" },
    { name: "Terms", path: "#" },
    { name: "Contact", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">DocFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Fast, private, and powerful PDF tools that run entirely in your browser.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get notified about new features and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 text-sm bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DocFlow. All files processed locally. No data leaves your device.</p>
        </div>
      </div>
    </footer>
  );
}
