import { Icon } from "../Icon";

const section = {
  GameDev: {
    name: "Gry komputerowe",
    desc: "Implementujemy własne gry: od pierwszego pomysłu i prototypu, przez mechanikę rozgrywki, grafikę i dźwięk, aż po gotową, grywalną wersję. Pracujemy w silnikach takich jak Unity, Unreal Engine i Godot, uczymy się programowania rozgrywki, fizyki, projektowania poziomów oraz optymalizacji. Bierzemy udział w game jamach, testujemy nawzajem swoje produkcje i dzielimy się doświadczeniem. To miejsce dla programistów, grafików, projektantów i wszystkich, którzy chcą zobaczyć, jak powstaje gra od kuchni.",
    icon: "gamepad",
  },
  AI: {
    name: "Sztuczna Inteligencja",
    desc: "Poznajemy w praktyce uczenie maszynowe, sieci neuronowe i głębokie uczenie. Budujemy modele do rozpoznawania obrazów, przetwarzania języka naturalnego i analizy danych, korzystając z Pythona oraz bibliotek takich jak PyTorch, TensorFlow i scikit-learn. Eksperymentujemy z dużymi modelami językowymi, uczeniem ze wzmocnieniem i agentami AI, także w grach. Realizujemy wspólne projekty, omawiamy publikacje naukowe i uczymy się, jak odpowiedzialnie wykorzystywać AI do rozwiązywania prawdziwych problemów.",
    icon: "stars",
  },
  Kryptografia: {
    name: "Kryptografia",
    desc: "Zgłębiamy tajniki nowoczesnej kryptografii, bezpieczeństwa systemów komputerowych i sieciowych. Badamy algorytmy szyfrowania, protokoły bezpiecznej komunikacji, architekturę blockchain oraz technologie ochrony prywatności. Analizujemy podatności, uczymy się zasad bezpiecznego tworzenia oprogramowania i bierzemy udział w zawodach typu CTF.",
    icon: "lock",
  },
} as const;

type sectionName = keyof typeof section;

type SectionProps = {
  name: sectionName;
  direction?: "left" | "right";
};

export const Sections = ({ name, direction = "left" }: SectionProps) => {
  const sectionData = section[name];
  const isRight = direction === "right";

  const bgClass = isRight
    ? "bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl"
    : "bg-card/70 backdrop-blur-md border border-white/10 shadow-2xl";

  return (
    <div className={`w-full flex ${isRight ? "justify-end" : "justify-start"}`}>
      <article
        className={`w-full max-w-3xl lg:max-w-4xl rounded-2xl px-6 py-4 sm:px-8 sm:py-4 shadow-lg font-[Inter] ${bgClass} ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`flex items-center gap-3 mb-1.5 ${
            isRight ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Icon name={sectionData.icon} className="text-white h-7 w-7 shrink-0" />
          <h3 className="text-xl sm:text-2xl font-bold text-primary">
            {sectionData.name}
          </h3>
        </div>
        <p className="text-muted text-sm sm:text-base leading-normal">
          {sectionData.desc}
        </p>
      </article>
    </div>
  );
};
