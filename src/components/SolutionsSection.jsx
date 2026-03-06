import { motion } from "framer-motion";
import PremiumArtwork from "./PremiumArtwork";

const solutions = [
  {
    title: "Collection Chambre",
    desc: "Brume textile, nettoyant surfaces délicates et concentré salle de bain à faible impact.",
  },
  {
    title: "Collection Espaces Communs",
    desc: "Formules professionnelles pour marbre, bois verni, laiton et verre à fort passage.",
  },
  {
    title: "Collection Spa & Bien-être",
    desc: "Nettoyage doux haute tolérance pour cabines, vestiaires et zones humides sensibles.",
  },
];

function SolutionsSection() {
  return (
    <section id="solutions" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Solutions et produits</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          Des protocoles prêts à déployer, ajustés à votre maison
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mt-8"
      >
        <PremiumArtwork variant="products" className="h-[230px] md:h-[270px]" />
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {solutions.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-premium"
          >
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-warmGray">{item.desc}</p>
          </motion.article>
        ))}
      </div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default SolutionsSection;
