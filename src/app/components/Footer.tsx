import { Sparkles, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <div className="font-bold text-lg">Bumblebee</div>
                <div className="text-sm text-gray-400">Cleaning Services</div>
              </div>
            </div>
            <p className="text-gray-400">
              Professional cleaning services you can trust. Making your space sparkle since 2010.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Carpet & Upholstery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Bumblebee Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
