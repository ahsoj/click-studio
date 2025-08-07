import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Wrench, Clock, RefreshCw, Headphones } from "lucide-react";
import Link from "next/link";

export default function WebSupport() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Keep your website updated with the latest security patches and improvements"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring to ensure your website is always running smoothly"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Content Updates",
      description: "Regular content updates and feature additions as your business grows"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Responsive technical support whenever you need assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-primary mr-4"
              >
                <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
              </Button>
              <span className="text-2xl font-bold text-gradient">Click</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-medium mb-6">
            <span className="text-gradient">Web Support</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Proactive maintenance and reliable support
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Keep your website running at peak performance with our comprehensive support services. 
            We handle the technical details so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-white">Support </span>
              <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-brand-lime mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Need Reliable Web Support?
          </h2>
          <p className="text-xl text-brand-dark mb-8 max-w-2xl mx-auto">
            Let us take care of your website maintenance so you can focus on what matters most.
          </p>
          <Button
            asChild
            className="bg-brand-dark hover:bg-gray-800 text-brand-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <a href="/transparent-pricing-calculator">
                Get Support
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};
