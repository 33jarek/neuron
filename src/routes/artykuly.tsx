import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artykuly')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/artykuly"!</div>
}
