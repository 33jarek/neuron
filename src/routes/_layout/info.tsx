import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/info")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/info"!</div>;
}

