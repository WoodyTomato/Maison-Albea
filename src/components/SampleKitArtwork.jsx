import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function SampleKitArtwork({ className = "" }) {
  const shellRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start end", "end start"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [18, -14]);
  const scale = useSpring(scaleRaw, {
    stiffness: 130,
    damping: 26,
    mass: 0.45,
  });
  const y = useSpring(yRaw, {
    stiffness: 130,
    damping: 26,
    mass: 0.45,
  });

  return (
    <motion.div
      ref={shellRef}
      style={shouldReduceMotion ? undefined : { scale, y }}
      className={`relative overflow-hidden rounded-[2rem] border border-sand/70 bg-gradient-to-br from-[#f6efe5] via-[#efe6d9] to-[#dde6dc] shadow-soft ${className}`}
    >
      <div className="absolute -left-14 top-2 h-44 w-44 rounded-full bg-white/35 blur-2xl" />
      <div className="absolute -right-8 bottom-4 h-36 w-36 rounded-full bg-white/30 blur-2xl" />

      <div className="relative z-10 mx-auto mt-8 h-6 w-24 rounded-full border-2 border-bronze/70 bg-[#efe3d3]/85" />

      <div className="relative z-10 mx-auto mt-2 w-[88%] rounded-[1.6rem] border border-bronze/35 bg-[#f7efe3]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
        <div className="absolute inset-x-0 top-0 h-14 rounded-t-[1.6rem] bg-gradient-to-b from-white/35 to-transparent" />

        <div className="grid grid-cols-5 gap-3 pt-5">
          {[
            {
              color: "bg-[#dbe7dc]",
              label: "SDB",
              composition: "Acide citrique, tensioactifs vegetaux, eau purifiee.",
            },
            {
              color: "bg-[#eadfcf]",
              label: "Textile",
              composition: "Enzymes douces, alcool vegetal, musc blanc microdose.",
            },
            {
              color: "bg-[#e4ebdf]",
              label: "Spa",
              composition: "pH neutre, agents biodegradables, extrait de the vert.",
            },
            {
              color: "bg-[#efe2d3]",
              label: "Vitres",
              composition: "Alcool de betterave, anti-traces mineral, eau osmozee.",
            },
            {
              color: "bg-[#d9e2d8]",
              label: "Sols",
              composition: "Savon vegetal concentre, citron de Menton, chelatants doux.",
            },
          ].map((item) => (
            <div key={item.label} className="group relative flex flex-col items-center gap-2">
              <div className="pointer-events-none absolute -top-2 left-1/2 z-20 w-[185px] -translate-x-1/2 -translate-y-full rounded-lg border border-sand/80 bg-white/95 px-3 py-2 text-[11px] leading-snug text-warmGray opacity-0 shadow-soft transition-all duration-200 group-hover:-translate-y-[118%] group-hover:opacity-100 group-focus-within:-translate-y-[118%] group-focus-within:opacity-100">
                {item.composition}
              </div>

              <div
                tabIndex={0}
                className={`relative h-20 w-full rounded-xl border border-white/85 ${item.color} shadow-sm outline-none ring-0 ring-bronze/55 ring-offset-2 ring-offset-[#f7efe3] transition-all duration-200 group-hover:shadow-[0_0_0_1px_rgba(157,122,84,0.45),0_8px_18px_rgba(30,26,22,0.16)] group-hover:ring-2 group-focus-within:ring-2 focus-visible:border-bronze/65`}
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-warmGray">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-sand/80 bg-white/65 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-warmGray">
            5 mini-formats tests
          </div>
          <div className="rounded-xl border border-sand/80 bg-white/65 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-warmGray">
            protocole housekeeping inclus
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SampleKitArtwork;
