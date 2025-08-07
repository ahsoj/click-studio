import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function GetQuoteSection() {
  const benefits = [
    "Free consultation & project estimate",
    "Custom proposal tailored to your needs",
    "Transparent pricing with no hidden fees",
    "Detailed project timeline & milestones",
    "Ongoing support & maintenance options",
  ];

  return (
    <section
      id="quote"
      className="snap-child py-20 bg-brand-dark min-h-screen h-full w-full flex flex-col my-auto justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center md:text-start flex flex-col md:flex-row items-center justify-between gap-4 mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-medium mb-4 md:flex-3/4">
              <span className="text-brand-white">Ready to </span>
              <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Every project is unique, and so is our approach. Let&#39;s discuss
              your vision and create a custom solution that fits your budget and
              goals.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-lime mb-6">
                  What You&#39;ll Get
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-lime mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <div className="bg-brand-lime rounded-xl p-6 border border-indigo-200 mb-6">
                  <div className="text-3xl font-bold text-brand-blue mb-2">
                    Free Quote
                  </div>
                  <p className="text-gray-800 mb-4">
                    Get a detailed proposal within 24 hours
                  </p>
                  <Button
                    asChild
                    className="w-full !px-6 bg-brand-blue/90 hover:bg-brand-blue text-white"
                  >
                    <Link href="/transparent-pricing-calculator">
                      Get Your Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-gray-400">
                  No commitment required. We&#39;ll discuss your project and
                  provide honest recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
