import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "../../components/Icon";

export const Route = createFileRoute("/_layout/info")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-8">
      <h1 className="text-5xl">Info</h1>
      <div className="flex mt-5 gap-8">
        <div className="grid items-center justify-center bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl px-6 py-4 rounded-lg">
          <h2 className="text-3xl">Spotkania</h2>
          <p>
            Spotykamy się co wtorek o godzinie 16:00 <br /> w sali C308.
          </p>
        </div>
        <div className="grid items-center justify-center bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl px-6 py-4 rounded-lg">
          <h2 className="text-3xl">Kontakt</h2>
          <ol>
            <li className="flex justify-start items-center gap-2">
              <Icon name="mail" className="h-8" /> kolonaukoweneuron@gmail.com
            </li>
            <li className="flex justify-start items-center gap-2">
              <Icon name="phone" className="h-8" /> 577-507-807
            </li>
            <li className="flex justify-start items-center gap-2">
              <Icon name="pin" className="h-8" /> F205
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
