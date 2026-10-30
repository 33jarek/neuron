import { createFileRoute } from "@tanstack/react-router";
import TechText from "../components/TechText";
import { Header } from "../components/header/Header";
import { Background } from "../components/landing/Background";

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
        <div className="w-full flex justify-center p-8">
          <Header />
        </div>
      </main>
    </div>
  );
}
