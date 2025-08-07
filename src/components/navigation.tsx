"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlowButton } from "./ui/flow-button";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import { cn } from "@/lib/utils";

const mobile_navLinks = [
  {
    path: "/#about",
    label: "About",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/#process",
    label: "Process",
  },
  {
    path: "/#work",
    label: "Work",
  },
  {
    path: "/#faq",
    label: "FAQ",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOpenAndClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
    });
    AOS.refresh(); // Refresh AOS after component mounts
    // console.log("AOS Init!");

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
        "fixed top-0 left-0 right-0 z-40 transition-all",
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
            <FlowButton text="Let&#39;s Discuss" href="/schedule-a-call" />
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
              {mobile_navLinks.map(({ label, path }, idx) => (
                <Link
                  key={idx}
                  href={path}
                  onClick={toggleOpenAndClose}
                  className="block text-gray-300 hover:text-brand-lime px-3 py-2 w-full text-left"
                >
                  {label}
                </Link>
              ))}
              <Button
                asChild
                onClick={toggleOpenAndClose}
                className="bg-brand-blue hover:bg-brand-blue/80 text-white mx-3 my-2 w-[calc(100%-1.5rem)]"
              >
                <Link href="/schedule-a-call">Let&#39;s Discuss</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
