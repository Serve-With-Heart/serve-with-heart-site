"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Our Impact" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
  }`;

  const linkClass = `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    scrolled
      ? "text-navy hover:bg-navy/5 hover:text-orange"
      : "text-white/90 hover:bg-white/10 hover:text-white"
  }`;

  const brandClass = `text-xl font-bold transition-colors ${
    scrolled ? "text-navy" : "text-white"
  }`;

  const mobileToggleClass = `md:hidden p-2 rounded-lg transition-colors ${
    scrolled ? "text-navy" : "text-white"
  }`;

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Serve With Heart logo"
              width={44}
              height={44}
              className="rounded-full transition-transform group-hover:scale-110"
            />
            <span className={brandClass}>Serve With Heart</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="ml-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-dark hover:shadow-lg"
            >
              Donate Now
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={mobileToggleClass}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy font-medium hover:bg-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-white hover:bg-orange-dark transition-colors"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
