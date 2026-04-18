import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Bumblebee Cleaning Services transformed my home! Their attention to detail is incredible, and I love that they use eco-friendly products. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Office Manager',
    content: 'We\'ve been using Bumblebee for our office cleaning for over a year. Professional, reliable, and thorough. Our workspace has never looked better.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'I manage several properties and Bumblebee is my go-to for move-out cleanings. They\'re always on time and do an exceptional job every single time.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
