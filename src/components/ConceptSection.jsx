import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

function ConceptSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });
  const lineScaleRaw = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const panelYRaw = useTransform(scrollYProgress, [0, 1], [34, -18]);
  const lineScale = useSpring(lineScaleRaw, { stiffness: 120, damping: 24, mass: 0.4 });
  const panelY = useSpring(panelYRaw, { stiffness: 120, damping: 24, mass: 0.45 });

  return (
    <section id="concept" ref={sectionRef} className="section-shell-tight">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <motion.span
            aria-hidden
            style={shouldReduceMotion ? undefined : { scaleY: lineScale }}
            className="absolute left-0 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-bronze/0 via-bronze/65 to-bronze/0 lg:block"
          />
          <div className="lg:pl-10">
            <ScrollReveal as={motion.p} className="kicker" distance={12}>
              Le concept
            </ScrollReveal>
            <ScrollReveal
              as={motion.h2}
              delay={0.05}
              className="font-serif text-4xl leading-tight md:text-5xl"
            >
              Une gestuelle d'entretien pensee comme une extension de l'experience client.
            </ScrollReveal>
            <ScrollReveal
              as={motion.p}
              delay={0.12}
              className="mt-6 max-w-xl text-lg leading-relaxed text-warmGray"
            >
              Chaque zone est pensee comme une transition de perception: proprete visible,
              signature olfactive retenue et sensation de calme durable au fil du parcours.
            </ScrollReveal>
          </div>
        </div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: panelY }}
          className="section-panel p-7 md:p-8"
        >
          <ScrollReveal as={motion.div} className="space-y-5 text-warmGray" distance={18}>
            <p className="leading-relaxed">
              Nous formulons des nettoyants ecologiques haute performance adaptes aux standards
              de l'hotellerie premium: surfaces nobles, chambres, espaces bien-etre et lieux de
              passage intensif.
            </p>
            <p className="leading-relaxed">
              Chaque formule s'inscrit dans une esthetique olfactive maitrisee, afin que la
              proprete percue soit aussi sensorielle que visuelle.
            </p>
            <div className="grid gap-3 border-t border-sand/70 pt-5 text-sm md:grid-cols-3">
              <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
                Protocoles sur mesure pour housekeeping
              </div>
              <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
                Compatibilite avec materiaux delicats
              </div>
              <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
                Positionnement luxe discret
              </div>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default ConceptSection;
