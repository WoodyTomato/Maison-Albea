import { motion } from "framer-motion";

const benefits = [
  "Réduction mesurable de l'empreinte chimique et des déchets de conditionnement.",
  "Formation des équipes housekeeping aux bons dosages et gestes de conservation.",
  "Expérience client renforcée par une signature olfactive cohérente et discrète.",
  "Pilotage qualité avec indicateurs de satisfaction et suivi opérationnel trimestriel.",
];

function HotelsBenefitsSection() {
  return (
    <section id="hotels" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-sand/70 bg-[#f5efe4]/85 p-8 md:p-12"
      >
        <p className="kicker">Pour les hôtels</p>
        <h2 className="max-w-4xl font-serif text-4xl md:text-5xl">
          Un partenaire conçu pour les établissements exigeants
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          <span className="metric-chip">Suites et villas</span>
          <span className="metric-chip">Espaces bien-être</span>
          <span className="metric-chip">Restaurants et salons</span>
        </div>

        <ul className="mt-7 grid gap-4 text-warmGray md:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-sand/70 bg-alabaster/70 px-5 py-4 leading-relaxed"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default HotelsBenefitsSection;
