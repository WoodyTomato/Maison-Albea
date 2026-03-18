import { useState } from "react";
import PremiumArtwork from "./PremiumArtwork";
import SampleKitArtwork from "./SampleKitArtwork";
import ScrollReveal from "./ScrollReveal";

const productFamilies = [
  {
    id: "chambre",
    label: "Chambre",
    title: "Collection Chambre",
    subtitle: "Linge, surfaces delicates, salle de bain",
    desc: "Une routine complete pour la chambre client avec un rendu net, discretement parfume et rapide a deployer par l'equipe housekeeping.",
    bullets: [
      "Brume textile anti-odeurs",
      "Nettoyant surfaces delicates",
      "Concentre salle de bain basse mousse",
    ],
    variant: "fragrance",
  },
  {
    id: "espaces",
    label: "Espaces communs",
    title: "Collection Espaces Communs",
    subtitle: "Lobby, couloirs, ascenseurs, reception",
    desc: "Des formules professionnelles pensees pour les zones a fort trafic, avec une excellente tenue visuelle sur marbre, verre et metaux.",
    bullets: [
      "Degraissant multi-surfaces premium",
      "Nettoyant vitres sans traces",
      "Entretien marbre et laiton",
    ],
    variant: "products",
  },
  {
    id: "spa",
    label: "Spa & bien-etre",
    title: "Collection Spa & Bien-etre",
    subtitle: "Cabines, vestiaires, zones humides",
    desc: "Nettoyage doux haute tolerance, compatible avec les environnements sensibles et les standards de confort eleves des espaces wellness.",
    bullets: [
      "Nettoyant pH neutre peaux sensibles",
      "Desinfectant contact court",
      "Entretien bois humide et pierre",
    ],
    variant: "hero",
  },
];

function SolutionsSection() {
  const [activeId, setActiveId] = useState(productFamilies[0].id);
  const activeIndex = productFamilies.findIndex((item) => item.id === activeId);
  const activeProduct = productFamilies[activeIndex] ?? productFamilies[0];

  return (
    <section id="solutions" className="section-shell">
      <ScrollReveal>
        <p className="kicker">Solutions et produits</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          Une valisette pilote et des gammes structurees par usage
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-warmGray">
          Pour accelerer la validation en etablissement, chaque hotel pilote recoit une valisette
          echantillon prete a tester avec protocole, dosage, grille de suivi et parcours de
          formation.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <ScrollReveal>
          <SampleKitArtwork className="h-[300px] md:h-[360px]" />
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="card-premium">
          <h3 className="font-serif text-3xl">Valisette echantillon pilote</h3>
          <p className="mt-3 leading-relaxed text-warmGray">
            Une presentation premium concue pour vos equipes operationnelles: mini formats,
            fiches gestes metier, argumentaire interne et grille d'evaluation de satisfaction.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-sand/80 bg-white/70 px-4 py-3 text-sm text-warmGray">
              Test complet sur 7 a 14 jours
            </div>
            <div className="rounded-xl border border-sand/80 bg-white/70 px-4 py-3 text-sm text-warmGray">
              Accompagnement de prise en main
            </div>
            <div className="rounded-xl border border-sand/80 bg-white/70 px-4 py-3 text-sm text-warmGray">
              Releve des retours clients et staff
            </div>
            <div className="rounded-xl border border-sand/80 bg-white/70 px-4 py-3 text-sm text-warmGray">
              Ajustements formule et parfum
            </div>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-alabaster transition hover:bg-black"
          >
            Demander la valisette test
          </a>
        </ScrollReveal>
      </div>

      <div
        id="catalogue"
        className="mt-14 rounded-[2rem] border border-sand/80 bg-[#f8f3ea]/75 p-5 md:p-7"
      >
        <div className="flex flex-wrap gap-3">
          {productFamilies.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                activeId === item.id
                  ? "border-ink bg-ink text-alabaster"
                  : "border-sand bg-white/70 text-warmGray hover:bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-panel p-4 md:p-5">
            <div className="flex items-center justify-between gap-4 px-2 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">
                  Presentation produit
                </p>
                <h3 className="mt-2 font-serif text-3xl">{activeProduct.title}</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-warmGray">
                0{activeIndex + 1}
              </span>
            </div>

            <div className="relative">
              <PremiumArtwork
                variant={activeProduct.variant}
                className="h-[220px] md:h-[300px]"
                disableScrollMotion
              />
              <div className="mt-5 h-1 rounded-full bg-sand/60">
                <div
                  className="h-full rounded-full bg-ink transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / productFamilies.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <article className="rounded-[1.75rem] border border-ink/20 bg-white/88 p-6 shadow-soft md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              {activeProduct.label}
            </p>
            <h3 className="mt-3 font-serif text-3xl">{activeProduct.title}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.11em] text-warmGray">
              {activeProduct.subtitle}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-warmGray">{activeProduct.desc}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {activeProduct.bullets.map((line) => (
                <div
                  key={line}
                  className="rounded-xl border border-ink/15 bg-alabaster/95 px-4 py-3 text-sm text-warmGray"
                >
                  {line}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="section-divider mt-14" />
    </section>
  );
}

export default SolutionsSection;
