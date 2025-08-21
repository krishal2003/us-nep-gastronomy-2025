"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    { href: "/", label: "EVENTS" },
    { href: "/about", label: "ABOUT" },
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
      {/* Sticky Navbar */}
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-4 transition-transform duration-300"
        style={{
          transform:
            scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" onClick={closeMenu}>
            <img src="/usa.png" alt="Logo" className="h-23 w-23" />
          </Link>

          {/* Desktop Navigation on Right */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#5b2e3a] ${
                  isActive(item.href)
                    ? "text-[#6a3341] border-b-2 border-[#6a3341] pb-1"
                    : "text-[#6a3341]"
                } ${item.label === "LA GALERIE" ? "italic" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="px-4 sm:px-6 py-6">
            <div className="max-w-7xl mx-auto">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
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
                <ul className="space-y-6 text-center">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block text-base sm:text-lg font-medium tracking-wide transition-colors py-2 ${
                          isActive(item.href)
                            ? "text-gray-900 border-b border-gray-900 pb-1"
                            : "text-gray-700 hover:text-gray-900"
                        } ${item.label === "LA GALERIE" ? "italic" : ""}`}
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
