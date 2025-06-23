import { SprayCan, Sparkles, Droplets, Beaker, Brush, Sun } from 'lucide-react';

const services = [
  {
    name: 'Haircare',
    icon: Droplets,
    description: `EuroAsia's haircare testing services include evaluations for product efficacy, safety, and compliance. We assess factors such as product stability, ingredient analysis, and performance to ensure that your haircare products meet consumer expectations.`,
  },
  {
    name: 'Skincare',
    icon: Sun,
    description: `We provide a range of tests for skincare products, ensuring that they are safe, effective, and compliant with industry regulations. Our assessments cover aspects such as skin compatibility, ingredient analysis, and stability.`,
  },
  {
    name: 'Home Care Products',
    icon: Beaker,
    description: `From detergents to cleaning agents, our testing services ensure that home care products meet safety, environmental, and performance standards. We assess factors such as chemical content, biodegradability, and efficacy.`,
  },
  {
    name: 'Makeup',
    icon: Brush,
    description: `Safety is paramount in the makeup industry. EuroAsia conducts rigorous tests for makeup products, including assessments for ingredient safety, allergens, and performance to guarantee that your makeup products are both beautiful and safe.`,
  },
  {
    name: 'Perfumes',
    icon: SprayCan,
    description: `Our testing for perfumes includes fragrance composition, longevity, and safety. We ensure that your perfumes meet the highest standards for quality, performance, and compliance.`,
  },
  {
    name: 'Toiletries',
    icon: Sparkles,
    description: `Toiletry products play a significant role in personal hygiene and well-being. We provide tests to ensure that your toiletries are safe, effective, and compliant with industry regulations. Our assessments cover aspects such as skin compatibility, ingredient analysis, and stability.`,
  },
];

export default function CosmeticsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Elevate Your Cosmetics with EuroAsia&apos;s Comprehensive Testing Services</h1>
          <p>
            EuroAsia is your trusted partner in ensuring the safety, quality, and compliance of cosmetics across a diverse range of categories. We offer a comprehensive suite of testing services tailored to the unique needs of the cosmetics industry. Our expertise covers haircare, skincare, home care products, makeup, perfumes, and toiletries, ensuring that your products meet the highest industry standards.
          </p>
          <p className="font-semibold text-slate-800">Our Expertise Encompasses a Variety of Cosmetics Categories</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
                <div className="p-6 flex justify-center items-center bg-violet-50 h-48">
                  <service.icon className="w-16 h-16 sm:w-20 sm:h-20 text-violet-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concluding Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">EuroAsia: Your Partner in Quality and Compliance</h2>
            <p>With EuroAsia&apos;s cosmetics testing services, you gain a dedicated partner committed to delivering accurate and reliable results. Our experienced team of scientists and state-of-the-art laboratories ensure that your cosmetic products adhere to the highest quality, safety, and compliance standards.</p>
            <p>Our testing solutions provide insights that help manufacturers, retailers, and regulatory agencies make informed decisions. Whether you are looking to verify compliance, enhance product quality, or address safety concerns, EuroAsia is your go-to partner for cosmetics testing.</p>
            <p>We understand the unique requirements of each cosmetics subcategory and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering cosmetics that not only meet industry standards but also exceed consumer expectations for safety, quality, and performance.</p>
            <p>Choose EuroAsia as your partner in cosmetics testing and elevate the quality and safety of your cosmetics in the marketplace. Your success is our priority, and we are here to support your needs every step of the way.</p>
        </div>
      </section>
    </div>
  );
} 