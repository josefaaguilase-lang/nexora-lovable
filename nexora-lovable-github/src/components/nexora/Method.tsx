import { Reveal } from "@/hooks/use-reveal";

const stages = [
  { n: "01", title: "Entendemos", body: "Qué tiene que lograr, para quién y cuándo. Sin briefs eternos." },
  { n: "02", title: "Diseñamos", body: "Propuesta de piezas, materiales y personalización con criterio de marca." },
  { n: "03", title: "Conectamos", body: "Asignamos cada pieza a producción propia o a la red externa correcta." },
  { n: "04", title: "Producimos", body: "Control de calidad por lote, muestras y ajustes antes de la serie final." },
  { n: "05", title: "Coordinamos", body: "Tiempos, empaque, permisos, transporte y montaje en un solo calendario." },
  { n: "06", title: "Entregamos", body: "Completo, en fecha y en el lugar acordado. Con cierre y aprendizajes." },
];

export function Method() {
  return (
    <section id="metodo" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-primary">Cómo resolvemos</p>
          <h2 className="mt-6 max-w-[22ch] font-display text-[clamp(2.2rem,7vw,5.5rem)]">
            Un método continuo, no una lista de servicios
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute top-[9px] left-0 hidden h-px w-full bg-border lg:block" />
          <div className="absolute top-0 bottom-0 left-[9px] w-px bg-border lg:hidden" />
          <ol className="grid gap-12 lg:grid-cols-6 lg:gap-6">
            {stages.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative pl-9 lg:pl-0">
                <span className="absolute top-0 left-0 h-[19px] w-[19px] rounded-full border border-primary bg-background lg:relative lg:block">
                  <span className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                </span>
                <p className="mt-0 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase lg:mt-8">
                  {s.n}
                </p>
                <p className="mt-2 font-display text-xl">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
