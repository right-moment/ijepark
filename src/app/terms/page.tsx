import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-sm overflow-y-auto max-h-[80vh]">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 mb-2">
          Terms of Service for IJE
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: March 25, 2026</p>
        
        <div className="text-gray-600 space-y-5 text-sm leading-relaxed">
          <p>
            Welcome to IJE. By accessing or using our applications (the "Service"), you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>
            By installing and using the Service provided by IJE, you agree to these terms. If you do not agree, please do not use the Service. These terms apply to all users and visitors of our applications.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">2. Description of Service</h2>
          <p>
            IJE provides productivity and mindfulness tools (e.g., "Three Today" task management). The Service is provided "as is" and "as available." We reserve the right to modify or discontinue any part of the Service at any time.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Data Management:</strong> All data is stored locally on your device. You are solely responsible for managing and backing up your data. IJE is not liable for any data loss caused by device failure, uninstallation, or OS issues.</li>
            <li><strong>Acceptable Use:</strong> You agree not to use the Service for any illegal activities or to interfere with the proper functioning of the Service.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">4. Intellectual Property</h2>
          <p>
            All content, logos (including the 'ije' logo), designs, and software code within the Service are the exclusive property of IJE. You may not copy, modify, or distribute our intellectual property without prior written consent.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">5. Third-Party Services &amp; Ads</h2>
          <p>
            The Service may include third-party components (e.g., Google AdMob for advertisements). Your interaction with these services is governed by the respective third party's terms and privacy policies. IJE is not responsible for the content or practices of these third parties.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, IJE shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the Service, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">7. Paid Services and Refunds (If applicable)</h2>
          <p>If the Service offers in-app purchases or subscriptions:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Payments are processed through the Google Play Store or Apple App Store.</li>
            <li>Refund requests must be handled according to the respective store's refund policies.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">8. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the Service after changes are posted constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <ul className="list-none mt-2 space-y-2">
            <li><strong>Email:</strong> contact@ijepark.com</li>
            <li><strong>Website:</strong> ijepark.com</li>
          </ul>
        </div>

        <div className="mt-10 border-t pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            &larr; Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
