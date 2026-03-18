import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    label: "01",
    title: "Audit de cadrage",
    text: "Analyse des zones a tester, des cadences et des contraintes de votre exploitation.",
  },
  {
    label: "02",
    title: "Mise en place du pilote",
    text: "Livraison de la valisette, formation terrain et lancement sur un perimetre cible.",
  },
  {
    label: "03",
    title: "Bilan et recommandation",
    text: "Retour d'experience, ajustements et projection d'un deploiement a plus grande echelle.",
  },
];

function PilotProgramSection() {
  return (
    <section id="programme" className="section-shell">
      <div className="rounded-3xl border border-bronze/35 bg-gradient-to-br from-[#f6f0e7] to-[#efe7da] p-8 md:p-12">
        <ScrollReveal>
          <p className="kicker border-bronze/50 text-bronze">Programme pilote</p>
          <h2 className="max-w-3xl font-serif text-4xl md:text-5xl">
            Testez Maison Albea pendant 90 jours dans votre etablissement.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-warmGray">
            Le pilote inclut audit initial, selection des protocoles, livraison des formats,
            formation des equipes et bilan de performance a 30, 60 et 90 jours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink">
            <span className="rounded-full border border-bronze/40 px-4 py-2">3 zones tests</span>
            <span className="rounded-full border border-bronze/40 px-4 py-2">Accompagnement dedie</span>
            <span className="rounded-full border border-bronze/40 px-4 py-2">Bilan d'impact</span>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.label}
              delay={0.08 * index}
              className="rounded-2xl border border-bronze/25 bg-white/50 p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                Etape {step.label}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-warmGray">{step.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default PilotProgramSection;
