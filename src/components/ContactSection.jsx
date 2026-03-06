import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 rounded-3xl border border-sand/70 bg-alabaster/80 p-8 md:grid-cols-[0.95fr_1.05fr] md:p-12"
      >
        <div>
          <p className="kicker">Contact B2B</p>
          <h2 className="font-serif text-4xl md:text-5xl">Planifions une rencontre.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-warmGray">
            Échangez avec notre équipe pour étudier un déploiement adapté au niveau de service
            de votre établissement.
          </p>
          <div className="mt-7 rounded-2xl border border-sand/70 bg-white/50 p-5 text-sm text-warmGray">
            Réponse sous 24h ouvrées. Échange confidentiel et sans engagement.
          </div>
        </div>

        <form className="grid gap-4">
          <label className="text-sm font-medium text-warmGray" htmlFor="hotel">
            Établissement
          </label>
          <input id="hotel" type="text" required className="input-premium" />

          <label className="text-sm font-medium text-warmGray" htmlFor="name">
            Nom et fonction
          </label>
          <input id="name" type="text" required className="input-premium" />

          <label className="text-sm font-medium text-warmGray" htmlFor="email">
            E-mail professionnel
          </label>
          <input id="email" type="email" required className="input-premium" />

          <label className="text-sm font-medium text-warmGray" htmlFor="message">
            Votre besoin
          </label>
          <textarea id="message" rows="4" className="input-premium" />

          <button
            type="submit"
            className="mt-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-alabaster transition hover:bg-black"
          >
            Demander un échange
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactSection;
