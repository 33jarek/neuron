import { Link } from "@tanstack/react-router";
import { Logo } from "../Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <header className="flex-col w-full items-center sm:flex-row">
      <div className="flex justify-around items-center w-full gap-12 sm:gap-16 md:gap-24">
        <Logo name="umg" height={128} />
        <Link
          to={"/"}
          className="font-[GeistMono] font-bold text-6xl text-primary hover:text-cyan transition-colors duration-300 ease-in-out"
        >
          neμron
        </Link>
        <Logo name="wi" height={128} />
      </div>
      <nav className="flex gap-16 items-center justify-center text-xl">
        {/* #TODO: Jebnac jakies efekty i routy skonczyc */}
        <NavLinks to={"/projekty"}>Projekty</NavLinks>
        <NavLinks to={"/artykuly"}>Artykuły</NavLinks>
        <NavLinks to={"/spotkania"}>Spotkania</NavLinks>
        <NavLinks to={"/kontakt"}>Kontakt</NavLinks>
      </nav>
    </header>
  );
};
