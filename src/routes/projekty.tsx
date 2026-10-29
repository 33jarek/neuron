import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projekty')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projekty"!</div>
}
