import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Palette,
  RefreshCw,
  Code,
  Search,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Website Design",
      size_top: "md:top-[7rem]",
      description:
        "Our Website Design service focuses on creating visually stunning, user-friendly websites tailored to your brand and business goals. We combine modern aesthetics with intuitive navigation to ensure your visitors have an engaging experience. Whether you need a simple informational site or a dynamic platform, we craft responsive designs that look great on all devices and drive results.",
      benefits: ["Stand out from competitors", "Enhance brand recognition"],
      route: "/services/web-design",
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "Web Redesign",
      size_top: "md:top-[14rem]",
      description:
        "Is your current website outdated or not performing as expected? Our Web Redesign service revitalizes your online presence by updating the design, improving usability, and integrating the latest technologies. We analyze your existing site's strengths and weaknesses to deliver a fresh, modern look that enhances user engagement and aligns with your evolving business needs.",
      benefits: [
        "Smooth communication process",
        "High-quality, polished results",
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Web Development",
      size_top: "md:top-[22rem]",
      description:
        "When off-the-shelf solutions don't fit, our Custom Web Development service builds tailored websites and web applications designed specifically for your unique requirements. From complex databases to interactive features and seamless integrations, we develop scalable, secure, and high-performing digital solutions that empower your business to grow.",
      benefits: [
        "Increase conversion rates",
        "Drive long-term business success",
      ],
      route: "/services/web-development",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      size_top: "",
      description:
        "Getting found online is crucial. Our SEO Optimization service improves your website's visibility on search engines like Google by optimizing content, site structure, and technical elements. We use proven strategies to increase organic traffic, improve rankings, and attract quality leads, helping your business achieve sustainable growth in the digital marketplace.",
      benefits: ["Boost organic traffic", "Improve search rankings"],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to design a new website?",
      answer:
        "Typically, a basic website design takes 2 to 4 weeks. More complex projects may require 6 to 12 weeks depending on features and client feedback.",
    },
    {
      question:
        "Can you redesign my existing website without losing my current content?",
      answer:
        "Yes, we carefully migrate and preserve your existing content while improving the design and functionality to ensure a smooth transition.",
    },
    {
      question: "What kind of custom features can you develop?",
      answer:
        "We can develop a wide range of custom features such as booking systems, e-commerce platforms, membership portals, APIs integration, and more based on your specific needs.",
    },
    {
      question: "How soon can I see results from SEO optimization?",
      answer:
        "SEO is a long-term strategy; typically, noticeable improvements take 3 to 6 months, depending on competition and the current state of your website.",
    },
    {
      question:
        "Do you provide training to manage the website after development?",
      answer:
        "Yes, we provide training and documentation to help you or your team easily manage and update your website.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
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
              <span className="text-2xl font-medium text-gradient">Click</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-medium mb-6">
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive web solutions designed to elevate your business and
            drive meaningful results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn("md:sticky z-10", service.size_top)}
              >
                <Card className="py-0 bg-brand-dark border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                      {/* Icon Section */}
                      <div className="bg-secondary flex items-center justify-center p-12 lg:p-16">
                        <div className="text-secondary-foreground">
                          {service.icon}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex col-span-2 flex-col justify-center bg-[url(/678892d67628c8a8e25ccada_Hero-BG.webp)] bg-cover">
                        <div className="mb-6">
                          <span className="text-4xl lg:text-5xl font-medium text-muted-foreground">
                            ({String(index + 1).padStart(2, "0")})
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-6">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {service.route && (
                          <Button
                            asChild
                            className="self-start bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                          >
                            <a href={service.route}>Learn More</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              <span className="text-foreground">Frequently Asked </span>
              <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A: {faq.answer}
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
          <h2 className="text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let&#39;s discuss your project and create something amazing
            together.
          </p>
          <Button
            asChild
            className="bg-background hover:bg-background/90 text-foreground px-8 py-3"
          >
            <a href="'/transparent-package-calculator'">Get Quote</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
