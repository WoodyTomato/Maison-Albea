import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import PremiumArtwork from "./PremiumArtwork";
import ScrollReveal from "./ScrollReveal";

function HeroSection() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textYRaw = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const artworkYRaw = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const glowYRaw = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const cardYRaw = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const glowOpacityRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.65, 0.3]);
  const artworkY = useSpring(artworkYRaw, { stiffness: 120, damping: 24, mass: 0.5 });
  const glowY = useSpring(glowYRaw, { stiffness: 110, damping: 26, mass: 0.55 });
  const cardY = useSpring(cardYRaw, { stiffness: 120, damping: 24, mass: 0.45 });
  const glowOpacity = useSpring(glowOpacityRaw, { stiffness: 120, damping: 24, mass: 0.45 });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="scroll-stage relative overflow-hidden pt-36 md:pt-44"
    >
      <motion.div
        aria-hidden
        style={shouldReduceMotion ? undefined : { y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2 rounded-full bg-sage/45 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.58),transparent_58%)]" />

      <div className="section-shell pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div style={shouldReduceMotion ? undefined : { y: textYRaw }}>
            <ScrollReveal as={motion.p} className="kicker" distance={12}>
              Entretien sensoriel pour hotellerie d'exception
            </ScrollReveal>

            <ScrollReveal as={motion.h1} delay={0.05} className="title-serif max-w-4xl" distance={20}>
              Des protocoles de nettoyage premium qui elevent la perception de vos chambres et espaces communs.
            </ScrollReveal>

            <ScrollReveal
              as={motion.p}
              delay={0.15}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-warmGray"
            >
              Maison Albea accompagne les hotels 4 et 5 etoiles avec des formules
              ecologiques concentrees, une signature olfactive discrete et un cadre de
              deploiement pense pour les equipes housekeeping.
            </ScrollReveal>

            <ScrollReveal as={motion.div} delay={0.22} className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-sand/75 bg-white/65 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                  Delai pilote
                </p>
                <p className="mt-2 font-serif text-3xl text-ink">90 j</p>
                <p className="mt-1 text-sm text-warmGray">Audit, test, formation et bilan.</p>
              </div>
              <div className="rounded-2xl border border-sand/75 bg-white/65 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                  Zones couvertes
                </p>
                <p className="mt-2 font-serif text-3xl text-ink">3</p>
                <p className="mt-1 text-sm text-warmGray">Chambres, parties communes, spa.</p>
              </div>
              <div className="rounded-2xl border border-sand/75 bg-white/65 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                  Reponse
                </p>
                <p className="mt-2 font-serif text-3xl text-ink">24 h</p>
                <p className="mt-1 text-sm text-warmGray">Prise de contact B2B prioritaire.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal
              as={motion.div}
              delay={0.3}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-alabaster transition hover:bg-black"
              >
                Demander un rendez-vous
              </a>
              <a
                href="#programme"
                className="rounded-full border border-sand px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-ink transition hover:bg-cream/70"
              >
                Voir le programme pilote
              </a>
            </ScrollReveal>
          </motion.div>

          <motion.div
            style={shouldReduceMotion ? undefined : { y: artworkY }}
            className="relative mx-auto w-full max-w-[500px] lg:mx-0"
          >
            <ScrollReveal delay={0.2} className="relative z-10">
              <PremiumArtwork variant="hero" className="aspect-[4/5]" />
            </ScrollReveal>

            <motion.div
              style={shouldReduceMotion ? undefined : { y: cardY }}
              className="section-panel absolute -bottom-6 -left-4 z-20 max-w-[240px] p-5 md:-left-10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                Execution calibree
              </p>
              <p className="mt-3 font-serif text-2xl text-ink">
                Une sensation de proprete visible et coherente des les premiers passages.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warmGray">
                Produits, gestes metier et signatures olfactives sont alignes pour soutenir
                l'image de l'etablissement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}

export default HeroSection;
