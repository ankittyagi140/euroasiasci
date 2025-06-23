import { Armchair, Footprints, Layers, Package, Paintbrush, ToyBrick } from 'lucide-react';

const services = [
  {
    name: 'Textiles',
    icon: Layers,
    description: `EuroAsia's textile testing services encompass fabric composition analysis, colorfastness, durability, and flammability testing. We help you ensure that textiles meet comfort, performance, and safety criteria.`,
  },
  {
    name: 'Leather and Footwear',
    icon: Footprints,
    description: `Our testing for leather and footwear includes evaluations for quality, safety, and durability. From leather composition to shoe sole integrity, our tests cover all aspects of these products.`,
  },
  {
    name: 'Toys',
    icon: ToyBrick,
    description: `Safety is paramount in the toy industry. EuroAsia conducts rigorous tests to ensure toys comply with international safety standards, including checks for small parts, chemical content, and mechanical hazards.`,
  },
  {
    name: 'Home Furnishing',
    icon: Armchair,
    description: `From bedding and curtains to upholstery and carpets, we assess the safety and durability of home furnishing products. Our testing ensures they meet regulatory requirements and record consumer expectations.`,
  },
  {
    name: 'Decorating Items',
    icon: Paintbrush,
    description: `We provide a variety of tests for decorating items, such as paints, coatings, and wall coverings. Our analysis includes checks for lead content, durability, and compliance with environmental regulations.`,
  },
  {
    name: 'Packaging Materials',
    icon: Package,
    description: `Packaging plays a crucial role in product protection and sustainability. Our testing services evaluate packaging materials for strength, barrier properties, and environmental impact, helping you make informed decisions for product packaging.`,
  },
];

const NestedList = ({ title, items, isSub = false }: { title: string, items: (string | { title: string, items: string[] })[], isSub?: boolean }) => (
  <div className={!isSub ? "mt-4" : ""}>
    <h4 className="font-bold text-slate-800">{title}</h4>
    <ul className="list-disc list-inside space-y-2 pl-6 mt-2">
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' ? item : <NestedList title={item.title} items={item.items} isSub={true} />}
        </li>
      ))}
    </ul>
  </div>
);

export default function ConsumerProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Elevate Quality Assurance with EuroAsia&apos;s Consumer Product Testing Services</h1>
          <p>
            At EuroAsia, we are committed to ensuring the quality and compliance of consumer products across a wide spectrum of categories. With a focus on textiles, leather and footwear, toys, home furnishing, decorating items, and packaging materials, we offer an array of comprehensive testing services designed to help businesses and manufacturers deliver products that meet the highest industry standards.
          </p>
          <p>
            We understand the unique requirements of each product category and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering consumer products that not only meet industry standards but also exceed consumer expectations for safety, quality, and performance. Our Expertise Covers a Range of Consumer Product Categories.
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

      {/* Detailed Expertise Section */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-base sm:prose-lg text-slate-600">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Expertise Covers a Range of Consumer Product Categories</h2>
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mt-6">1. Textile & Leather</h3>
            <p>{`EuroAsia's Textile and Leather industry services helps retailers, brands and manufacturers uphold quality standards while meeting regulatory standards results in consumer confidence and brand loyalty. Our Textile and Leather testing covers primarily:`}</p>
            <NestedList title="Materials & Components" items={["Raw materials", "Yarns & Fabric", "Chemicals and finished products", "Zippers, buttons, cards"]} />
            <NestedList title="Apparel & textiles" items={["Adult & children apparel", "Sportswear, sleepwear, uniforms, and workwear", "Baby nursery and maternity clothing", "Fashion accessories, gloves, scarves, jewelery", "Costumes"]} />
            <NestedList title="Leather" items={["Leather", "Leather products, bags, belts, wallets..."]} />
            <NestedList title="Footwear" items={["Mens, womens, childrens footwear", "Sports shoes, sneakers, slippers", "Boots, shoes, sandals"]} />
            <NestedList title="Home textiles" items={["Upholstery, tablelinens, blankets, cushions, pillows", "Bed linens, sheets, Curtains", "Bathroom linen, towels", "Home and kitchen, tableclothes, napkins, tea towels, mittens...", "Carpets, rugs etc."]} />
            <p className="mt-4">{`Our service covers both, local and international regulations such as those in the European Union (General Product Safety Directive - GPSD), the U.S. (Consumer Product Safety Improvement Act - CPSIA), California's Proposition 65, Canada Consumer Product Safety Act (CCPSA), China's GB standards for almost all consumer products.`}</p>
            <p>{`In addition to Regulatory and performance testing parameters like fibre composition, shrinkage, wash-care recommendation, Flammability, Restricted substances, we offer special testing service which includes, Cotton Richness testing, antifungal and antimicrobial studies following AATCC & ASTM, Water absorption,and UPF Factor, polymer identification through FTIR etc.`}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mt-6">2. Hardgoods</h3>
            <p>Hardgoods testing service includes toys, decorative and packaging material & food contact material.</p>
            <NestedList title="Toy Testing Services" items={[
              "Physical and mechanical testing, aimed to prevent hazards and risks such as small parts, sharp points and edges, cords, etc.",
              "EU Toy Safety Directive 2009/48/EC (EN 71-1 - mechanical and physical properties of toys, EN 71-8 - activity toys, domestic use)",
              "ASTM F963 – safety of toys",
              "ISO 8124-1 - mechanical and physical properties of toys"
            ]} />
            <NestedList title="Chemical testing" items={[
              { title: "EU Toy Safety Directive 2009/48/EC", items: [
                "EN 71-3 – migration of certain elements",
                "EN 71-4 – experimental sets for chemistry and related activities",
                "EN 71-5 – chemical toys (sets), other than experimental sets",
                "EN 71-7 – finger paints",
                "EN 71-12 – determination of N-Nitrosamines and N-nitrosatable substances",
              ]},
              "ASTM F963 - safety of toys",
              "ISO 8124 - safety of toys",
              "REACH and other international chemical regulation testing"
            ]} />
            <NestedList title="Flammability" items={[
              "EN 71-2 – flammability",
              "ASTM F963 – the safety of toys",
              "CPSC 16CFR - flammability",
              "ISO 8124-2 – flammability"
            ]} />
            <NestedList title="Electrical and electronics safety and compliance is, among other" items={[
              "EC 62115",
              "ANSI/UL 696"
            ]} />
            <p className="mt-4">{`Our wide toy testing service offer displayed above covers several kinds of toys (dolls, plush, anakees, metal and plastic toys, stationary, paints, cosmetic, containers and dispensers, electric, radio controlled and electronic toys and games) and products for babies and toddlers (childrens and baby apparel and footwear, cots, baskets, cradles, strollers).`}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mt-6">3. Packaging and Food contact material testing</h3>
            <p>{`EuroAsia's specialized testing services for food contact and packaging material includes overall / leachable contents, heavy metals, REACH, NIAS testing covering Indian and international standards.Control/verification of composition can be defined for single articles or for complex combinations of raw materials used across a wide product portfolio, to avoid repetitively testing the same material present in multiple products.`}</p>
          </div>
          
          <div className="mt-8 border-t pt-8">
            <p>{`With EuroAsia's consumer product testing services, you gain a trusted partner committed to delivering accurate and reliable results. Our experienced team of scientists and state-of-the-art laboratories ensure that your products adhere to the highest quality, safety, and compliance standards.`}</p>
            <p>{`Our testing solutions provide insights that help manufacturers, retailers, and regulatory agencies make informed decisions. Whether you are looking to verify compliance, enhance product quality, or address safety concerns, EuroAsia is your go-to partner for consumer product testing.`}</p>
            <p>{`We understand the unique requirements of each product category and tailor our testing protocols to meet your specific needs. Our commitment is to assist you in delivering consumer products that not only meet industry standards but also exceed consumer expectations for safety, quality, and performance.`}</p>
            <p>{`Choose EuroAsia as your partner in consumer product testing and elevate the quality and safety of your products in the marketplace.`}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 