import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Ready for a cleaner space? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none">
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Carpet & Upholstery</option>
                  <option>Window Cleaning</option>
                  <option>Post-Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Request Free Quote
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">info@bumblebeecleaning.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">123 Main Street<br/>Suite 100<br/>Your City, ST 12345</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Business Hours</div>
                  <div className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br/>
                    Saturday: 9:00 AM - 4:00 PM<br/>
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <h4 className="text-lg mb-2 text-gray-900">Emergency Cleaning?</h4>
              <p className="text-gray-600 mb-4">We offer same-day service for urgent cleaning needs. Call us now!</p>
              <a href="tel:5551234567" className="text-yellow-600 hover:text-yellow-700">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
