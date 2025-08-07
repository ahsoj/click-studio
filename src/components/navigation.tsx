"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { FlowButton } from "./ui/flow-button";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
    });
    AOS.refresh(); // Refresh AOS after component mounts
    console.log("AOS Init!");

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent border-none backdrop-blur-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Click
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#about"
                className="text-gray-300 hover:text-brand-lime transition-colors duration-200"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-gray-300 hover:text-brand-lime transition-colors duration-200"
              >
                Services
              </Link>

              {/* Services Dropdown */}
              {/* <div className="relative group">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="text-gray-300 hover:text-brand-lime transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link
                        href="/services/web-design"
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-brand-lime hover:bg-gray-700 transition-colors duration-200"
                      >
                        Web Design
                      </Link>
                      <Link
                        href="/services/web-design"
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-brand-lime hover:bg-gray-700 transition-colors duration-200"
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/services/web-design"
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-brand-lime hover:bg-gray-700 transition-colors duration-200"
                      >
                        Web Support
                      </Link>
                      <Link
                        href="/services/web-design"
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-brand-lime hover:bg-gray-700 transition-colors duration-200"
                      >
                        Social Media Marketing{" "}
                        <span className="text-xs text-brand-blue">
                          (Coming Soon)
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div> */}

              <Link
                href="/#process"
                className="text-gray-300 hover:text-brand-lime transition-colors duration-200"
              >
                Process
              </Link>
              <Link
                href="/#work"
                className="text-gray-300 hover:text-brand-lime transition-colors duration-200"
              >
                Work
              </Link>
              <Link
                href="/#faq"
                className="text-gray-300 hover:text-brand-lime transition-colors duration-200"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <FlowButton text="Let's Discuss" href="/schedule-a-call" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-dark border-t border-gray-800">
              <Link
                href="/#about"
                className="block text-gray-300 hover:text-brand-lime px-3 py-2 w-full text-left"
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-brand-lime px-3 py-2 text-left"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/services/web-design"
                      className="block w-full text-left px-3 py-2 text-gray-400 hover:text-brand-lime text-sm"
                    >
                      Web Design
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="block w-full text-left px-3 py-2 text-gray-400 hover:text-brand-lime text-sm"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/web-maintenance"
                      className="block w-full text-left px-3 py-2 text-gray-400 hover:text-brand-lime text-sm"
                    >
                      Web Support
                    </Link>
                    <Link
                      href="/services/smma-soon"
                      className="block w-full text-left px-3 py-2 text-gray-400 hover:text-brand-lime text-sm"
                    >
                      Social Media Marketing{" "}
                      <span className="text-xs text-brand-blue">
                        (Coming Soon)
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#process"
                className="block text-gray-300 hover:text-brand-lime px-3 py-2 w-full text-left"
              >
                Process
              </Link>
              <Link
                href="/#work"
                className="block text-gray-300 hover:text-brand-lime px-3 py-2 w-full text-left"
              >
                Work
              </Link>
              <Link
                href="/#faq"
                className="block text-gray-300 hover:text-brand-lime px-3 py-2 w-full text-left"
              >
                FAQ
              </Link>
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/80 text-white mx-3 my-2 w-[calc(100%-1.5rem)]"
              >
                <Link href="/#quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
