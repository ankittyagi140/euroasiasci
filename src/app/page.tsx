import Link from 'next/link';
import { Carousel } from "../components";
import { FlaskConical, Search, ClipboardList, BadgeCheck, UtensilsCrossed, ShoppingBag, Pill, Target, Lightbulb, Users } from 'lucide-react';

const expertiseAreas = [
  {
    name: 'Testing',
    icon: <FlaskConical className="w-12 h-12 text-white" />,
    description: 'Rigorous testing of products and materials to ensure quality, safety, and compliance with industry standards.',
    bgColor: 'bg-violet-600',
  },
  {
    name: 'Inspection',
    icon: <Search className="w-12 h-12 text-white" />,
    description: 'Precise and thorough inspections to verify the integrity and reliability of your assets, facilities, and processes.',
    bgColor: 'bg-fuchsia-600',
  },
  {
    name: 'Audit',
    icon: <ClipboardList className="w-12 h-12 text-white" />,
    description: 'Independent and unbiased audits to assess and validate your adherence to regulatory requirements and best practices.',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Certification',
    icon: <BadgeCheck className="w-12 h-12 text-white" />,
    description: 'Accredited certification services to demonstrate compliance and instill confidence in your stakeholders.',
    bgColor: 'bg-sky-600',
  },
];

const whyChooseUsItems = [
    {
        icon: <Target className="w-8 h-8 text-violet-600" />,
        title: 'Dedicated to Quality',
        description: 'Our dedication to quality is the cornerstone of our services. We commit to providing our clients with accurate, reliable and reproducible results within the specified timeframes.',
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-fuchsia-600" />,
        title: 'Innovation and Technology',
        description: 'We invest heavily in cutting-edge technology and information systems to maintain the highest standards of quality that is affordable at the same time.',
    },
    {
        icon: <Users className="w-8 h-8 text-pink-600" />,
        title: 'Expert Team',
        description: 'Our team of scientists, engineers, and industry experts bring a wealth of knowledge and experience to every project, ready to support your scientific needs.',
    }
];

const testimonials = [
    {
        quote: "EuroAsia's testing services have been a game-changer for our product development. Their accuracy and timely results are unparalleled.",
        name: 'John Doe',
        company: 'Food & Feed Corp',
    },
    {
        quote: "The team at EuroAsia is incredibly knowledgeable and supportive. Their expert guidance helped us navigate complex regulations with ease.",
        name: 'Jane Smith',
        company: 'Consumer Goods Inc.',
    },
    {
        quote: "We rely on EuroAsia for all our certification needs. Their commitment to quality and integrity is evident in everything they do.",
        name: 'Samuel Green',
        company: 'Pharma Solutions',
    }
];

export default function Home() {
  const slides = expertiseAreas.map((area) => (
    <div key={area.name} className={`relative h-80 sm:h-96 rounded-lg ${area.bgColor} flex flex-col justify-center items-center p-6 text-center`}>
      <div className="mb-4">{area.icon}</div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white">{area.name}</h3>
      <p className="mt-2 text-sm sm:text-base text-white/90 max-w-lg">{area.description}</p>
    </div>
  ));

  const testimonialSlides = testimonials.map((testimonial) => (
    <div key={testimonial.name} className="p-6 text-center">
        <blockquote className="p-6 bg-white rounded-lg shadow-md border-l-4 border-violet-500 max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="text-right">
                <cite className="font-semibold text-slate-800 not-italic">{testimonial.name}</cite>, <span className="text-slate-600">{testimonial.company}</span>
            </footer>
        </blockquote>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-28 sm:py-40 px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ backgroundImage: "linear-gradient(rgba(87, 29, 115, 0.5), rgba(87, 29, 115, 0.5)), url('/hero_image.jpg')" }}
      >
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-lime-400">Elevating Excellence</span>
              <br />
              Through Rigorous Testing
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-lg">
              Your trusted partner in quality assurance
            </p>
            <div className="mt-8">
              <Link href="/about" className="inline-block bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Carousel */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-2">Our Expertise</h2>
          <p className="text-base sm:text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to ensure your products meet the highest standards of quality, safety, and compliance.
          </p>
          <Carousel slides={slides} options={{ loop: true, align: 'start' }} autoplayOptions={{ delay: 3000 }} />
        </div>
      </section>

      {/* Industries We Cater Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Providing specialized testing, inspection, audit, and certification services across key industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Food & Feed */}
            <Link href="/industries/food-and-feed" className="block">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Food & Feed</h3>
                <p className="text-slate-600 text-sm">
                  Ensuring quality and safety in the food and feed industry.
                </p>
              </div>
            </Link>
            
            {/* Consumer Products */}
            <Link href="/industries/consumer-products" className="block">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Consumer Products</h3>
                <p className="text-slate-600 text-sm">
                  Testing textiles, footwear, toys, and more for market compliance.
                </p>
              </div>
            </Link>
            
            {/* Cosmetics & Personal Care */}
            <Link href="/industries/cosmetics-and-personal-care" className="block">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Cosmetics & Personal Care</h3>
                <p className="text-slate-600 text-sm">
                  Quality assurance for cosmetics and personal care items.
                </p>
              </div>
            </Link>

            {/* Pharmaceutical */}
            <Link href="/industries/pharmaceutical" className="block">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pill className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Pharmaceutical</h3>
                <p className="text-slate-600 text-sm">
                  Ensuring safety and efficacy of pharmaceutical products.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Why Choose EuroAsia?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                    Partner with us for unparalleled expertise, innovation, and a commitment to quality.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUsItems.map((item) => (
                    <div key={item.title} className="text-center p-6 bg-slate-50 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    What Our Clients Say
                </h2>
            </div>
            <Carousel slides={testimonialSlides} options={{ loop: true }} />
        </div>
      </section>
    </div>
  );
}
