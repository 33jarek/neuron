const Logos = {
  wi: {
    src: "/wi.png",
    alt: "Wydział informatyki",
    to: "https://wi.umg.edu.pl/",
  },
  umg: {
    src: "/umg.png",
    alt: "Uniwersytet Morski w Gdyni",
    to: "https://www.umg.edu.pl/",
  },
} as const;

type LogoName = keyof typeof Logos;

type LogoProps = {
  name: LogoName;
  height?: number | string;
  className?: string;
};

export const Logo = ({ name, className = "", height }: LogoProps) => {
  const logo = Logos[name];

  const style = height
    ? { height: typeof height === "number" ? `${height}px` : height }
    : undefined;

  return (
    <a
      href={logo.to}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        style={style}
        className={`w-auto object-contain transition-opacity duration-300 opacity-85 hover:opacity-100 ${!height && !className.includes("h-") ? "h-12" : ""} ${className}`.trim()}
      />
    </a>
  );
};
