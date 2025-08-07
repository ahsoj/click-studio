import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url(/678892d67628c8a8e25ccada_Hero-BG.webp)] bg-brand-dark bg-cover">
      {/* <img
        src="/circle-background.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover animate-pulse blur-2xl"
      /> */}
      {/* Enhanced background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-brand-blue rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-brand-lime rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-brand-blue rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-brand-lime rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 border border-brand-blue/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-brand-lime/40 rounded-lg rotate-12"></div>
      </div>

      {/* Floating elements illustration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-1/3 text-brand-blue text-6xl animate-float">
          💻
        </div>
        <div className="absolute top-2/3 right-1/4 text-brand-lime text-4xl animate-float-delayed">
          🚀
        </div>
        <div className="absolute bottom-1/4 left-1/5 text-brand-blue text-5xl animate-float">
          ⚡
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
        <div className="animate-fade-in">
          <h1 className="logo-text font-medium mb-6 leading-none">
            <span className="text-brand-white">WE Create </span>
            <span className="text-gradient text-nowrap">High-Converting</span>
            <br />
            <span className="text-brand-white">Websites & Telegram Bots </span>
            <br className="hidden md:block" />
            <span className="text-brand-white">for </span>
            <span className="text-brand-lime">Local Businesses.</span>
          </h1>

          <p className="text-base md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-normal">
            Transform your digital presence with cutting-edge web solutions that
            drive results. We combine modern design with powerful functionality
            to help your business thrive online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              asChild
              className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              <Link href="/transparent-pricing-calculator">
                Get Free Quote <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
            <Button
              variant="outline-glow"
              size="lg"
              className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-dark px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">click.et</p>
            <button className="text-brand-lime hover:text-brand-lime/80 transition-colors duration-200 animate-bounce">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
