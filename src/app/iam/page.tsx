import Link from "next/link";
import Image from "next/image";

export default function IamPage() {
  return (
    <main className="min-h-[100svh] bg-[#F7F7F7] p-6 sm:p-12 font-sans overflow-x-hidden flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-8 sm:p-16 rounded-[2.5rem] shadow-sm animate-in fade-in zoom-in-95 duration-1000">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-gray-800 transition-colors font-medium mb-12"
        >
          &larr; Return to Park
        </Link>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100 shadow-inner overflow-hidden p-6 relative">
            <Image 
              src="/logo.png" 
              alt="IJE Logo" 
              fill
              className="object-contain p-6" 
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            I am IJE
          </h1>
          
          <div className="w-12 h-1.5 bg-[#FDB813] rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-xl text-center">
            I am building small things that make life clearer.<br />
            This park is a collection of those creations.
          </p>

          <div className="flex flex-col items-center gap-1 text-gray-400 mb-12 italic text-sm sm:text-base border-y border-gray-50 py-6 w-full">
            <p>IJE means &quot;now&quot; in Korean.</p>
            <p>It represents a starting point —</p>
            <p>a moment to begin.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="block font-bold text-gray-800">Vision</span>
              <span className="text-sm text-gray-400">A Growing Collection</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="block font-bold text-gray-800">Value</span>
              <span className="text-sm text-gray-400">Small & Meaningful</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="block font-bold text-gray-800">Focus</span>
              <span className="text-sm text-gray-400">Clarity</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
