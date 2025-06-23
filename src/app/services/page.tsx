import { FlaskConical, Search, FileBadge, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import { ElementType } from 'react';

const ServiceCard = ({ title, icon: Icon, description, links }: { title: string, icon: ElementType, description: string, links: { href: string, text: string }[] }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col h-full">
        <div className="p-6 flex justify-center items-center bg-violet-50 h-48">
            <Icon className="w-20 h-20 text-violet-600" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{title}</h3>
            <p className="text-slate-600 mb-6 flex-grow text-center">{description}</p>
            <div className="mt-auto">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">Related Industries</h4>
                <div className="flex flex-wrap justify-center gap-2">
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className="text-sm bg-slate-200 text-slate-700 px-3 py-1 rounded-full hover:bg-violet-200 hover:text-violet-800 transition-colors">
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function ServicesPage() {
    const services = [
        {
            title: "Testing Services",
            icon: FlaskConical,
            description: "Our advanced testing services ensure that your products and processes meet the highest quality and national and international standards. From material testing to product performance evaluation, we provide reproducible and reliable results to help you make informed decisions.",
            links: [
                { href: '/industries/food-and-feed', text: 'Food & Feed' },
                { href: '/industries/consumer-products', text: 'Consumer Products' },
                { href: '/industries/cosmetics-and-personal-care', text: 'Cosmetics & Personal Care' },
                { href: '/industries/pharmaceutical', text: 'Pharmaceutical' },
            ]
        },
        {
            title: "Inspection Services",
            icon: Search,
            description: "Our Inspection Services meticulously identify defects that can pose risks to consumers, impact product performance, and diminish customer satisfaction. We conduct meticulous examinations to ensure your products meet the highest quality standards, providing assurance to both businesses and consumers.",
            links: [
                { href: '/industries/food-and-feed', text: 'Food & Feed' },
                { href: '/industries/consumer-products', text: 'Consumer Products' },
                { href: '/industries/cosmetics-and-personal-care', text: 'Cosmetics & Personal Care' },
                { href: '/industries/pharmaceutical', text: 'Pharmaceutical' },
            ]
        },
        {
            title: "Certification Services",
            icon: FileBadge,
            description: "Our Certification Services encompass a rigorous verification process for production houses. We ensure adherence to national and international regulations. Our assessments evaluate working conditions, environmental impact, and overall compliance.",
            links: [
                { href: '/industries/food-and-feed', text: 'Food & Feed' },
                { href: '/industries/consumer-products', text: 'Consumer Products' },
            ]
        },
        {
            title: "Audit Services",
            icon: ClipboardCheck,
            description: "Our audit services provide a systematic and independent examination of your processes and systems. We help you identify areas for improvement, ensure compliance with standards, and enhance your operational efficiency and risk management.",
            links: [
                { href: '/industries/food-and-feed', text: 'Food & Feed' },
                { href: '/industries/consumer-products', text: 'Consumer Products' },
                { href: '/industries/cosmetics-and-personal-care', text: 'Cosmetics & Personal Care' },
                { href: '/industries/pharmaceutical', text: 'Pharmaceutical' },
            ]
        }
    ];

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Core Services</h1>
                    <p className="text-lg sm:text-xl text-slate-600">
                        We provide a comprehensive suite of services to ensure your products meet the highest standards of quality, safety, and compliance.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 