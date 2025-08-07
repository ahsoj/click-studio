import CalendlyEmbedComponent from "@/components/calendly-embed";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

const ScheduleCallPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description:
        "Choose from available time slots that work for your schedule",
    },
    {
      icon: Clock,
      title: "30-60 Min Sessions",
      description:
        "Dedicated time to discuss your project requirements in detail",
    },
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description:
        "No cost strategy session to explore how we can help your business",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Connect directly with our experienced web development specialists",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Pick Your Time",
      description:
        "Select from our available time slots using the calendar below",
    },
    {
      step: "02",
      title: "Share Your Vision",
      description: "Tell us about your project goals and business requirements",
    },
    {
      step: "03",
      title: "Get Your Roadmap",
      description: "Receive a custom strategy and actionable next steps",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Schedule a<span className="gradient-text"> Strategy Call</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your digital presence? Book a free consultation
              with our experts to discuss your project and discover how we can
              help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link href="/schedule-a-call/#calendar">
                  Book Your Call Now
                  <CalendarDays className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-glow" size="lg">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Schedule a Call with{" "}
              <span className="gradient-text">Click Studio</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized insights and actionable strategies for your
              digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 backdrop-blur-sm hover:glow-effect transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple <span className="gradient-text">3-Step Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From booking to strategy, we make it easy to get started on your
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-accent mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section id="calendar" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Perfect Time</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Select a time that works best for you. All times are shown in your
              local timezone.
            </p>
          </div>

          {/* Calendly Widget Container */}
          <CalendlyEmbedComponent url="https://calendly.com/dev4josh/30min" />

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Can&#39;t find a suitable time? No problem!
            </p>
            <Button variant="outline-glow" asChild>
              <Link href="mailto:dev4josh@gmail.com">Contact Us Directly</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleCallPage;
