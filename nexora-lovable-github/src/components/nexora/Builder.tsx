import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";

const needs = [
  "Onboarding",
  "Ferias & Congresos",
  "Regalos Corporativos",
  "Branding de Espacios",
  "Eventos Corporativos",
  "Campañas & Lanzamientos",
];
const goals = [
  "Impresionar a un cliente o invitado",
  "Cuidar y fidelizar al equipo interno",
  "Captar contactos y generar demanda",
  "Reforzar la marca en un espacio",
  "Lanzar un producto o servicio",
];
const quantities = ["1 – 25", "26 – 100", "101 – 500", "Más de 500", "Aún no lo sé"];
const deadlines = ["Menos de 15 días", "15 a 30 días", "1 a 2 meses", "Más de 2 meses", "Fecha abierta"];
const budgets = [
  "Hasta 1.000 USD",
  "1.000 – 5.000 USD",
  "5.000 – 15.000 USD",
  "Más de 15.000 USD",
  "Prefiero conversarlo",
];

type Data = {
  need: string;
  goal: string;
  quantity: string;
  deadline: string;
  budget: string;
  name: string;
  company: string;
  email: string;
  notes: string;
};

const empty: Data = {
  need: "",
  goal: "",
  quantity: "",
  deadline: "",
  budget: "",
  name: "",
  company: "",
  email: "",
  notes: "",
};

const steps = ["Necesidad", "Objetivo", "Cantidad", "Plazo", "Presupuesto", "Contacto"];

export function Builder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [done, setDone] = useState(false);

  const set = (patch: Partial<Data>) => setData((d) => ({ ...d, ...patch }));
  const pick = (patch: Partial<Data>) => {
    set(patch);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const contactReady = data.name.trim() !== "" && data.email.trim() !== "";

  const options = (
    items: string[],
    key: keyof Data,
    cols = "sm:grid-cols-2 lg:grid-cols-3",
  ) => (
    <div className={`grid gap-px bg-border ${cols}`}>
      {items.map((item) => {
        const active = data[key] === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => pick({ [key]: item } as Partial<Data>)}
            className={`group flex items-center justify-between gap-4 p-6 text-left transition-colors duration-300 ${
              active
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-petrol hover:text-cream"
            }`}
          >
            <span className="font-display text-base tracking-normal">{item}</span>
            <span className="text-lg opacity-40 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        );
      })}
    </div>
  );

  const summary: Array<[string, string]> = [
    ["Necesidad base", data.need],
    ["Objetivo", data.goal],
    ["Cantidad estimada", data.quantity],
    ["Plazo", data.deadline],
    ["Presupuesto", data.budget],
    ["Contacto", `${data.name}${data.company ? ` · ${data.company}` : ""} · ${data.email}`],
  ];

  return (
    <section id="constructor" className="border-b border-border bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-primary">Constructor de necesidades</p>
            <h2 className="mt-6 max-w-[22ch] font-display text-[clamp(2.2rem,7vw,5.5rem)]">
              Arma tu solución en seis pasos
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-sm text-muted-foreground lg:text-right">
            <p>
              Responde con lo que sepas hoy. Al final verás un resumen estructurado listo para
              enviarnos.
            </p>
          </Reveal>
        </div>

        {done ? (
          <div className="mt-16 border border-petrol bg-background">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border p-8 md:p-10">
              <h3 className="font-display text-[clamp(1.6rem,4vw,2.8rem)]">
                Resumen de tu solución
              </h3>
              <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                Borrador · sin enviar
              </span>
            </div>
            <dl className="divide-y divide-border">
              {summary.map(([k, v]) => (
                <div key={k} className="grid gap-1 p-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-8 md:py-6">
                  <dt className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {k}
                  </dt>
                  <dd className="font-display text-lg tracking-normal normal-case">
                    {v || "Por definir"}
                  </dd>
                </div>
              ))}
              {data.notes.trim() !== "" && (
                <div className="grid gap-1 p-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-8 md:py-6">
                  <dt className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Detalle adicional
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{data.notes}</dd>
                </div>
              )}
            </dl>
            <div className="flex flex-wrap items-center gap-4 border-t border-border p-8 md:p-10">
              <a
                href={`mailto:hola@nexora.studio?subject=${encodeURIComponent(
                  `Solución NEXORA · ${data.need || "Nueva necesidad"}`,
                )}&body=${encodeURIComponent(
                  summary.map(([k, v]) => `${k}: ${v || "Por definir"}`).join("\n") +
                    (data.notes ? `\n\nDetalle: ${data.notes}` : ""),
                )}`}
                className="bg-primary px-8 py-4 text-[0.8rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Enviar por correo →
              </a>
              <button
                type="button"
                onClick={() => {
                  setData(empty);
                  setStep(0);
                  setDone(false);
                }}
                className="link-underline text-[0.8rem] font-semibold tracking-[0.12em] uppercase"
              >
                Empezar de nuevo
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-16">
            <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5">
              {steps.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => i <= step && setStep(i)}
                  className={`text-[0.7rem] tracking-[0.18em] uppercase transition-colors ${
                    i === step
                      ? "text-primary"
                      : i < step
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-muted-foreground/50"
                  }`}
                >
                  <span className="mr-2">0{i + 1}</span>
                  {s}
                </button>
              ))}
            </div>

            <div className="relative mt-6 h-px w-full bg-border">
              <div
                className="absolute top-0 left-0 h-px bg-primary transition-[width] duration-700 ease-out"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div className="mt-12">
              {step === 0 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿Cuál es tu necesidad base?
                  </h3>
                  <div className="mt-8">{options(needs, "need")}</div>
                </>
              )}

              {step === 1 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿Qué querés lograr con esto?
                  </h3>
                  <div className="mt-8">{options(goals, "goal", "sm:grid-cols-2")}</div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿Cantidad estimada de unidades o personas?
                  </h3>
                  <div className="mt-8">{options(quantities, "quantity", "sm:grid-cols-3")}</div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿En qué plazo lo necesitás?
                  </h3>
                  <div className="mt-8">{options(deadlines, "deadline", "sm:grid-cols-3")}</div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿Rango de presupuesto?
                  </h3>
                  <div className="mt-8">{options(budgets, "budget", "sm:grid-cols-2 lg:grid-cols-3")}</div>
                </>
              )}

              {step === 5 && (
                <>
                  <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)]">
                    ¿Con quién hablamos?
                  </h3>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Nombre *
                      </span>
                      <input
                        value={data.name}
                        onChange={(e) => set({ name: e.target.value })}
                        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none focus:border-primary"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Empresa
                      </span>
                      <input
                        value={data.company}
                        onChange={(e) => set({ company: e.target.value })}
                        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none focus:border-primary"
                      />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Email *
                      </span>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => set({ email: e.target.value })}
                        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none focus:border-primary"
                      />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                        Algo más que debamos saber
                      </span>
                      <textarea
                        rows={3}
                        value={data.notes}
                        onChange={(e) => set({ notes: e.target.value })}
                        className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 outline-none focus:border-primary"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    disabled={!contactReady}
                    onClick={() => setDone(true)}
                    className="mt-10 bg-primary px-8 py-4 text-[0.8rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Ver resumen →
                  </button>
                </>
              )}

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="link-underline mt-10 block text-[0.75rem] tracking-[0.18em] text-muted-foreground uppercase"
                >
                  ← Paso anterior
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
