import onboarding from "@/assets/sol-onboarding.jpg";
import ferias from "@/assets/sol-ferias.jpg";
import regalos from "@/assets/sol-regalos.jpg";
import espacios from "@/assets/sol-espacios.jpg";
import eventos from "@/assets/sol-eventos.jpg";
import campanas from "@/assets/sol-campanas.jpg";
import { Reveal } from "@/hooks/use-reveal";

const solutions = [
  {
    num: "01",
    title: "Onboarding",
    lead: "Que el primer día se sienta preparado, no improvisado.",
    body: "Kits de bienvenida coherentes con la cultura de la empresa: selección de piezas, personalización por persona, empaque final y envío al domicilio o a la oficina.",
    tags: ["Kits por persona", "Personalización nominal", "Envío distribuido"],
    image: onboarding,
    alt: "Kit de bienvenida corporativo con libreta, tote y botella",
  },
  {
    num: "02",
    title: "Ferias & Congresos",
    lead: "Un stand no es un mueble: es una operación.",
    body: "Estructura, gráfica de gran formato, material de mano, merchandising de captación y montaje coordinado con los plazos y reglas del recinto.",
    tags: ["Estructura y gráfica", "Material de mano", "Montaje en sitio"],
    image: ferias,
    alt: "Stand modular en petróleo oscuro con panel naranja",
  },
  {
    num: "03",
    title: "Regalos Corporativos",
    lead: "Regalar bien es una decisión de marca.",
    body: "Curaduría por perfil de destinatario, piezas útiles y bien hechas, packaging propio y control de tiempos para fechas que no se mueven.",
    tags: ["Curaduría por perfil", "Packaging propio", "Series cortas"],
    image: regalos,
    alt: "Set de regalo corporativo premium con caja rígida y objetos",
  },
  {
    num: "04",
    title: "Branding de Espacios",
    lead: "El espacio comunica antes que cualquier presentación.",
    body: "Señalética, vinilos, murales, volumétricos y aplicaciones de marca resueltas con medición previa, prototipo y instalación limpia.",
    tags: ["Señalética", "Gran formato", "Instalación"],
    image: espacios,
    alt: "Oficina con muro petróleo y gráfica geométrica naranja",
  },
  {
    num: "05",
    title: "Eventos Corporativos",
    lead: "Todo lo que se ve, se toca y se entrega.",
    body: "Escenografía, credenciales, ambientación, obsequios para asistentes y logística por bloques horarios, con un solo interlocutor durante el evento.",
    tags: ["Escenografía", "Credenciales", "Logística por bloques"],
    image: eventos,
    alt: "Escenografía de evento corporativo con luz naranja",
  },
  {
    num: "06",
    title: "Campañas & Lanzamientos",
    lead: "Una idea sostenida en objetos reales.",
    body: "Kits de prensa, piezas para influencers, materiales de punto de venta y producciones especiales cuando el objeto tiene que existir por primera vez.",
    tags: ["Kits de prensa", "Punto de venta", "Piezas especiales"],
    image: campanas,
    alt: "Kit de prensa con caja rígida y papel de seda naranja",
  },
];

export function Solutions() {
  return (
    <section id="soluciones" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 md:px-10 md:pt-32">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-primary">Soluciones</p>
            <h2 className="mt-6 max-w-[18ch] font-display text-[clamp(2.2rem,7vw,5.5rem)]">
              Seis territorios, una misma forma de resolver
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-sm text-muted-foreground lg:text-right">
            <p>
              Cada necesidad entra por un territorio y sale como una solución armada:
              piezas definidas, producción asignada, tiempos y entrega.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-border">
          {solutions.map((s, i) => (
            <article
              key={s.num}
              className="grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-[clamp(3rem,8vw,7rem)] text-primary">
                    {s.num}
                  </span>
                  <span className="mt-4 hidden h-px flex-1 bg-border md:block" />
                </div>
                <h3 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,3.4rem)]">
                  {s.title}
                </h3>
                <p className="mt-6 max-w-lg font-display text-lg tracking-normal normal-case md:text-2xl">
                  {s.lead}
                </p>
                <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] tracking-[0.16em] uppercase">
                  {s.tags.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-foreground/70">
                      <span className="h-1 w-1 bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={120}
                className={`min-w-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="group relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
