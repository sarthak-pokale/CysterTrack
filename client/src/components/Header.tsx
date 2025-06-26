import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Symptom Test", path: "/symptom-test" },
    { label: "Period Tracker", path: "/period-tracker" },
    { label: "Forum", path: "/forum" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                  <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1"/>
                  <path d="M16 6c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <circle cx="20" cy="12" r="2" fill="currentColor"/>
                  <circle cx="16" cy="20" r="2" fill="currentColor"/>
                  <path d="M10 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <h1 className="text-2xl font-bold text-primary">CysterTrack</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-neutral-600 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/signup">
                <span className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-neutral-600 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/signup">
                <span
                  className="block bg-primary text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
