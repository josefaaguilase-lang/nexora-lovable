import { Reveal } from "@/hooks/use-reveal";

const cases = [
  {
    label: "Escenario A",
    title: "Feria en 20 días",
    intro:
      "Una empresa confirma su participación con tres semanas de margen. No hay stand, ni gráfica, ni material de mano.",
    steps: [
      { t: "Día 1–2", d: "Medidas del espacio, reglas del recinto y objetivo real: captar contactos calificados." },
      { t: "Día 3–5", d: "Propuesta de estructura modular, gráfica de gran formato y dos piezas de captación." },
      { t: "Día 6–10", d: "Producción paralela: estructura en red externa, piezas de mano en Lab propio." },
      { t: "Día 11–16", d: "Muestras aprobadas, impresión final, empaque por bulto y checklist de montaje." },
      { t: "Día 17–19", d: "Transporte, montaje y prueba de luces con un responsable en sitio." },
      { t: "Día 20", d: "Feria operativa. Reposición diaria de material y retiro coordinado al cierre." },
    ],
  },
  {
    label: "Escenario B",
    title: "Onboarding de 50 colaboradores",
    intro:
      "Ingresos escalonados durante un trimestre, en tres ciudades, con la misma experiencia para todos.",
    steps: [
      { t: "Definición", d: "Perfil de los ingresos, presupuesto por kit y mensaje que debe transmitir." },
      { t: "Curaduría", d: "Selección de cinco piezas útiles: una de ellas exclusiva, producida en el Lab." },
      { t: "Muestra", d: "Kit piloto armado y fotografiado para aprobación antes de la serie." },
      { t: "Producción", d: "Personalización nominal, control por unidad y empaque en caja propia." },
      { t: "Logística", d: "Stock reservado y despachos por tanda según fecha de ingreso de cada persona." },
      { t: "Seguimiento", d: "Reporte de entregas, reposición y ajuste del kit para la siguiente tanda." },
    ],
  },
];

export function Cases() {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-primary">Así pensamos una solución</p>
          <h2 className="mt-6 max-w-[24ch] font-display text-[clamp(2.2rem,7vw,5.5rem)]">
            Dos escenarios, contados paso a paso
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Escenarios conceptuales para mostrar el razonamiento y la logística detrás de una
            solución completa. Sin logos ni testimonios de terceros.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {cases.map((c, ci) => (
            <Reveal key={c.title} delay={ci * 120} className="min-w-0">
              <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                {c.label}
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)]">{c.title}</h3>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{c.intro}</p>
              <ol className="mt-10 border-l border-border">
                {c.steps.map((s) => (
                  <li key={s.t} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute top-2 -left-[3.5px] h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="font-display text-sm tracking-[0.08em]">{s.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
