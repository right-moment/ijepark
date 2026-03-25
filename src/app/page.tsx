import IJEMap from "@/components/IJEMap";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100svh] flex-col items-center p-4 sm:p-8 relative overflow-hidden">
      {/* Top Right Logo Contact Link */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 animate-in fade-in duration-1000">
        <a href="mailto:contact@ijepark.com" title="Contact Us" className="block hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="IJE Park Logo" width={80} height={80} className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm cursor-pointer" />
        </a>
      </div>

      {/* 
        Container ensures everything stays centered.
        Flex-1 allows it to take up available vertical space flexibly.
        min-h-0 prevents it from forcing overflow when the screen is small.
      */}
      <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center z-10 min-h-0">
        
        {/* Header Section */}
        <header className="text-center mb-4 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 w-full">
          <div className="relative mx-auto w-max mb-3 sm:mb-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-800 whitespace-nowrap">
              Welcome to IJE Park
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-500 font-medium">
            Start now
          </p>
        </header>

        {/* Map Section */}
        <div className="w-full flex-1 flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
          <IJEMap />
        </div>
      </div>
      
      {/* Footer Section - Flex-none ensures it always claims enough space to be visible at the bottom */}
      <div className="flex-none w-full mt-auto">
        <footer className="w-full text-center text-xs text-gray-400 pb-2 sm:pb-4 pt-4 sm:pt-6 animate-in fade-in duration-1000 delay-500 z-10 flex flex-col gap-2 items-center">
          <div>
            <span>Brand: IJE | Business Reg No: 676-05-01077 | Contact: contact@ijepark.com</span>
          </div>
          <div>
            <span>&copy; 2026 IJE | </span>
            <Link href="/terms" className="hover:text-gray-600 underline underline-offset-2 transition-colors">
              Terms of Service
            </Link>
            <span> | </span>
            <Link href="/privacy" className="hover:text-gray-600 underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
