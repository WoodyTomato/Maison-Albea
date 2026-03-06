import { motion } from "framer-motion";

function PilotProgramSection() {
  return (
    <section id="programme" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-bronze/35 bg-gradient-to-br from-[#f6f0e7] to-[#efe7da] p-8 md:p-12"
      >
        <p className="kicker border-bronze/50 text-bronze">Programme pilote</p>
        <h2 className="max-w-3xl font-serif text-4xl md:text-5xl">
          Testez Maison Albéa pendant 90 jours dans votre établissement.
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-warmGray">
          Le pilote inclut audit initial, sélection de protocoles, livraison des formats,
          formation des équipes et rapport de performance à 30/60/90 jours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink">
          <span className="rounded-full border border-bronze/40 px-4 py-2">3 zones tests</span>
          <span className="rounded-full border border-bronze/40 px-4 py-2">Accompagnement dédié</span>
          <span className="rounded-full border border-bronze/40 px-4 py-2">Bilan d'impact</span>
        </div>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default PilotProgramSection;
