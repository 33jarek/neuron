import { Link } from "@tanstack/react-router";

type NavLinksProps = { children: string; to: string };
export const NavLinks = ({ children, to }: NavLinksProps) => {
  return (
    <Link
      to={to}
      className="text-primary hover:text-primary transition-colors duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};
