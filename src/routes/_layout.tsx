import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer";
import Waves from "../components/landing/LinesBackground";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="relative min-h-screen flex flex-col text-primary isolate overflow-x-hidden">
      <div className="relative flex-1 flex flex-col">
        {/* Waves background */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          <Waves
            lineColor="#3A7F85"
            accentColor="#38bdf8"
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

        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
