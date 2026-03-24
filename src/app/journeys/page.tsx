import Link from "next/link";

export default function JourneysPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-[#2EC4B6] text-white font-bold mb-6">
          Journey
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-800 mb-8">
          Welcome to Journeys
        </h1>
        <Link 
          href="/" 
          className="text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
        >
          Back to Park
        </Link>
      </div>
    </main>
  );
}
