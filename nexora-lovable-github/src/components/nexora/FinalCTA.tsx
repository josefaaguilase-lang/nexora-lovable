import { Reveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  return (
    <section id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <Reveal>
          <h2 className="max-w-[26ch] font-display text-[clamp(2.3rem,8vw,7rem)]">
            No necesitas saber cómo hacerlo. Solo cuéntanos qué necesitas lograr.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <a
              href="#constructor"
              className="bg-petrol-deep px-8 py-4 text-[0.82rem] font-semibold tracking-[0.12em] text-cream uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Construye tu solución →
            </a>
            <a
              href="mailto:hola@nexora.studio"
              className="link-underline text-[0.82rem] font-semibold tracking-[0.12em] uppercase"
            >
              hola@nexora.studio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-petrol-deep text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">NEXORA</p>
            <p className="mt-3 text-[0.72rem] tracking-[0.18em] text-cream/50 uppercase">
              Partner de soluciones B2B
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              Diseño, producción propia y orquestación de una red especializada para
              resolver necesidades corporativas completas.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] text-cream/40 uppercase">Soluciones</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li><a className="link-underline" href="#soluciones">Onboarding</a></li>
              <li><a className="link-underline" href="#soluciones">Ferias & Congresos</a></li>
              <li><a className="link-underline" href="#soluciones">Regalos Corporativos</a></li>
              <li><a className="link-underline" href="#soluciones">Branding de Espacios</a></li>
              <li><a className="link-underline" href="#soluciones">Eventos Corporativos</a></li>
              <li><a className="link-underline" href="#soluciones">Campañas & Lanzamientos</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] text-cream/40 uppercase">Estudio</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li><a className="link-underline" href="#metodo">Método</a></li>
              <li><a className="link-underline" href="#lab">NEXORA Lab</a></li>
              <li><a className="link-underline" href="#capacidades">Capacidades</a></li>
              <li><a className="link-underline" href="#constructor">Constructor</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] text-cream/40 uppercase">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li><a className="link-underline" href="mailto:hola@nexora.studio">hola@nexora.studio</a></li>
              <li>Lunes a viernes · 9 a 18 h</li>
            </ul>
            <a
              href="#constructor"
              className="mt-8 inline-block border border-cream/30 px-6 py-3 text-[0.72rem] tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Construye tu solución →
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-8 text-[0.7rem] tracking-[0.16em] text-cream/40 uppercase">
          <span>© {new Date().getFullYear()} NEXORA</span>
          <span>Diseño · Producción · Logística</span>
        </div>
      </div>
    </footer>
  );
}
