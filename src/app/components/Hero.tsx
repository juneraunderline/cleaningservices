import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference with Bumblebee Cleaning Services. We bring sparkle and shine to your home or office with eco-friendly solutions and meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-center"
              >
                Get Free Quote
              </a>
              <a
                href="#services"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648475233704-e327166174fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzUzMzgyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clean modern kitchen"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
