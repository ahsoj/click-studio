export default function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-r from-brand-blue to-brand-lime">
      <div className="mt-16 pt-8 border-t border-brand-dark/20">
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
      </div>
    </footer>
  );
}
