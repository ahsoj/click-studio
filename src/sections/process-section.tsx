export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery Phase",
      description:
        "Learn your brand, goals, and audience to define project direction.",
    },
    {
      number: "02",
      title: "Design Concept",
      description: "Create design concepts based on insights from discovery.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Build the site and test for performance and compatibility.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Launch the site and offer ongoing support for success.",
    },
  ];

  return (
    <section
      id="process"
      className="snap-child py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-screen h-full w-full flex flex-col my-auto justify-center"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-brand-lime/5"></div>

      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-medium mb-6">
            <span className="text-brand-white">Our Process in Just a </span>
            <br className="hidden sm:block" />
            <span className="text-gradient">Simple 4-Steps</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A proven methodology that ensures your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              key={index}
              className="relative group text-center"
            >
              {/* Large stylized number */}
              <div className="relative mb-8">
                <div className="text-8xl md:text-9xl lg:text-[120px] font-bold bg-gradient-to-br from-brand-blue to-brand-lime bg-clip-text text-transparent opacity-90 leading-none">
                  {step.number}
                </div>

                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-0">
                    <div className="w-12 xl:w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-lime opacity-30"></div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-brand-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Mobile connecting line */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-brand-blue to-brand-lime opacity-30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
