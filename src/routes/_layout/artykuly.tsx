import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/artykuly")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Artykuły Naukowe</h1>
      </div>
    </div>
  );
}
