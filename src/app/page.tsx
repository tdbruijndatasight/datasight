
import Header from '@/components/layout/header';
import HomeSection from '@/components/sections/home-section';
import CustomersSection from '@/components/sections/customers-section';
import ServicesSection from '@/components/sections/services-section';
import PublicationsSection from '@/components/sections/publications-section';
import ProjectInquirySection from '@/components/sections/project-inquiry-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HomeSection />
        <CustomersSection />
        <ServicesSection />
        <PublicationsSection />
        <ProjectInquirySection />
        <ContactSection />
      </main>
    </>
  );
}
