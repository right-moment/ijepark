import Link from "next/link";

export default function IdeasPage() {
  return (
    <main className="min-h-[100svh] bg-[#F7F7F7] p-6 sm:p-12 font-sans flex items-center justify-center">
      <div className="text-center animate-in fade-in duration-700">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Ideas</h1>
        <p className="text-gray-400 mb-8">This page has been relocated.</p>
        <Link href="/" className="text-gray-400 hover:text-gray-800 underline underline-offset-4 font-medium transition-colors">
          Return to Park
        </Link>
      </div>
    </main>
  );
}
