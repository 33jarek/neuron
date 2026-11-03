import { Logo } from "../Logo";
import { NavLinks } from "./NavLinks";

export const HeaderLanding = () => {
  return (
    <div className="">
      <header className="max-w-7xl mx-auto flex w-full justify-around items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 py-6">
        <Logo name="umg" height={128} />
        <nav className="flex gap-8 sm:gap-12 md:gap-16 items-center justify-center text-xl sm:text-2xl font-[Inter]">
          <NavLinks to={"/projekty"}>Projekty</NavLinks>
          <NavLinks to={"/artykuly"}>Artykuły</NavLinks>
          <NavLinks to={"/#onas"}>O nas</NavLinks>
          <NavLinks to={"/info"}>Info</NavLinks>
        </nav>
        <Logo name="wi" height={128} />
      </header>
    </div>
  );
};
