import NotifyMeForm from "@/components/notify-me-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Bell } from "lucide-react";
import Link from "next/link";

export default function SocialMediaMarketing () {

  const services = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Instagram Marketing",
      description: "Content creation, story management, and engagement strategies"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Facebook Advertising",
      description: "Targeted ads, page management, and community building"
    },
    // {
    //   icon: <Bell className="w-8 h-8" />,
    //   title: "Twitter/X Growth",
    //   description: "Tweet strategies, engagement, and follower growth"
    // },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "LinkedIn Marketing",
      description: "Professional networking and B2B content strategies"
    },
    // {
    //   icon: <Bell className="w-8 h-8" />,
    //   title: "YouTube Marketing",
    //   description: "Video content strategy and channel optimization"
    // },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Social Media Strategy",
      description: "Comprehensive social media planning and analytics"
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
                variant="ghost"
                asChild
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
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background illustration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-brand-blue rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-brand-lime rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-brand-blue rounded-lg rotate-45 animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-medium mb-6">
            <span className="text-gradient">Social Media Marketing</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Coming Soon
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We&#39;re expanding our services to include comprehensive social media marketing solutions. 
            Get ready for professional social media management, content creation, and digital marketing 
            strategies that will elevate your brand&#39;s online presence.
          </p>

          {/* Notify Me Form */}
          <NotifyMeForm />
        </div>
      </section>

      {/* Coming Services */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-white">What&#39;s </span>
              <span className="text-gradient">Coming</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&#39;re preparing a comprehensive suite of social media marketing services to help your business thrive online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-brand-lime mb-6 group-hover:scale-110 transition-transform duration-200 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-white">Why Choose </span>
              <span className="text-gradient">Click</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-dark">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">Data-Driven Strategies</h3>
              <p className="text-gray-400">Analytics-based approach for maximum ROI</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-dark">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">Creative Content</h3>
              <p className="text-gray-400">Engaging visuals and compelling copy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-dark">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">Growth Focused</h3>
              <p className="text-gray-400">Strategies designed to scale your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-brand-dark mb-8 max-w-2xl mx-auto">
            Join our waiting list and be the first to access our social media marketing services when they launch.
          </p>
          <Button
            asChild
            className="bg-brand-dark hover:bg-gray-800 text-brand-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Link href="/#services">
                Explore Our Current Services
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};