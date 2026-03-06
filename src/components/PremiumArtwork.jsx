function PremiumArtwork({ variant = "hero", className = "" }) {
  const variants = {
    hero: {
      shell: "from-[#f7f1e8] via-[#efe8dc] to-[#e6ebdf]",
      stroke: "#9D7A54",
      fillA: "#ece2d4",
      fillB: "#d9e5dc",
    },
    fragrance: {
      shell: "from-[#f3ede3] via-[#ece4d8] to-[#dde7de]",
      stroke: "#8F9D91",
      fillA: "#e7dbc9",
      fillB: "#d6e2d8",
    },
    products: {
      shell: "from-[#f6f0e7] via-[#eee3d5] to-[#e2e7de]",
      stroke: "#6D665E",
      fillA: "#e9ddcc",
      fillB: "#d5e0d6",
    },
  };

  const active = variants[variant] ?? variants.hero;

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-sand/70 bg-gradient-to-br ${active.shell} shadow-soft ${className}`}
    >
      <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/25 blur-2xl" />

      <svg
        viewBox="0 0 420 320"
        className="relative z-10 h-full w-full"
        role="img"
        aria-label="Illustration sensorielle Maison Albéa"
      >
        <rect x="0" y="0" width="420" height="320" fill="transparent" />
        <ellipse cx="130" cy="170" rx="105" ry="120" fill={active.fillA} opacity="0.65" />
        <ellipse cx="300" cy="150" rx="110" ry="120" fill={active.fillB} opacity="0.75" />
        <path
          d="M70 250C135 212 172 138 209 94C247 49 298 30 350 51"
          stroke={active.stroke}
          strokeWidth="2"
          fill="none"
          opacity="0.65"
        />
        <path
          d="M55 220C120 184 182 130 223 90C264 51 301 34 362 62"
          stroke={active.stroke}
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
        />
        <circle cx="188" cy="204" r="58" fill="#f8f3eb" opacity="0.85" />
        <circle cx="188" cy="204" r="42" fill="#fff" opacity="0.45" />
        <path
          d="M175 188C188 176 203 179 210 190C218 202 212 220 196 227C184 232 169 227 162 213"
          fill="none"
          stroke={active.stroke}
          strokeWidth="1.8"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

export default PremiumArtwork;
