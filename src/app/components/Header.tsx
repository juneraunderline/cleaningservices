import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Bumblebee</div>
              <div className="text-sm text-gray-600">Cleaning Services</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-yellow-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-yellow-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-yellow-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
