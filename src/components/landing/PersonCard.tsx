type PersonCardProps = {
  role:
    | "Opiekun"
    | "Zastępca Opiekuna"
    | "Przewodniczący"
    | "Skarbnik"
    | "Koordynator Sekcji";
  name: string;
};

export const PersonCard = ({ role, name }: PersonCardProps) => {
  return (
    <article className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl px-6 py-4 rounded-sm">
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">{name}</h3>
      <p className="text-muted text-sm sm:text-base tracking-wide">{role}</p>
    </article>
  );
};
