import { motion } from "framer-motion";

function ConceptSection() {
  return (
    <section id="concept" className="section-shell-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p className="kicker">Le concept</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Une gestuelle d'entretien pensée comme une extension de l'expérience client.
          </h2>
        </div>

        <div className="card-premium space-y-5 text-warmGray">
          <p className="leading-relaxed">
            Nous formulons des nettoyants écologiques haute performance adaptés aux standards
            de l'hôtellerie premium: surfaces nobles, chambres, espaces bien-être et lieux de
            passage intensif.
          </p>
          <p className="leading-relaxed">
            Chaque formule s'inscrit dans une esthétique olfactive maîtrisée, afin que la
            propreté perçue soit aussi sensorielle que visuelle.
          </p>
          <div className="grid gap-2 border-t border-sand/70 pt-5 text-sm">
            <p>Protocoles sur mesure pour housekeeping</p>
            <p>Compatibilité avec matériaux délicats</p>
            <p>Positionnement luxe discret</p>
          </div>
        </div>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default ConceptSection;
