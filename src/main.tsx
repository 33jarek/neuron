import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { useHotkey } from "@tanstack/react-hotkeys";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./styles/global.css";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function EasterEggHotkey() {
  const [isVisible, setIsVisible] = useState(false);

  useHotkey(
    ["7", "7", "7"],
    () => {
      setIsVisible(true);
    },
    { timeout: 1200 },
  );

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-black/85 font-[Arial] text-2xl text-white">
      <h3 className="mb-[30px] text-center text-5xl font-bold text-[#ffcc00] [text-shadow:2px_2px_5px_#000]">
        Neuron 777
      </h3>
      <div>
        <button
          type="button"
          onClick={() => {
            window.location.href = "https://www.totalcasino.pl/";
          }}
          className="m-[5px] rounded-lg border-0 bg-[#ffcc00] px-[25px] py-[10px] text-xl font-bold text-[#333] transition duration-100 hover:scale-105 hover:bg-[#ffaa00]"
        >
          SPIN
        </button>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="m-[5px] rounded-lg border-0 bg-[#ffcc00] px-[25px] py-[10px] text-xl font-bold text-[#333] transition duration-100 hover:scale-105 hover:bg-[#ffaa00]"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <EasterEggHotkey />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
