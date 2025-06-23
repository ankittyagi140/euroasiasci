import { Beaker, Dna, FileCheck, FlaskConical, Microscope, ShieldCheck, Wheat, UtensilsCrossed } from 'lucide-react';

const services = [
  {
    name: 'Chemical Analysis',
    icon: FlaskConical,
    description: 'We analyze food and feed samples for a variety of chemical components, including nutrients, additives, contaminants, and residues. Our detailed chemical analysis helps ensure that your products are free from harmful substances and meet regulatory requirements.',
  },
  {
    name: 'Microbiological Testing',
    icon: Microscope,
    description: 'Our microbiological testing services focus on detecting and quantifying bacteria, yeast, molds, and pathogens in food and feed products. We help safeguard against foodborne illnesses and product spoilage.',
  },
  {
    name: 'Allergen Testing',
    icon: ShieldCheck,
    description: 'We offer specialized allergen testing to identify the presence of common allergens in food and feed products, helping you meet labeling requirements and protect consumers with allergies.',
  },
  {
    name: 'Nutritional Labeling',
    icon: FileCheck,
    description: 'Ensure your product labels accurately represent their nutritional content with our nutritional labeling services. We provide accurate data for calories, macronutrients, vitamins, and minerals.',
  },
  {
    name: 'Quality and Authenticity Testing',
    icon: Beaker,
    description: 'We verify the quality and authenticity of your food and feed products, including testing for adulteration, mislabeling, and product integrity.',
  },
  {
    name: 'GMO Testing',
    icon: Dna,
    description: 'If your products contain genetically modified organisms, our GMO testing services can confirm compliance with labeling regulations and consumer expectations.',
  },
  {
    name: 'Feed Analysis',
    icon: Wheat,
    description: 'Our feed testing services help ensure that animal and livestock feed meets nutritional standards and safety guidelines, promoting healthy livestock and high-quality animal products.',
  },
  {
    name: 'Regulatory Compliance',
    icon: UtensilsCrossed,
    description: 'We stay up-to-date with the latest regulations and standards in the food and feed industry, offering testing services that help you meet compliance requirements.',
  },
];

export default function FoodAndFeedPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Discovering Quality Through Food and Feed Testing</h1>
          <p className="text-center">
            At EuroAsia, we understand that the quality and safety of food and feed products are paramount. That&apos;s why we offer a comprehensive suite of food and feed testing services to ensure that the products you consume or distribute meet the highest standards of quality, compliance, and safety.
          </p>
          <p className="text-center">
            Our state-of-the-art laboratories and experienced scientists are dedicated to providing you with accurate and reliable testing results. We specialize in a wide range of testing services, including:
          </p>
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
          <p>
            EuroAsia is your trusted partner in food and feed testing. Our commitment to accuracy, reliability, and speed means that you can have confidence in the safety and quality of your products. We work with food manufacturers, distributors, retailers, and regulatory agencies to ensure that food and feed products meet or exceed industry standards. Our testing services are designed to meet your specific needs and provide you with the insights necessary to make informed decisions about your products. Whether you&apos;re looking to verify the quality, safety, or compliance of your food and feed products, EuroAsia is here to help you achieve excellence in the industry.
          </p>
        </div>
      </section>
    </div>
  );
} 