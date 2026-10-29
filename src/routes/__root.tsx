import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      <Footer />
    </>
  ),
});
