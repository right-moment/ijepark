import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-sm overflow-y-auto max-h-[80vh]">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 mb-2">
          Privacy Policy for IJE
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: March 24, 2026</p>
        
        <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
          <p>
            IJE ("we," "our," or "the Developer") is committed to protecting your privacy. This Privacy Policy applies to all applications (the "Service") provided by IJE.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">1. Information We Collect</h2>
          <p>The Service processes the following information to provide its core features:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>User-Inputted Data:</strong> Task titles, descriptions, due dates, start/end times, and task status (Inbox, Board, Archive, Completion).</li>
            <li><strong>Device Information:</strong> Anonymous information such as OS version and device model to diagnose errors and optimize performance.</li>
            <li><strong>Advertising Identifiers (If applicable):</strong> For apps containing ads, the Google Advertising ID (ADID) may be processed by third-party ad providers to serve personalized advertisements.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information solely for the following purposes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>To provide core app functionality (task management, board organization).</li>
            <li>To maintain and manage local data on your device.</li>
            <li>To diagnose service errors and improve app performance.</li>
            <li>(For ad-supported apps) To provide personalized advertisements via Google AdMob.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">3. Data Storage and Third-Party Sharing</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Local Storage Principle:</strong> All user-inputted data is stored only on your local device. We do not transmit or store this data on our servers.</li>
            <li><strong>Third-Party Sharing:</strong> We do not sell or share your personal data with third parties. However, integrated modules like Google AdMob or Firebase may process anonymous identifiers according to their own privacy policies.</li>
          </ul>
          <p className="mt-2 text-blue-600 hover:underline">
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              View Google’s Privacy Policy
            </a>
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">4. Data Retention and Deletion</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Your data remains on your device as long as the app is installed.</li>
            <li>Data is permanently deleted when you manually delete a task or uninstall the application from your device.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">5. Your Rights</h2>
          <p>
            You can access, modify, or delete your data at any time within the app. Since our Service does not require a user account, you have full control over your data directly on your device.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">6. Children's Privacy</h2>
          <p>
            The Service is not intended for children under the age of 13 (or the legal age in your jurisdiction), and we do not knowingly collect personal information from children.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">7. Security</h2>
          <p>
            We follow standard security guidelines provided by operating systems (Android/iOS) to protect your data. However, please be aware that data security also depends on your device's lock settings and overall security state.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">8. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
          <ul className="list-none mt-2 space-y-2">
            <li><strong>Brand:</strong> IJE</li>
            <li><strong>Email:</strong> contact@ijepark.com</li>
            <li><strong>Address:</strong> [Your Virtual Office Address in English]</li>
            <li><strong>Business Registration Number:</strong> [Your Business Number]</li>
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
