import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-child py-20 bg-brand-dark relative overflow-hidden min-h-screen h-full w-full justify-center my-auto flex flex-col"
    >
      <div>
        {/* Background illustration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-brand-blue rounded-lg rotate-12"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-brand-lime rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-brand-blue rounded-lg rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              <span className="text-gradient">
                We build websites that work as hard as you do
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Click Web Solution, we understand that your website is more
              than just a digital business card, it&#39;s your most powerful
              sales tool. We combine stunning design with conversion-focused
              strategy to create websites that not only captivate your audience
              but drive real business results.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-brand-dark">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Fresh Perspectives
              </h3>
              <p className="text-gray-400">
                New agency with innovative approaches
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-brand-dark">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Client Satisfaction
              </h3>
              <p className="text-gray-400">Focused on exceeding expectations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-brand-dark">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-white mb-2">
                Modern Solutions
              </h3>
              <p className="text-gray-400">Cutting-edge web technologies</p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center"
          >
            <Button
              asChild
              size={"lg"}
              className="bg-transparent border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-dark px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <a href="/more-about-click">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
