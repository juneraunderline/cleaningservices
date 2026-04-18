import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  'Experienced & Trained Professionals',
  'Eco-Friendly Cleaning Products',
  'Flexible Scheduling',
  '100% Satisfaction Guarantee',
  'Fully Insured & Bonded',
  'Competitive Pricing',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1648475236583-2e25a6cbf3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzUzMzgyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Clean modern living room"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Why Choose Bumblebee?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Bumblebee Cleaning Services, we're committed to delivering exceptional cleaning results that exceed your expectations. Our team of dedicated professionals uses the latest techniques and eco-friendly products to ensure your space is not just clean, but healthy and refreshed.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Schedule a Cleaning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
