import lab from "@/assets/lab-3d.jpg";
import { Reveal } from "@/hooks/use-reveal";

const items = [
  {
    title: "Impresión 3D multifilamento",
    body: "Piezas en color y material combinados, sin adhesivos ni pintura posterior. Detalle fino y repetibilidad.",
  },
  {
    title: "Modelado y prototipado",
    body: "Del boceto al objeto en iteraciones cortas: validamos escala, encaje y tacto antes de producir la serie.",
  },
  {
    title: "Series pequeñas",
    body: "Tiradas de 10, 50 o 200 unidades que ningún catálogo cubre, con control unidad por unidad.",
  },
  {
    title: "Personalización técnica",
    body: "Numeración, nombres, encastres, soportes y adaptaciones específicas para cada proyecto.",
  },
];

export function Lab() {
  return (
    <section id="lab" className="relative overflow-hidden bg-petrol-deep text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow text-primary">NEXORA Lab</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 max-w-[20ch] font-display text-[clamp(2.2rem,7.5vw,6rem)]">
                Hay cosas que no existen en un catálogo.{" "}
                <span className="text-primary">Las hacemos.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl leading-relaxed text-cream/70">
                El Lab es nuestro taller interno: diseño 3D, prototipado rápido y producción
                de series pequeñas. Es donde una idea deja de ser una referencia de proveedor
                y se convierte en una pieza propia.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="min-w-0">
            <img
              src={lab}
              alt="Impresión 3D en proceso con filamento naranja"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-cream/15 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="bg-petrol-deep p-8">
              <p className="font-display text-lg">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
