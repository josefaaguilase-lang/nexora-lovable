import heroCollage from "@/assets/hero-collage.jpg";
import { Reveal } from "@/hooks/use-reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1600px] items-end gap-14 px-5 pt-14 pb-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-24 lg:pb-24">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <span className="inline-block h-px w-12 bg-primary" />
              Partner de soluciones B2B
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-display text-[clamp(2.4rem,7.2vw,5.9rem)]">
              Dinos qué
              <br />
              necesitas.
              <br />
              <span className="text-primary">Nosotros</span> vemos
              <br />
              cómo hacerlo.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              No vendemos catálogos ni productos sueltos. Traducimos un objetivo de negocio
              en piezas, producción y logística: diseño, fabricación propia, red externa
              especializada y una sola persona responsable de que llegue completo y a tiempo.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#constructor"
                className="bg-primary px-8 py-4 text-[0.82rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Cuéntanos qué necesitas →
              </a>
              <a
                href="#soluciones"
                className="link-underline text-[0.82rem] font-semibold tracking-[0.12em] uppercase"
              >
                Explorar soluciones
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -top-6 right-0 hidden h-px w-2/3 bg-border lg:block" />
          <div className="relative ml-auto w-full max-w-[520px]">
            <div className="absolute -top-8 -left-10 hidden h-40 w-40 border border-primary/60 lg:block" />
            <img
              src={heroCollage}
              alt="Composición de piezas corporativas: carpeta, credencial, packaging y objeto impreso en 3D"
              width={1200}
              height={1500}
              className="relative w-full object-cover"
            />
            <div className="absolute -right-4 -bottom-8 bg-petrol px-6 py-5 text-cream md:-right-8">
              <p className="font-display text-3xl leading-none">01</p>
              <p className="mt-2 max-w-[13ch] text-[0.72rem] leading-snug tracking-[0.1em] uppercase">
                Un responsable por proyecto
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-wrap gap-x-10 gap-y-3 border-t border-border px-5 py-5 text-[0.72rem] tracking-[0.16em] text-muted-foreground uppercase md:px-10">
        <span>Diseño</span>
        <span>Producción propia</span>
        <span>Red especializada</span>
        <span>Personalización</span>
        <span>Montaje</span>
        <span>Entrega</span>
      </div>
    </section>
  );
}
