
import Header from '@/components/layout/header'; // Assuming you want the main header
import { SITE_CONFIG } from '@/constants/site';

export default function DisclaimerPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-20">
        <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border">
          <h1 className="text-3xl font-bold text-primary mb-6">Disclaimer for DataSight Portfolio</h1>
          <p className="text-sm text-muted-foreground mb-6"><strong>Valid from: April 1, 2024</strong></p>

          <div className="space-y-4 text-foreground/90">
            <p>The information provided by DataSight Portfolio ("we," "us," or "our") on this website ({SITE_CONFIG.name}) is for general informational purposes only.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Accuracy of Information</h2>
            <p>We make every effort to ensure the information on our website is accurate and up-to-date. However, we cannot guarantee that all information is completely free of errors or omissions. We reserve the right to change the content on this website at any time without notice.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Website Availability</h2>
            <p>DataSight Portfolio does not guarantee that the website will operate without interruption or be error-free. We are not liable for any damages arising from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Inaccuracies or omissions in the information provided.</li>
              <li>Problems caused by or inherent to the distribution of information via the internet (e.g., breakdowns, interruptions, errors, or delays).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">External Links</h2>
            <p>This website may contain links to third-party websites. We are not responsible for the content or accuracy of these external sites and do not necessarily endorse the views expressed within them. We cannot guarantee that these hyperlinks will always be correct or active.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Electronic Communication</h2>
            <p>We do not guarantee that emails or other electronic messages sent to us will be received or processed in a timely manner. We accept no liability for any consequences of not receiving or processing such communications, or for delays in doing so.</p>
            
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">No Professional Advice</h2>
            <p>The information on this website is not intended as professional advice. You should consult with a qualified professional before making any decisions based on the content of this site.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, DataSight Portfolio, Tom de Bruijn, shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Changes to This Disclaimer</h2>
            <p>We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website.</p>
          </div>
        </article>
      </main>
      <footer className="text-center py-8 bg-secondary text-muted-foreground">
        <p>&copy; {currentYear} DataSight Portfolio - Tom de Bruijn. All rights reserved.</p>
      </footer>
    </>
  );
}

    