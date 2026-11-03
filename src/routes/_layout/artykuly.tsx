import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/artykuly")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-16 px-8">
        <h1 className="text-5xl">Artykuły Naukowe</h1>
      </div>
    </div>
  );
}
