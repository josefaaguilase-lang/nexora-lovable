import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Método", href: "#metodo" },
  { label: "NEXORA Lab", href: "#lab" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 py-4 md:px-10 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-baseline gap-3">
          <span className="font-display text-2xl leading-none md:text-[1.75rem]">
            NEXORA
          </span>
          <span className="hidden truncate text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase sm:block">
            Partner de soluciones B2B
          </span>
        </a>

        <nav className="hidden justify-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.8rem] font-medium tracking-[0.12em] text-foreground/70 uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#constructor"
            className="hidden bg-primary px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 md:inline-block"
          >
            Construye tu solución →
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#constructor"
              onClick={() => setOpen(false)}
              className="mt-5 bg-primary px-6 py-4 text-center text-[0.8rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase"
            >
              Construye tu solución →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
