import { Reveal } from "@/hooks/use-reveal";

const own = [
  { t: "Impresión 3D Bambu Lab", d: "Multifilamento, alta precisión y capacidad para series cortas propias." },
  { t: "Sublimación", d: "Personalización a color sobre textil y objetos rígidos, unidad por unidad." },
  { t: "Armado de kits", d: "Empaque, numeración, nominación y control de calidad antes del despacho." },
  { t: "Prototipado", d: "Iteración rápida para validar forma, escala y encaje antes de producir." },
];

const network = [
  "Gran formato",
  "Corte láser",
  "CNC y carpintería",
  "Bordado",
  "Serigrafía",
  "Metalmecánica",
  "Textil técnico",
  "Encuadernación",
];

export function Capabilities() {
  return (
    <section id="capacidades" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-primary">Capacidades productivas</p>
            <h2 className="mt-6 max-w-[20ch] font-display text-[clamp(2.2rem,7vw,5.5rem)]">
              Producción propia + red especializada
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-sm text-muted-foreground lg:text-right">
            <p>
              Nuestro rol es de curador y orquestador técnico: decidimos qué se produce
              adentro, qué se deriva y bajo qué estándar se recibe.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 font-display text-sm">
                <span className="h-px w-10 bg-primary" /> Producción propia
              </p>
            </Reveal>
            <div className="mt-8 divide-y divide-border border-t border-border">
              {own.map((o, i) => (
                <Reveal key={o.t} delay={i * 80} className="grid gap-2 py-6 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-8">
                  <p className="font-display text-base">{o.t}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.d}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="flex items-center gap-4 font-display text-sm">
                <span className="h-px w-10 bg-primary" /> Red externa especializada
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {network.map((n) => (
                  <li
                    key={n}
                    className="border border-border px-4 py-2 text-[0.72rem] tracking-[0.14em] text-foreground/75 uppercase transition-colors duration-300 hover:border-primary hover:text-foreground"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 bg-petrol p-8 text-cream">
                <p className="font-display text-2xl">
                  Un solo responsable coordina todo el circuito
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  El cliente no gestiona proveedores, plazos cruzados ni retiros. Recibe una
                  solución completa, con un interlocutor y una fecha.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
