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
          <p className="kicker">À propos</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Une maison née entre laboratoire et hôtellerie.
          </h2>
        </div>
        <div className="space-y-5 text-warmGray">
          <p className="leading-relaxed">
            Maison Albéa a été fondée par une équipe issue des métiers de la formulation, de
            la gouvernance environnementale et des opérations hôtelières haut de gamme.
          </p>
          <p className="leading-relaxed">
            Notre conviction: la propreté professionnelle peut devenir un véritable langage de
            marque, en conjuguant précision technique, durabilité et émotion sensorielle.
          </p>
          <p className="border-t border-sand/70 pt-5 text-sm">
            Nous intervenons en conseil, formation et déploiement opérationnel.
          </p>
        </div>
      </motion.div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default AboutSection;
