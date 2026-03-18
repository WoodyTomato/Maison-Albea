import { useEffect, useState } from "react";

const navItems = [
  { label: "Concept", href: "#concept" },
  { label: "Signature", href: "#signature" },
  { label: "Produits", href: "#solutions" },
  { label: "Hotels", href: "#hotels" },
  { label: "Programme pilote", href: "#programme" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const trackedSections = navItems
      .map((item) => ({ href: item.href, element: document.querySelector(item.href) }))
      .filter((item) => item.element);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentHref = navItems[0].href;

      for (const section of trackedSections) {
        if (section.element.offsetTop <= marker) {
          currentHref = section.href;
        }
      }

      setActiveHref((prev) => (prev === currentHref ? prev : currentHref));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-b border-sand/70 bg-alabaster/92 py-3 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-[min(1150px,92%)] items-center justify-between gap-4">
          <a href="#hero" className="font-serif text-2xl tracking-wide text-ink md:text-3xl">
            Maison Albea
          </a>

          <nav className="hidden gap-7 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`link-underline transition-colors duration-300 ${
                  activeHref === item.href ? "text-ink" : "text-warmGray"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-sand/80 bg-alabaster/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-warmGray md:inline-flex">
              Hotellerie 4-5 etoiles
            </span>
            <a
              href="#contact"
              className="hidden rounded-full border border-ink/15 bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-alabaster transition hover:bg-black sm:inline-flex"
            >
              Nous rencontrer
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand/80 bg-alabaster/80 text-ink lg:hidden"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-b border-sand/70 bg-alabaster/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid w-[min(1150px,92%)] gap-2 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                activeHref === item.href ? "bg-ink text-alabaster" : "bg-white/70 text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-2xl border border-ink/15 bg-ink px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-alabaster"
          >
            Demander un rendez-vous
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
