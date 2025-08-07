import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      heading: "Modern design & Development.",
      subheading:
        "We create clean, modern interfaces that make interactions seamless and intuitive. We are focused on usability, clarity, and real results.",
      icon: "🎨",
      route: "/services/web-design",
    },
    {
      heading: "Website SEO",
      subheading:
        "We optimize websites to rank higher and reach the right audience. Every detail is fine-tuned for better visibility and traffic.",
      icon: "⚡",
      route: "/services/web-development",
    },
    // {
    //   heading: "Full development.",
    //   subheading: "Seamless, high-performance web apps tailored to your needs.",
    //   icon: "⚡",
    //   route: "/services/web-development",
    // },
    {
      heading: "Proactive support.",
      subheading:
        "Ongoing maintenance and updates so your site stays fast and secure.",
      icon: "🛡️",
      route: "/services/web-maintenance",
    },
  ];

  return (
    <section
      id="services"
      className="snap-child py-20 bg-brand-dark min-h-screen h-full w-full flex flex-col my-auto justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mb-16 flex flex-col gap-x-4 md:flex-row text-center md:text-start items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 md:flex-3/4">
            <span className="text-brand-white">What We </span>
            <span className="text-gradient">Provide?</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web solutions designed to elevate your business and
            drive meaningful results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-10 flex flex-col justify-between w-full h-full">
                <div>
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-brand-lime mb-4">
                    {service.heading}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.subheading}
                  </p>
                </div>

                <a href={service.route}>
                  <div className="rounded-full group-hover:bg-primary/90 p-2 flex items-center justify-center border border-gray-100 w-14 h-14">
                    <ArrowUpRight size={32} />
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
