import { Reveal } from "@/hooks/use-reveal";

const flow = ["Idea", "Diseño", "Producción", "Personalización", "Montaje", "Entrega"];

export function Manifesto() {
  return (
    <section className="bg-petrol text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-primary">Manifiesto</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-[24ch] font-display text-[clamp(2.2rem,7.5vw,6.5rem)]">
            Una necesidad. Un responsable.{" "}
            <span className="text-primary">Todas las capacidades</span> que hagan falta.
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-28">
          <div className="relative">
            <div className="absolute top-[7px] left-0 hidden h-px w-full bg-cream/25 md:block" />
            <div className="absolute top-0 bottom-0 left-[7px] w-px bg-cream/25 md:hidden" />
            <ol className="grid gap-10 md:grid-cols-6 md:gap-6">
              {flow.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 90} className="relative pl-8 md:pl-0">
                  <span className="absolute top-0 left-0 h-[15px] w-[15px] rounded-full border border-primary bg-petrol md:relative md:block" />
                  <span className="mt-0 block font-display text-xl md:mt-6">{step}</span>
                  <span className="mt-2 block text-xs tracking-[0.18em] text-cream/50 uppercase">
                    0{i + 1}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
