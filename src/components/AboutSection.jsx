import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="a-propos" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"
      >
        <div className="card-premium">
          <p className="kicker">A propos</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Une maison nee entre laboratoire et hotellerie.
          </h2>
          <p className="mt-5 leading-relaxed text-warmGray">
            Notre ambition est simple: transformer le nettoyage en un standard de marque,
            lisible pour vos equipes et perceptible pour vos clients.
          </p>
        </div>
        <div className="space-y-5 text-warmGray">
          <p className="leading-relaxed">
            Maison Albea a ete fondee par une equipe issue des metiers de la formulation, de la
            gouvernance environnementale et des operations hotelieres haut de gamme.
          </p>
          <p className="leading-relaxed">
            Notre conviction: la proprete professionnelle peut devenir un veritable langage de
            marque, en conjuguant precision technique, durabilite et emotion sensorielle.
          </p>
          <div className="grid gap-3 border-t border-sand/70 pt-5 text-sm md:grid-cols-3">
            <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
              Conseil de cadrage
            </div>
            <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
              Formation des equipes
            </div>
            <div className="rounded-2xl border border-sand/70 bg-white/55 px-4 py-4">
              Deploiement operationnel
            </div>
          </div>
        </div>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default AboutSection;
