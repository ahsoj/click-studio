import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Palette, Monitor, Smartphone, Users } from "lucide-react";
import Link from "next/link";

export default function WebDesign() {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Visual Identity",
      description:
        "Unique designs that reflect your brand personality and values",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Beautiful layouts that work perfectly on all devices and screen sizes",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Approach",
      description:
        "Optimized for mobile users with fast loading and intuitive navigation",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience Focus",
      description:
        "Designs that prioritize user journey and conversion optimization",
    },
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
          <h1 className="text-5xl md:text-7xl  font-medium mb-6">
            <span className="text-gradient">Web Design</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Eye-catching, user-centric designs
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We create stunning web designs that not only look beautiful but also
            convert visitors into customers. Our design process focuses on your
            brand identity, user experience, and business goals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-white">What We </span>
              <span className="text-gradient">Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-brand-lime mb-6">{feature.icon}</div>
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
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-xl text-brand-dark mb-8 max-w-2xl mx-auto">
            Let&#39;s create a stunning website that represents your brand
            perfectly.
          </p>
          <Button
            asChild
            className="bg-brand-dark hover:bg-gray-800 text-brand-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <a href="/transparent-pricing-calculator">Get Started</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
