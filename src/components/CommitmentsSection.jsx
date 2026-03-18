import { motion } from "framer-motion";

const commitments = [
  {
    title: "Formules biodegradables",
    text: "Tensioactifs selectionnes pour leur efficacite et leur profil environnemental controle.",
  },
  {
    title: "Tracabilite des matieres",
    text: "Chaine d'approvisionnement documentee et partenaires europeens privilegies.",
  },
  {
    title: "Eco-conception",
    text: "Formats concentres, recharges et reduction des volumes transportes.",
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
          L'exigence environnementale, sans compromis sur le resultat
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
