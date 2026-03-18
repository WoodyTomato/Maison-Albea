import { motion } from "framer-motion";

const benefits = [
  {
    title: "Efficacite operationnelle",
    text: "Dosages clairs, routines standardisees et protocoles adaptes aux contraintes des equipes.",
  },
  {
    title: "Image de marque renforcee",
    text: "Une proprete plus visible et une signature olfactive coherente avec le niveau de service.",
  },
  {
    title: "Impact environnemental maitrise",
    text: "Formats concentres, moins de transport et reduction des dechets de conditionnement.",
  },
  {
    title: "Pilotage qualite",
    text: "Suivi du test, retours terrain et bilan de deploiement pour faciliter la decision.",
  },
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
        <p className="kicker">Pour les hotels</p>
        <h2 className="max-w-4xl font-serif text-4xl md:text-5xl">
          Un dispositif concu pour les etablissements qui veulent elever leur standard sans complexifier l'operationnel
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-sand/70 bg-alabaster/75 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
              Cibles
            </p>
            <p className="mt-3 text-sm leading-relaxed text-warmGray">
              Suites, villas, espaces bien-etre, restaurants et zones a forte exigence d'image.
            </p>
          </div>
          <div className="rounded-2xl border border-sand/70 bg-alabaster/75 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
              Interlocuteurs
            </p>
            <p className="mt-3 text-sm leading-relaxed text-warmGray">
              Direction, gouvernantes, responsables housekeeping et exploitation.
            </p>
          </div>
          <div className="rounded-2xl border border-sand/70 bg-alabaster/75 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
              Livrables
            </p>
            <p className="mt-3 text-sm leading-relaxed text-warmGray">
              Produits, protocole, formation, suivi et bilan de decision en fin de pilote.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 text-warmGray md:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-2xl border border-sand/70 bg-alabaster/70 px-5 py-5"
            >
              <p className="text-lg font-serif text-ink">{benefit.title}</p>
              <p className="mt-2 leading-relaxed">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default HotelsBenefitsSection;
