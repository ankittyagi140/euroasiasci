import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-slate-600">
            We&apos;re here to help. Contact us with any questions or to get started with our services.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="flex items-start space-x-4 text-slate-600">
                <Mail className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">enquiry.esi@euroasiasci.com</span>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-4 text-slate-600">
                <Phone className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">+91-124-4235415</span>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-4 text-slate-600">
                <MapPin className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">D - 25, Info City - II, Sector - 33, Gurugram, Haryana - 122001</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 text-base sm:text-lg"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 