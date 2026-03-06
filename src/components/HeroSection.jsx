import { motion } from "framer-motion";
import PremiumArtwork from "./PremiumArtwork";

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 md:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-sage/40 blur-3xl" />
      <div className="section-shell pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="kicker"
            >
              Entretien sensoriel pour hôtellerie d'exception
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="title-serif max-w-4xl"
            >
              L'art d'un entretien écologique qui prolonge le calme et l'élégance de vos suites.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-warmGray"
            >
              Maison Albéa conçoit des protocoles ménagers premium pour hôtels 4 et 5 étoiles,
              associant performance professionnelle, signature olfactive subtile et exigence
              environnementale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <span className="metric-chip">Concentrés professionnels</span>
              <span className="metric-chip">Signature olfactive exclusive</span>
              <span className="metric-chip">Accompagnement opérationnel</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#programme"
                className="rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-alabaster transition hover:bg-black"
              >
                Rejoindre le programme pilote
              </a>
              <a
                href="#concept"
                className="rounded-full border border-sand px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-ink transition hover:bg-cream/70"
              >
                Découvrir la maison
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto w-full max-w-[460px] lg:mx-0"
          >
            <PremiumArtwork variant="hero" className="aspect-[4/5]" />
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}

export default HeroSection;
