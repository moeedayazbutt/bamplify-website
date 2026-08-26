

interface LogoItem {
  name: string;
  src: string;
  gradient: string;
}

const LOGOS: LogoItem[] = [
  {
    name: 'Procure',
    src: 'https://svgl.app/library/procure.svg',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  },
  {
    name: 'Shopify',
    src: 'https://svgl.app/library/shopify.svg',
    gradient: 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)',
  },
  {
    name: 'Blender',
    src: 'https://svgl.app/library/blender.svg',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)',
  },
  {
    name: 'Figma',
    src: 'https://svgl.app/library/figma.svg',
    gradient: 'linear-gradient(135deg, #c084fc 0%, #7e22ce 100%)',
  },
  {
    name: 'Spotify',
    src: 'https://svgl.app/library/spotify.svg',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
  },
  {
    name: 'Lottielab',
    src: 'https://svgl.app/library/lottielab.svg',
    gradient: 'linear-gradient(135deg, #a3e635 0%, #4d7c0f 100%)',
  },
  {
    name: 'Google Cloud',
    src: 'https://svgl.app/library/google-cloud.svg',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)',
  },
  {
    name: 'Bing',
    src: 'https://svgl.app/library/bing.svg',
    gradient: 'linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)',
  },
];

export const MarqueeScroller: React.FC = () => {
  // Render the list twice inline to ensure a seamless infinite loop
  const doubleLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto overflow-hidden marquee-mask">
      <div className="animate-marquee flex items-center gap-6 py-4">
        {doubleLogos.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
          >
            {/* Gradient Hover Background */}
            <div
              className="absolute inset-0 rounded-full scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
              style={{ background: logo.gradient }}
            />

            {/* Logo Image */}
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto max-w-[90px] object-contain relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
