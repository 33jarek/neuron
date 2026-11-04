import { createFileRoute } from "@tanstack/react-router";
import TechText from "../components/TechText";
import { HeaderLanding } from "../components/header/HeaderLanding";
import { Background } from "../components/landing/Background";
import { Sections } from "../components/landing/Sections";
import Waves from "../components/landing/LinesBackground";
import { PersonCard } from "../components/landing/PersonCard";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen w-full text-primary isolate">
      <Background />
      <main className="relative z-10">
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
          <div style={{ width: "100%", height: "480px", position: "relative" }}>
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
            className="absolute -top-72 bottom-0 left-0 right-0 pointer-events-none -z-10 overflow-hidden"
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
            <HeaderLanding />
          </div>

          <section
            id="onas"
            className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 font-[Inter]"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                Lorem ipsum
              </h2>
              <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto line-clamp-2">
                Lorem ipsum blah blah blah blah
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
            className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 font-[Inter]"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-center">
              Zarząd koła
            </h2>
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
