function Footer() {
  return (
    <footer className="border-t border-sand/70 py-10">
      <div className="mx-auto grid w-[min(1150px,92%)] gap-6 text-sm text-warmGray md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-serif text-2xl text-ink">Maison Albea</p>
          <p className="mt-2 max-w-xl leading-relaxed">
            Solutions menageres ecologiques pour l'hotellerie de prestige. Conseil,
            formation, programme pilote et deploiement operationnel.
          </p>
        </div>
        <div className="grid gap-2 md:justify-items-end">
          <p>contact@maisonalbea.fr</p>
          <p>Paris | Menton | Geneve</p>
          <a href="#contact" className="link-underline text-ink">
            Demander un rendez-vous
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
