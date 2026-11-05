import { Logo } from "../Logo";
import { NavLinks } from "./NavLinks";

export const HeaderLanding = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="w-full max-w-7xl mx-auto grid grid-cols-2 md:flex md:justify-around items-center gap-4 sm:gap-8 md:gap-16 px-4 sm:px-8 py-6">
        <div className="justify-self-center md:justify-self-auto">
          <Logo name="umg" className="h-16 sm:h-24 md:h-32" />
        </div>
        <div className="justify-self-center md:justify-self-auto md:order-3">
          <Logo name="wi" className="h-16 sm:h-24 md:h-32" />
        </div>
        <nav className="col-span-2 md:col-span-1 md:order-2 flex flex-wrap gap-3 sm:gap-8 md:gap-16 items-center justify-center text-base sm:text-xl md:text-2xl font-[Inter]">
          <NavLinks to={"/projekty"}>Projekty</NavLinks>
          <NavLinks to={"/artykuly"}>Artykuły</NavLinks>
          <NavLinks to={"/#onas"}>O nas</NavLinks>
          <NavLinks to={"/info"}>Info</NavLinks>
        </nav>
      </header>
    </div>
  );
};
