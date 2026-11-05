import { Link } from "@tanstack/react-router";

type NavLinksProps = { children: string; to: string };
export const NavLinks = ({ children, to }: NavLinksProps) => {
  return (
    <Link
      to={to}
      className="relative text-primary hover:text-primary after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
};
