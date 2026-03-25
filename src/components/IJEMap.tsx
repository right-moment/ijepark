"use client";

import Link from "next/link";

const dots = [
  [150, 80], [250, 120], [320, 200], [120, 250], [280, 280],
  [400, 90], [550, 150], [450, 280], [600, 220], [580, 80],
  [700, 140], [850, 100], [820, 260], [920, 200], [750, 320]
];

const LineStroke = ({ d, isBackground = false }: { d: string; isBackground?: boolean }) => {
  return (
    <>
      <path
        d={d}
        stroke={isBackground ? "transparent" : "#FFC83D"}
        strokeWidth="56"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        stroke={isBackground ? "transparent" : "#F7F7F7"}
        strokeWidth="44"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
};

export default function IJEMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
      {/* User provided Road Background Image */}
      <div className="absolute inset-x-0 bottom-[10%] sm:bottom-[15%] md:bottom-[18%] translate-y-[50px] pointer-events-none z-0 flex justify-center opacity-90 mx-auto w-full mix-blend-multiply">
        <img src="/road.png" alt="Road to park" className="w-[85%] md:w-[75%] max-w-2xl h-auto object-contain" />
      </div>

      {/* SVG Container: Uses viewBox for responsive scaling */}
      <svg
        viewBox="90 0 800 500"
        className="w-full max-h-[55vh] h-auto drop-shadow-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Decorative background dots */}
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2} fill="#FFC83D" opacity="0.5" />
        ))}

        {/* Connective subtle background line */}
        <path
          d="M 220 328 C 380 340, 560 310, 780 328"
          stroke="#FFC83D"
          strokeWidth="6"
          fill="none"
          opacity="0.2"
          strokeLinecap="round"
        />

        {/* --- I : Iam --- */}
        <Link href="/iam" className="group outline-none cursor-pointer">
          <rect x="220" y="50" width="100" height="300" fill="transparent" />
          <g className="group-hover:drop-shadow-[0_0_15px_rgba(253,184,19,0.5)] transition-all duration-300">
            {/* Tiny Flat */}
            <path d="M 270 90 L 270 40" stroke="#FFC83D" strokeWidth="5" strokeLinecap="round" />
            <polygon points="270,40 295,52 270,64" fill="#FFC83D" />
            
            <LineStroke d="M 270 100 L 270 300" />
          </g>
          <g className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:-translate-y-4 pointer-events-none">
            <rect x="225" y="30" width="90" height="32" rx="16" fill="#FDB813" />
            <text x="270" y="51" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">I Am</text>
            <polygon points="265,62 275,62 270,68" fill="#FDB813" />
          </g>
        </Link>

        {/* --- J : Journey --- */}
        <Link href="/journeys" className="group outline-none cursor-pointer">
          <rect x="370" y="50" width="160" height="300" fill="transparent" />
          <g className="group-hover:drop-shadow-[0_0_15px_rgba(46,196,182,0.5)] transition-all duration-300">
            <LineStroke d="M 510 100 L 510 240 A 60 60 0 0 1 390 240 L 390 220" />
          </g>
          <g className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:-translate-y-4 pointer-events-none">
            <rect x="410" y="30" width="80" height="32" rx="16" fill="#2EC4B6" />
            <text x="450" y="51" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Journey</text>
            <polygon points="445,62 455,62 450,68" fill="#2EC4B6" />
          </g>
        </Link>

        {/* --- E : Entertainment --- */}
        <Link href="/entertainment" className="group outline-none cursor-pointer">
          <rect x="610" y="50" width="140" height="300" fill="transparent" />
          <g className="group-hover:drop-shadow-[0_0_15px_rgba(244,162,97,0.5)] transition-all duration-300">
            <LineStroke d="M 730 100 L 650 100 A 20 20 0 0 0 630 120 L 630 280 A 20 20 0 0 0 650 300 L 730 300 M 630 200 L 710 200" />
          </g>
          <g className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:-translate-y-4 pointer-events-none">
            <rect x="620" y="30" width="120" height="32" rx="16" fill="#F4A261" />
            <text x="680" y="51" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Entertainment</text>
            <polygon points="675,62 685,62 680,68" fill="#F4A261" />
          </g>
        </Link>
      </svg>
    </div>
  );
}
