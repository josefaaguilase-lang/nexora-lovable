import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/nexora/Header";
import { Hero } from "@/components/nexora/Hero";
import { Manifesto } from "@/components/nexora/Manifesto";
import { Solutions } from "@/components/nexora/Solutions";
import { Lab } from "@/components/nexora/Lab";
import { Method } from "@/components/nexora/Method";
import { Builder } from "@/components/nexora/Builder";
import { Cases } from "@/components/nexora/Cases";
import { Capabilities } from "@/components/nexora/Capabilities";
import { FinalCTA, Footer } from "@/components/nexora/FinalCTA";

const title = "NEXORA — Partner de soluciones B2B";
const description =
  "Dinos qué necesitas y vemos cómo hacerlo: diseño, producción propia, red especializada y logística para onboarding, ferias, regalos corporativos y eventos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Solutions />
        <Lab />
        <Method />
        <Builder />
        <Cases />
        <Capabilities />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
