import { Home, Building2, Sparkles, Droplet, Wind, Trash2 } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services tailored to your needs. From regular maintenance to deep cleaning.',
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'Professional office and commercial space cleaning. Keep your workplace spotless and inviting.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning for every corner of your space. Perfect for spring cleaning or move-ins.',
  },
  {
    icon: Droplet,
    title: 'Carpet & Upholstery',
    description: 'Expert carpet and upholstery cleaning using eco-friendly products and advanced techniques.',
  },
  {
    icon: Wind,
    title: 'Window Cleaning',
    description: 'Crystal clear windows inside and out. Professional window cleaning for homes and businesses.',
  },
  {
    icon: Trash2,
    title: 'Post-Construction',
    description: 'Complete post-construction cleanup. Remove dust, debris, and prepare your new space.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border-2 border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg"
              >
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
