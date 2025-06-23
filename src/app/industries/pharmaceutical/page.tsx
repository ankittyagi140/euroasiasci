import { TestTube, Thermometer, ShieldBan, Search, Package } from 'lucide-react';

const services = [
  {
    name: 'Assay Testing',
    icon: TestTube,
    description: `EuroAsia's assay testing services provide accurate and detailed analyses of the active ingredients in pharmaceutical formulations. We help ensure that your products meet label claims and regulatory requirements, providing confidence in the efficacy and quality of your pharmaceuticals.`,
  },
  {
    name: 'Stability Testing',
    icon: Thermometer,
    description: `We conduct stability studies to assess how pharmaceutical products perform over time under various conditions, including temperature and humidity. Our studies ensure that your products maintain their effectiveness and safety throughout their shelf life.`,
  },
  {
    name: 'Anti-Microbial Studies',
    icon: ShieldBan,
    description: `Infection control and anti-microbial efficacy are critical in the pharmaceutical industry. EuroAsia's anti-microbial studies assess the effectiveness of products in controlling or eliminating harmful microorganisms, helping to safeguard public health.`,
  },
  {
    name: 'Impurity Analysis',
    icon: Search,
    description: `We offer comprehensive impurity analysis to identify and quantify impurities and contaminants in pharmaceutical products. Our premier testing ensures that your products meet stringent quality and safety standards.`,
  },
  {
    name: 'Packaging Assessments',
    icon: Package,
    description: `Packaging plays a vital role in pharmaceutical product safety and integrity. Our packaging assessments ensure that your products are stored, transported, and dispensed in packaging that meets regulatory requirements and maintains product stability.`,
  },
];

export default function PharmaceuticalPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Elevate Your Pharmaceutical Products with EuroAsia&apos;s Comprehensive Testing Services</h1>
          <p>
            At EuroAsia, we are dedicated to ensuring the quality, safety, and regulatory compliance of pharmaceutical products. Our extensive range of testing services covers key categories, including assay testing, stability testing, anti-microbial studies, impurity analysis, and packaging assessments. We offer a comprehensive suite of services designed to meet the rigorous demands of the pharmaceutical industry.
          </p>
          <p className="font-semibold text-slate-800">Our Expertise Encompasses a Variety of Pharmaceutical Categories</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 max-w-md md:max-w-none">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">EuroAsia: Your Partner in Pharmaceutical Quality and Compliance</h2>
            <p>With EuroAsia&apos;s pharmaceutical testing services, you gain a dedicated partner committed to delivering accurate and reliable results. Our experienced team of scientists and state-of-the-art laboratories ensure that your pharmaceutical products adhere to the highest quality, safety, and compliance standards.</p>
            <p>Our testing solutions provide insights that help pharmaceutical manufacturers, regulators, and distributors make informed decisions. Whether you are looking to verify compliance, enhance product quality, or address safety concerns, EuroAsia is your trusted partner for pharmaceutical testing.</p>
            <p>We understand the unique requirements of each pharmaceutical subcategory and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering pharmaceutical products that not only meet industry standards but also exceed expectations for efficacy, quality, and safety.</p>
            <p>Choose EuroAsia as your partner in pharmaceutical testing and elevate the quality and safety of your pharmaceutical products in the marketplace. Your success is our priority, and we are here to support your needs every step of the way.</p>
        </div>
      </section>
    </div>
  );
} 