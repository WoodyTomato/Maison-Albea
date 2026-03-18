import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    hotel: "",
    name: "",
    email: "",
    scope: "Pilotage sur site",
    message: "",
  });
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end end"],
  });
  const shellYRaw = useTransform(scrollYProgress, [0, 1], [34, -12]);
  const shellOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 1], [0.55, 1, 1]);
  const glowScaleRaw = useTransform(scrollYProgress, [0, 1], [0.9, 1.15]);
  const shellY = useSpring(shellYRaw, { stiffness: 120, damping: 24, mass: 0.45 });
  const shellOpacity = useSpring(shellOpacityRaw, { stiffness: 120, damping: 24, mass: 0.45 });
  const glowScale = useSpring(glowScaleRaw, { stiffness: 110, damping: 25, mass: 0.55 });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((current) => ({ ...current, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Demande de contact - ${formData.hotel}`);
    const body = encodeURIComponent(
      [
        `Etablissement: ${formData.hotel}`,
        `Nom et fonction: ${formData.name}`,
        `Email: ${formData.email}`,
        `Besoin principal: ${formData.scope}`,
        "",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:contact@maisonalbea.fr?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={sectionRef} className="section-shell">
      <motion.div
        style={shouldReduceMotion ? undefined : { y: shellY, opacity: shellOpacity }}
        className="scroll-stage relative grid gap-8 overflow-hidden rounded-3xl border border-sand/70 bg-alabaster/80 p-8 md:grid-cols-[0.95fr_1.05fr] md:p-12"
      >
        <motion.div
          aria-hidden
          style={shouldReduceMotion ? undefined : { scale: glowScale }}
          className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full bg-sage/35 blur-3xl"
        />

        <div>
          <ScrollReveal as={motion.p} className="kicker" distance={12}>
            Contact B2B
          </ScrollReveal>
          <ScrollReveal as={motion.h2} delay={0.05} className="font-serif text-4xl md:text-5xl">
            Planifions un premier echange.
          </ScrollReveal>
          <ScrollReveal
            as={motion.p}
            delay={0.1}
            className="mt-5 max-w-md leading-relaxed text-warmGray"
          >
            Echangez avec notre equipe pour cadrer un pilote, recevoir une valisette test ou
            discuter d'un deploiement adapte au niveau de service de votre etablissement.
          </ScrollReveal>
          <ScrollReveal
            delay={0.16}
            className="mt-7 rounded-2xl border border-sand/70 bg-white/50 p-5 text-sm text-warmGray"
          >
            Reponse sous 24h ouvrees. Le formulaire ouvre votre messagerie avec la demande
            pre-remplie.
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-5 grid gap-3 text-sm text-warmGray">
            <div className="rounded-2xl border border-sand/70 bg-white/50 px-4 py-4">
              contact@maisonalbea.fr
            </div>
            <div className="rounded-2xl border border-sand/70 bg-white/50 px-4 py-4">
              Paris, Menton, Geneve
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          as={motion.form}
          delay={0.08}
          className="grid gap-4"
          onSubmit={handleSubmit}
        >
          <label className="text-sm font-medium text-warmGray" htmlFor="hotel">
            Etablissement
          </label>
          <input
            id="hotel"
            type="text"
            required
            value={formData.hotel}
            onChange={handleChange}
            className="input-premium"
          />

          <label className="text-sm font-medium text-warmGray" htmlFor="name">
            Nom et fonction
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-premium"
          />

          <label className="text-sm font-medium text-warmGray" htmlFor="email">
            E-mail professionnel
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-premium"
          />

          <label className="text-sm font-medium text-warmGray" htmlFor="scope">
            Besoin principal
          </label>
          <select
            id="scope"
            value={formData.scope}
            onChange={handleChange}
            className="input-premium"
          >
            <option>Pilotage sur site</option>
            <option>Valisette test</option>
            <option>Demande de presentation</option>
            <option>Deploiement multi-sites</option>
          </select>

          <label className="text-sm font-medium text-warmGray" htmlFor="message">
            Votre besoin
          </label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="input-premium"
            placeholder="Nombre de chambres, zones concernees, calendrier souhaite..."
          />

          <button
            type="submit"
            className="mt-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-alabaster transition hover:bg-black"
          >
            Ouvrir la demande par email
          </button>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}

export default ContactSection;
