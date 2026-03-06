import { useEffect, useState } from "react";

const navItems = [
  { label: "Concept", href: "#concept" },
  { label: "Produits", href: "#solutions" },
  { label: "Hôtels", href: "#hotels" },
  { label: "Programme pilote", href: "#programme" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-sand/70 bg-alabaster/90 py-3 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-[min(1150px,92%)] items-center justify-between gap-4">
        <a href="#hero" className="font-serif text-2xl tracking-wide text-ink md:text-3xl">
          Maison Albéa
        </a>

        <nav className="hidden gap-7 text-sm font-medium text-warmGray lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="link-underline">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-sand/80 bg-alabaster/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-warmGray md:inline-flex">
            Hôtellerie 4-5 étoiles
          </span>
          <a
            href="#contact"
            className="rounded-full border border-ink/15 bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-alabaster transition hover:bg-black"
          >
            Nous rencontrer
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
