"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  currentPath?: string;
}

export default function MobileNav({ currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/about", label: "ABOUT" },
    { href: "/events", label: "EVENTS" },
    { href: "/contact", label: "CONTACT US" },
    { href: "/gallery", label: "LA GALERIE" },
    { href: "/chefs", label: "CHEFS" },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      {/* Sticky Desktop + Mobile Navigation */}
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-6 lg:py-2 transition-transform duration-300"
        style={{
          transform:
            scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Bar: Logo + Hamburger (Mobile), Centered Logo (Desktop) */}
          <div className="flex items-center justify-between lg:justify-center mb-4 lg:mb-6">
            {/* Logo */}
            <Link href="/" onClick={closeMenu}>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <img src="/usa.png" alt="Logo" width="160px" />
              </div>
            </Link>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex space-x-6 xl:space-x-8 text-sm font-medium tracking-wide">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-gray-900 ${
                      isActive(item.href)
                        ? "text-gray-900 border-b border-gray-900 pb-1"
                        : "text-gray-700"
                    } ${item.label === "LA GALERIE" ? "italic" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="px-4 sm:px-6 py-6 lg:py-8">
            <div className="max-w-7xl mx-auto">
              {/* Logo */}
              <div className="flex justify-center mb-4 lg:mb-6"></div>

              {/* Restaurant Name */}
              <div className="text-center mb-6 lg:mb-8">
                <Link href="/" onClick={closeMenu}>
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-light tracking-[0.3em] text-gray-800">
                    US- NEPAL GASTRONOMY 2025
                  </h1>
                </Link>
              </div>

              {/* Close Button */}
              <div className="flex justify-center mb-8 lg:mb-12">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </Button>
              </div>

              {/* Mobile Navigation Menu */}
              <nav className="flex justify-center">
                <ul className="space-y-6 lg:space-y-8 text-center">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block text-base sm:text-lg font-medium tracking-wide transition-colors py-2 ${
                          isActive(item.href)
                            ? "text-gray-900 border-b border-gray-900 pb-1"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
