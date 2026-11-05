import { createFileRoute } from "@tanstack/react-router";
import TechText from "../components/TechText";
import { Background } from "../components/landing/Background";
import { Sections } from "../components/landing/Sections";
import Waves from "../components/landing/LinesBackground";
import { PersonCard } from "../components/landing/PersonCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen w-full text-primary isolate overflow-x-hidden">
      <Background />
      <main className="relative z-10 w-full">
        <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 sm:p-8">
          <div className="relative h-[clamp(280px,55vw,480px)] w-full">
            <TechText
              text="neμron"
              fontWeight={600}
              fontSize={205}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="metrics"
              introDuration={2}
              clickKick={false}
              guides={false}
              fontFamily="GeistMono"
              accentColor="#6ee7f9"
              color="#e6edf5"
            />
          </div>
        </div>
        <div className="relative w-full">
          <div
            className="absolute -top-48 sm:-top-72 bottom-0 left-0 right-0 pointer-events-none -z-10 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          >
            <Waves
              lineColor="#3A7F85"
              accentColor="#6ee7f9"
              fade={0.3}
              spacing={12}
              amplitude={35}
              twist={1.2}
              speed={1.2}
              scale={1.1}
              variation={6}
              opacity={0.7}
              mouseInteraction={false}
              clickRipple={false}
            />
          </div>

          <div className="w-full mb-8">
            <Header />
          </div>

          <section
            id="onas"
            className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 font-[Inter]"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                Poznaj nasze sekcje
              </h2>
              <p className="text-muted text-base sm:text-xl max-w-2xl mx-auto">
                Rozwijaj się w przyszłościowych odłamach informatyki
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <Sections name="GameDev" direction="left" />
              <Sections name="AI" direction="right" />
              <Sections name="Kryptografia" direction="left" />
            </div>
          </section>

          <section
            id="zarzad"
            className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 font-[Inter]"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              Zarząd koła
            </h2>

            {/* TODO: https://api.github.com/orgs/kn-neuron-umg/teams/board -- automatycznie ma być */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center max-w-5xl mx-auto">
              <PersonCard name="Juliusz Losiński" role="Opiekun" />
              <PersonCard name="Mateusz Miller" role="Zastępca Opiekuna" />
              <PersonCard name="Jakub Przybylski" role="Przewodniczący" />
              <PersonCard name="Olivier Starostka" role="Skarbnik" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
