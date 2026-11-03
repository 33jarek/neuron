import { Icon } from "../Icon";
import DecryptedText from "../DecryptingText";
import BlurText from "../BlurText";
import StrokeText from "../StrokeText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const section = {
  GameDev: {
    name: "Gry komputerowe",
    desc: "Implementujemy własne gry: od pierwszego pomysłu i prototypu, przez mechanikę rozgrywki, grafikę i dźwięk, aż po gotową, grywalną wersję. Pracujemy w silnikach takich jak Unity, Unreal Engine i Godot, uczymy się programowania rozgrywki, fizyki, projektowania poziomów oraz optymalizacji. Bierzemy udział w game jamach, testujemy nawzajem swoje produkcje i dzielimy się doświadczeniem. To miejsce dla programistów, grafików, projektantów i wszystkich, którzy chcą zobaczyć, jak powstaje gra od kuchni.",
    icon: "gamepad",
    effect: "stroke",
  },
  AI: {
    name: "Sztuczna Inteligencja",
    desc: "Poznajemy w praktyce uczenie maszynowe, sieci neuronowe i głębokie uczenie. Budujemy modele do rozpoznawania obrazów, przetwarzania języka naturalnego i analizy danych, korzystając z Pythona oraz bibliotek takich jak PyTorch, TensorFlow i scikit-learn. Eksperymentujemy z dużymi modelami językowymi, uczeniem ze wzmocnieniem i agentami AI, także w grach. Realizujemy wspólne projekty, omawiamy publikacje naukowe i uczymy się, jak odpowiedzialnie wykorzystywać AI do rozwiązywania prawdziwych problemów.",
    icon: "stars",
    effect: "blur",
  },
  Kryptografia: {
    name: "Kryptografia",
    desc: "Zgłębiamy tajniki nowoczesnej kryptografii, bezpieczeństwa systemów komputerowych i sieciowych. Badamy algorytmy szyfrowania, protokoły bezpiecznej komunikacji, architekturę blockchain oraz technologie ochrony prywatności. Analizujemy podatności i uczymy się zasad bezpiecznego tworzenia oprogramowania.",
    icon: "lock",
    effect: "decrypt",
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
    ? "bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl"
    : "bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl";

  return (
    <div className={`w-full flex ${isRight ? "justify-end" : "justify-start"}`}>
      <article
        className={`w-full max-w-3xl lg:max-w-4xl rounded-lg px-6 py-4 sm:px-8 sm:py-4 shadow-lg font-[Inter] ${bgClass} ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`flex items-center gap-3 mb-1.5 ${
            isRight ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Icon
            name={sectionData.icon}
            className="text-primary h-7 w-7 shrink-0"
          />
          {sectionData.effect === "stroke" && (
            <div
              role="heading"
              aria-level={3}
              className="text-xl sm:text-2xl font-bold text-primary max-w-[165px] sm:max-w-[195px] flex items-center"
            >
              <StrokeText
                text={sectionData.name}
                strokeColor="#3a7f85"
                strokeStyle="solid"
                strokeWidth={1.4}
                dashLength={10}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.05}
                ease="power2.out"
                trigger="scroll"
                fillMode="wipe"
                wipeFrom="left"
                fontSize={128}
                fontWeight="bold"
                fontFamily="Inter, sans-serif"
                letterSpacing={-2}
                marching={false}
                hoverRedraw={true}
                shadow={false}
                fillColor="#e6edf5"
                shadowColor="#3a7f85"
              />
            </div>
          )}

          {sectionData.effect === "decrypt" && (
            <div
              role="heading"
              aria-level={3}
              className="text-xl sm:text-2xl font-bold text-primary"
            >
              <DecryptedText
                text={sectionData.name}
                animateOn="inViewHover"
                effect="scramble"
                sequential={true}
                revealDirection="random"
                speed={70}
                maxIterations={10}
                hoverRadius={70}
                scrambleColor="#3a7f85"
                loop={false}
                loopDelay={2000}
                useOriginalCharsOnly={false}
                characters="0123456789ABCDEF"
                className="revealed"
                encryptedClassName="encrypted"
              />
            </div>
          )}

          {sectionData.effect === "blur" && (
            <div
              role="heading"
              aria-level={3}
              className="text-xl sm:text-2xl font-bold text-primary"
            >
              <BlurText
                text={sectionData.name}
                effect="tilt"
                animateBy="letters"
                direction="right"
                staggerFrom="start"
                trigger="view"
                delay={40}
                stepDuration={0.45}
                blur={8}
                distance={40}
                onAnimationComplete={handleAnimationComplete}
                focusOnHover
                fromColor="#3a7f85"
              />
            </div>
          )}

          {(sectionData.effect as string) === "none" && (
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              {sectionData.name}
            </h3>
          )}
        </div>
        <p className="text-muted text-sm sm:text-base leading-normal">
          {sectionData.desc}
        </p>
      </article>
    </div>
  );
};
