import GradientASCII from "./Asci";

export const Background = () => {
  return (
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
  );
};
