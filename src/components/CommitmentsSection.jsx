import { motion } from "framer-motion";

const commitments = [
  {
    title: "Formules biodégradables",
    text: "Tensioactifs sélectionnés pour leur efficacité et leur profil environnemental contrôlé.",
  },
  {
    title: "Traçabilité des matières",
    text: "Chaîne d'approvisionnement documentée et partenaires européens privilégiés.",
  },
  {
    title: "Éco-conception",
    text: "Formats concentrés, recharges et réduction des volumes transportés.",
  },
];

function CommitmentsSection() {
  return (
    <section id="engagements" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Engagements</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          L'exigence environnementale, sans compromis sur le résultat
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {commitments.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="card-premium"
          >
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-warmGray">{item.text}</p>
          </motion.article>
        ))}
      </div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default CommitmentsSection;
