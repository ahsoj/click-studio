import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About () {

  return (
    <div className="min-h-screen bg-brand-dark text-brand-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border border-brand-blue rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-brand-lime rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-brand-blue rounded-lg rotate-45 animate-float"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About Click</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn more about our mission, vision, and the passionate team behind Click&#39;s success
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Click was born from a simple observation: local businesses in Ethiopia needed modern, 
                high-converting websites to compete in today&#39;s digital landscape. As a new agency, 
                we bring fresh perspectives and cutting-edge techniques to help businesses establish 
                a powerful online presence.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in creating digital experiences that convert visitors into customers, 
                combining beautiful design with powerful functionality. Our focus is on delivering 
                results that matter - increased engagement, better user experience, and ultimately, 
                business growth.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Meet Our Founder</h2>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-brand-dark">E</span>
              </div>
              <CardTitle className="text-2xl text-brand-white">Eyasu</CardTitle>
              <CardDescription className="text-brand-lime font-medium">
                Freelance Web Developer & Content Creator
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                Eyasu is a passionate freelance web developer and content creator who founded Click 
                with a vision to help Ethiopian businesses thrive online. With expertise in modern 
                web technologies and a deep understanding of local market needs, Eyasu brings both 
                technical excellence and business insight to every project.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a content creator, Eyasu understands the importance of engaging digital experiences 
                and applies this knowledge to create websites that not only look great but also 
                convert visitors into customers. His approach combines creativity with data-driven 
                strategies to deliver measurable results.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">2+</div>
                  <div className="text-sm text-gray-400">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-lime">20+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">99.8%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <CardTitle className="text-xl text-brand-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To empower Ethiopian businesses with modern, high-converting websites and digital 
                  solutions that drive growth and success in the digital age. We believe every 
                  business deserves a professional online presence that reflects their values 
                  and attracts their ideal customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">👁️</span>
                </div>
                <CardTitle className="text-xl text-brand-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To become the leading web design agency in Ethiopia, known for creating innovative 
                  digital experiences that transform businesses and contribute to the country&#39;s 
                  digital economy. We envision a future where every local business has the tools 
                  to compete globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for perfection in every project, delivering quality that exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-3">Partnership</h3>
              <p className="text-gray-400">
                We work closely with our clients as partners, ensuring their success is our success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace new technologies and creative solutions to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&#39;s create something amazing for your business
          </p>
          <Button 
            asChild
            className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-3 rounded-lg text-lg transition-all duration-200 hover:scale-105"
          >
            <a href="/transparent-package-calculator" >
                Get Your Free Quote
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};