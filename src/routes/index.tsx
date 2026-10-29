import { createFileRoute, Link } from "@tanstack/react-router";
import GradientASCII from "../components/Asci";
import TechText from "../components/TechText";
import { Logo } from "../components/Logo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen w-full text-white isolate">
      <div className="absolute top-0 left-0 h-screen w-full -z-10 pointer-events-none overflow-hidden">
        <GradientASCII
          colors={["#111a26", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={16}
          density={0.57}
          glyphOpacity={1}
          gradientOpacity={0.55}
          mouseInteraction={false}
          scrambleRadius={0.08}
        />
      </div>

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
        <div className="w-full flex justify-center p-8">
          <header className="flex-col w-full items-center sm:flex-row">
            <div className="flex justify-around items-center w-full gap-12 sm:gap-16 md:gap-24">
              <Logo name="umg" height={128} />
              <Link to={"/"} className="font-[GeistMono] font-bold text-6xl">
                neμron
              </Link>
              <Logo name="wi" height={128} />
            </div>
            <div className="flex gap-16 items-center justify-center text-xl">
              #TODO: Jebnac jakies efekty i routy skonczyc
              <Link>Projekty</Link>
              <Link>Artykuły</Link>
              <Link>Spotkania</Link>
              <Link>Kontakt</Link>
            </div>
          </header>
        </div>
      </main>
    </div>
  );
}
