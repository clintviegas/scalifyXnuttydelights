import { MapPin, Phone, Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const socialLinks = [
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/scalifyuae/", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "https://www.facebook.com/scalifyuae", label: "Facebook" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/scalify.uae/", label: "Instagram" },
];

const offices = [
  { city: "Dubai", address: "G01, Boutique Villa 9, Dubai Media City, UAE" },
  { city: "Sweden", address: "Ingebäckslyckan 30, 425 65 Hisings Kärra" },
  { city: "Ireland", address: "Cullentragh Centre, Glenfarne, Co Leitrim" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Expand Your Business
              <br />
              <span className="text-[#f05223]">Not Your Office</span>
            </h2>
          </div>
          <a
            href="https://scalify.ae/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#f05223] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">Scalify</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your end-to-end growth partner. Dream. Build. Scale.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#f05223] hover:bg-[#f05223]/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm text-white/40 uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://scalify.ae/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://scalify.ae/blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://scalify.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://scalify.ae/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-semibold text-sm text-white/40 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 mb-4">
              <a
                href="tel:+971568633879"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#f05223] flex-shrink-0" />
                +971 56 863 3879
              </a>
              <a
                href="mailto:sales@scalify.ae"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#f05223] flex-shrink-0" />
                sales@scalify.ae
              </a>
            </div>
            <div className="space-y-2">
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f05223] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">
                      {office.city}
                    </span>
                    <p className="text-xs text-white/50 leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © Scalify FZE 2026 | All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://scalify.ae/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://scalify.ae/refund-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
