'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function JourneysPage() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleViewProject = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  // We want to show 1 active app and let's say 2 placeholders to keep it less overwhelming
  const totalPlaceholders = 2;
  const placeholders = Array.from({ length: totalPlaceholders }, (_, i) => i + 1);

  return (
    <main className="min-h-[100svh] bg-[#F7F7F7] p-6 sm:p-12 font-sans overflow-x-hidden text-gray-900">
      
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-gray-800 transition-colors font-medium mb-8"
        >
          &larr; Return to Park
        </Link>
        <div className="flex flex-col gap-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#2EC4B6] text-white font-bold text-sm w-fit shadow-sm">
            Journey - app
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            The Journey
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mt-2">
            What I build
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Active App Card */}
          <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
            <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm border border-gray-100 overflow-hidden relative">
              <Image 
                src="/tticon.png" 
                alt="TT App Icon" 
                fill
                className="object-cover" 
              />
            </div>
            
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                TT
              </h2>
              <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                In progress
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
              Pick just 3 tasks.<br />
              Do less. Finish more.
            </p>
            
            <div className="relative">
              {showTooltip && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300 whitespace-nowrap">
                  Coming soon
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800" />
                </div>
              )}
              <button 
                onClick={handleViewProject}
                className="w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                View Project
              </button>
            </div>
          </div>

          {/* Placeholder Cards */}
          {placeholders.map((num, i) => (
            <div 
              key={num} 
              className="relative bg-transparent rounded-3xl p-6 sm:p-8 border-2 border-dashed border-gray-200 flex flex-col h-full items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-300 animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
              style={{ animationDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-400 font-medium">#{num + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-400">
                Next Step
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Processing new concepts...
              </p>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
