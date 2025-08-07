import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="snap-child py-20 bg-gradient-to-r from-brand-blue to-brand-lime">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
          Whatever your web needs, we&#39;re here to help. Let&#39;s create
          something amazing together.
        </p>

        <Button className="bg-brand-dark hover:bg-brand-dark/80 text-brand-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 font-medium">
          Let&#39;s Talk
        </Button>
      </div>

      <footer className="mt-16 pt-8 border-t border-brand-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-brand-dark">Click</span>
              <p className="text-brand-dark/70 mt-1">click.et</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="text-brand-dark/70">
                © 2024 Click Studio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
