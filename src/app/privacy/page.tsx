
import { SITE_CONFIG } from '@/constants/site';
import Header from '@/components/layout/header'; // Assuming you want the main header
import ContactSection from '@/components/sections/contact-section'; // For consistency with the footer styling if needed, or remove if too much

export default function PrivacyPage() {
  // A simple way to get current year for copyright or last updated if needed dynamically
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-20">
        <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border">
          <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy for DataSight Portfolio</h1>
          <p className="text-sm text-muted-foreground mb-6"><strong>Last Updated: April 1, 2024</strong></p>
          
          <div className="space-y-4 text-foreground/90">
            <p>DataSight Portfolio ("we", "us", or "our"), operated by Tom de Bruijn, is committed to protecting your privacy. This Privacy Policy explains how we handle your information.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>General Usage Data:</strong> We may collect anonymous information about how you use our website (e.g., IP addresses, cookies, pages visited). This helps us improve our website and services. This data does not personally identify you.
              </li>
              <li>
                <strong>Contact Information:</strong> If you contact us via our inquiry form or directly, we will collect information you provide, such as your name, email address, phone number (optional), and your message.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To improve our website and tailor it to user needs.</li>
              <li>Cookies may be used for website functionality and to remember your preferences. You can disable cookies in your browser settings, though this may affect your website experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Information Sharing</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not sell or rent your personal information to third parties.</li>
              <li>We may share your information with government or regulatory bodies if legally required to do so as part of an investigation.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Third-Party Links</h2>
            <p>Our website may contain links to other websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to read their privacy policies.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Security</h2>
            <p>We take reasonable steps to protect your personal information, but no internet transmission is completely secure.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent hover:underline">{SITE_CONFIG.email}</a>
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Governing Law</h2>
            <p>This Privacy Policy is governed by the laws of the Netherlands. Any disputes will be submitted to the competent court in The Hague.</p>
          </div>
        </article>
      </main>
      {/* Using a simplified footer notice here as the full ContactSection might be too much */}
      <footer className="text-center py-8 bg-secondary text-muted-foreground">
        <p>&copy; {currentYear} DataSight Portfolio - Tom de Bruijn. All rights reserved.</p>
      </footer>
    </>
  );
}

    