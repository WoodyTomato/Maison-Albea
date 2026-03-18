import { motion } from "framer-motion";
import PremiumArtwork from "./PremiumArtwork";

const notes = [
  {
    title: "Citron de Menton",
    text: "Une fraicheur lumineuse et nette, evocatrice de linge parfaitement prepare.",
  },
  {
    title: "The vert",
    text: "Un coeur vegetal apaisant qui apporte une sensation de proprete sophistiquee.",
  },
  {
    title: "Musc blanc",
    text: "Un fond doux, enveloppant et durable pour signer les espaces sans saturation.",
  },
];

function FragranceSection() {
  return (
    <section id="signature" className="section-shell">
      <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <PremiumArtwork variant="fragrance" className="aspect-[4/5]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker">Signature olfactive</p>
          <h2 className="font-serif text-4xl md:text-5xl">Citron de Menton, the vert, musc blanc</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-warmGray">
            Une trilogie sensorielle pensee pour accompagner discretement les rituels de
            proprete et renforcer la perception d'un luxe serein.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {notes.map((note, index) => (
          <motion.article
            key={note.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-premium"
          >
            <h3 className="font-serif text-2xl">{note.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-warmGray">{note.text}</p>
          </motion.article>
        ))}
      </div>
      <div className="section-divider mt-14" />
    </section>
  );
}

export default FragranceSection;
