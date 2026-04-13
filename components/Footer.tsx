import Link from "next/link";
import Image from "next/image";
import { Heart, Instagram, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Our Impact" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Serve With Heart logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Serve With Heart</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Serving Austin&apos;s homeless and underserved communities with compassion,
              dignity, and love. Together, we can make a difference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-orange mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/servewithheartorg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @servewithheartorg
              </a>
              <a
                href="mailto:info@servewithheart.org"
                className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                info@servewithheart.org
              </a>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="h-4 w-4" />
                Austin, TX &amp; surrounding areas
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Serve With Heart. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-white/50 text-sm">
            Made with <Heart className="h-3.5 w-3.5 text-orange fill-orange" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
