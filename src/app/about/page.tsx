import { Building, Users, FlaskConical, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">About EuroAsia</h1>
          <p className="text-lg sm:text-xl text-slate-600">
            Pioneering excellence in scientific testing and compliance across global industries.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Story</h2>
            <p>
              Founded on the principles of precision and integrity, EuroAsia has grown to become a leading independent market player in scientific services. We specialize in an extensive range of areas, including Textiles, Footwear, Toys, Food, Environmental, Pharmaceutical, and Cosmetic product testing. Our journey is one of unwavering commitment to delivering top-quality services, accurate results, and expert guidance to our clients worldwide.
            </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="prose prose-base sm:prose-lg text-slate-600">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p>
              To be the most trusted partner for quality assurance, providing comprehensive scientific services that ensure safety, compliance, and excellence. We are committed to empowering our clients with the data and insights they need to succeed in a complex regulatory landscape.
            </p>
          </div>
          <div className="prose prose-base sm:prose-lg text-slate-600">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Vision</h2>
            <p>
              To be the global leader in scientific services, recognized for our integrity, innovation, and unwavering commitment to our clients&apos; success. We aim to foster a safer, more transparent marketplace for consumers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-violet-100 p-4 rounded-full mb-4">
                <Building className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Integrity</h3>
              <p className="text-slate-600 text-sm sm:text-base">We uphold the highest standards of integrity in all of our actions.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-violet-100 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Customer Commitment</h3>
              <p className="text-slate-600 text-sm sm:text-base">We develop relationships that make a positive difference in our customers&apos; lives.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-violet-100 p-4 rounded-full mb-4">
                <FlaskConical className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Excellence</h3>
              <p className="text-slate-600 text-sm sm:text-base">We provide outstanding service and unsurpassed quality that, together, deliver premium value to our clients.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              EuroAsia is defined by our highly qualified and dedicated staff. Our team of scientists, engineers, and industry experts are the cornerstone of our success, bringing a wealth of knowledge and experience to every project. They are always ready to support your scientific needs and help you navigate the complexities of global regulations.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image src="/our-team.jpg" alt="Our Team" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose EuroAsia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Dedicated to Quality</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Our dedication to quality is the cornerstone of our services. We commit to providing our clients with accurate, reliable and reproducible results within the specified timeframes. Our data is instrumental in helping our clients meet increasingly stringent quality and safety standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-fuchsia-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Innovation and Unmatched Support</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  We invest heavily in cutting-edge technology and information systems to maintain the highest standards of quality that is affordable at the same time. Few testing laboratories can match the level of expertise and commitment that have made EuroAsia a leader in our fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-violet-600 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-base sm:text-lg text-violet-100 mb-8">
            Contact us today to learn more about our services and how we can help you achieve your quality and compliance goals.
          </p>
          <Link href="/contact" className="bg-white text-violet-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 