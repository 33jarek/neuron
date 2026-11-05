import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "../../components/Icon";

export const Route = createFileRoute("/_layout/info")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center px-4 py-12 sm:px-8 sm:py-16">
      <h1 className="mb-8 text-4xl font-bold sm:text-5xl">Info</h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/20 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-8">
          <h2 className="mb-3 text-center text-2xl font-medium sm:text-3xl">
            Spotkania
          </h2>
          <p className="max-w-sm text-center leading-relaxed">
            Spotykamy się co wtorek o godzinie 16:00 w sali C308.
          </p>
        </div>
        <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/20 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-8">
          <h2 className="mb-3 text-center text-2xl font-medium sm:text-3xl">
            Kontakt
          </h2>
          <ol className="w-fit space-y-1">
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-6 shrink-0" />
              <span className="break-all">kolonaukoweneuron@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-6 shrink-0" />
              577 507 807
            </li>
            <li className="flex items-center gap-2">
              <Icon name="pin" className="h-6 shrink-0" />
              F205
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
