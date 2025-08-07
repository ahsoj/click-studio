import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WorkSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full Development",
      description:
        "Modern online store with integrated payment processing and inventory management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description:
        "Clean and intuitive dashboard for data visualization and user management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Figma", "React", "Charts", "Analytics"],
    },
    {
      title: "Restaurant Website",
      category: "Modern Design",
      description:
        "Appetizing website with online ordering and reservation system.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      tags: ["WordPress", "WooCommerce", "Booking", "Mobile"],
    },
  ];

  return (
    <section
      id="work"
      className="snap-child py-20 bg-brand-dark relative overflow-hidden min-h-screen h-full w-full flex flex-col my-auto justify-center"
    >
      {/* Background tech illustration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-48 h-48 border border-brand-blue rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-brand-lime rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-blue/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center md:text-start flex flex-col md:flex-row gap-x-4 justify-between items-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 md:flex-3/4">
            <span className="text-brand-white">Featured </span>
            <span className="text-gradient">Projects.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we&#39;ve
            helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="bg-gray-900/50 border-gray-700 overflow-hidden py-0 hover:border-brand-blue transition-all duration-300 group hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-brand-lime mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-brand-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-dark transition-all duration-200 rounded-lg font-medium">
            More Projects
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
