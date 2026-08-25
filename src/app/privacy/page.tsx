import Link from "next/link";
import EmailLink from "@/components/EmailLink";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-sm overflow-y-auto max-h-[80vh]">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 mb-2">
          Privacy Policy for IJE
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 25, 2026</p>
        
        <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
          <p>
            IJE (&quot;we,&quot; &quot;our,&quot; or &quot;the Developer&quot;) is committed to protecting your privacy. This Privacy Policy applies to applications provided by IJE. Some data practices may differ depending on the specific app, and app-specific disclosures are provided where applicable.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">1. Information We Collect</h2>
          <p>Our apps may process the following types of information depending on the features used:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>User-Inputted Data:</strong> Information entered by the user, such as task titles, descriptions, due dates, start/end times, task status, archived records, and completion history.</li>
            <li><strong>Device and Diagnostic Information:</strong> Basic technical information such as OS version, device model, crash information, and performance-related data may be processed to diagnose errors and improve app stability.</li>
            <li><strong>Advertising Identifiers:</strong> For apps that contain ads, third-party advertising providers such as Google AdMob may process the Google Advertising ID, IP address, app interaction information, diagnostic information, and other device identifiers to provide ads, measure ad performance, prevent fraud and abuse, and maintain advertising services.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">2. How We Use Your Information</h2>
          <p>We use information for the following purposes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>To provide core app functionality.</li>
            <li>To store and manage user data on the device.</li>
            <li>To diagnose errors and improve app performance.</li>
            <li>For ad-supported apps, to display advertisements through Google AdMob, measure ad performance, and prevent fraud or abuse.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">3. App-Specific Disclosures</h2>
          <h3 className="text-md font-bold text-gray-900 mt-6 mb-3 border-l-2 border-[#2EC4B6] pl-2.5">
            Three Today : Tasks &amp; To-do
          </h3>
          <p>
            Three Today is a simple task management app designed to help users focus on a small number of tasks each day.
          </p>
          <p>
            In Three Today, user-inputted task data, including task titles, descriptions, due dates, start/end times, task status, archived records, and completion history, is stored locally on the user&apos;s device. We do not operate our own server to sync, upload, or store this task data.
          </p>
          <p>
            Please note that if you use device backup, operating system backup, cloud backup, or device transfer features, locally stored app data may be included depending on your device and account settings.
          </p>
          <p>
            Three Today may display advertisements through Google AdMob. Depending on your region and applicable privacy laws, you may be shown a consent or privacy options screen before ads are requested. Where required, you can choose whether to allow personalized ads or manage your privacy choices. If privacy options are required in your region, the app may provide a menu option that allows you to reopen the privacy choices screen.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">4. Data Storage and Third-Party Services</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Local Storage:</strong> User-inputted data is stored on your local device unless otherwise stated in the app-specific disclosures.</li>
            <li><strong>No Sale of Personal Data:</strong> We do not sell your personal data.</li>
            <li><strong>Third-Party Services:</strong> Apps that include third-party services may allow those services to collect, process, and share certain information according to their own privacy policies and applicable law.</li>
          </ul>
          <p className="mt-4">For advertising, our apps may use Google AdMob. Google may process information in accordance with its own policies:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                How Google uses information from apps or sites that use its services
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Advertising Policy
              </a>
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">5. Data Retention and Deletion</h2>
          <p>User-inputted data remains on your device as long as the app is installed, unless you delete it within the app.</p>
          <p>Data may be deleted by:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Manually deleting tasks or records within the app.</li>
            <li>Clearing the app&apos;s data through your device settings.</li>
            <li>Uninstalling the application from your device.</li>
          </ul>
          <p className="mt-2">Some advertising-related data may be retained by third-party advertising providers according to their own policies.</p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">6. Your Rights and Choices</h2>
          <p>
            You can access, modify, or delete user-inputted data within the app. Since our apps do not currently require a user account, most user-inputted data is controlled directly on your device.
          </p>
          <p>For ad-supported apps, you may also be able to manage advertising preferences through:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>The in-app privacy options screen, where available.</li>
            <li>Your device advertising settings.</li>
            <li>Google ad settings.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">7. Children's Privacy</h2>
          <p>
            Our apps are not intended for children under the age of 13 or the legal age required in your jurisdiction. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">8. Security</h2>
          <p>
            We follow standard security guidelines provided by operating systems such as Android and iOS to protect user data. However, please be aware that local data security also depends on your device's lock settings, backup settings, operating system security, and overall device security state.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this page.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">10. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
          <ul className="list-none mt-2 space-y-2">
            <li><strong>Email:</strong> <EmailLink className="hover:text-gray-800 underline underline-offset-2" /></li>
            <li><strong>Website:</strong> ijepark.com</li>
          </ul>
        </div>

        <div className="mt-10 border-t pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-500 hover:text-gray-950 transition-colors font-medium"
          >
            &larr; Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
