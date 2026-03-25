import Link from "next/link";

export default function EntertainmentPage() {
  // We want to show 3 placeholders for games/fun projects
  const placeholders = [1, 2, 3];

  return (
    <main className="min-h-[100svh] bg-[#F7F7F7] p-6 sm:p-12 font-sans overflow-x-hidden">
      
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-gray-800 transition-colors font-medium mb-8"
        >
          &larr; Return to Park
        </Link>
        <div className="flex flex-col gap-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F4A261] text-white font-bold text-sm w-fit shadow-sm">
            Entertainment - game
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Games & Experiences
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mt-2">
            What I create for fun
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Placeholder Cards */}
          {placeholders.map((num, i) => (
            <div 
              key={num} 
              className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-dashed border-gray-200 flex flex-col h-full items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-300 animate-in fade-in zoom-in-95 duration-700 fill-mode-both group hover:border-[#F4A261]"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 text-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-gray-400 group-hover:scale-110 transition-transform">
                🎮
              </div>
              <h3 className="text-xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                Upcoming Game
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Stay tuned for interactive fun and digital adventures.
              </p>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
