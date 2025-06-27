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
    <header className="bg-gradient-to-r from-violet-200 to-pink-200 text-black ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                
                <h1 className="text-2xl font-bold text-black">CysterTrack</h1>
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
                        ? "text-black font-semibold"
                        : "text-black font-semibold hover:white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/signup">
                <span className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
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
