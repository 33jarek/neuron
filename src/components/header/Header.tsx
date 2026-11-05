import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] md:flex md:justify-around items-center gap-4 sm:gap-8 md:gap-16 px-4 sm:px-8 py-4">
          <div className="justify-self-center items-center md:justify-self-auto">
            <Logo name="umg" className="h-12 sm:h-20 md:h-32" />
          </div>
          <Link
            to={"/"}
            className="font-[GeistMono] font-bold text-4xl sm:text-5xl md:text-6xl text-primary hover:text-cyan transition-colors duration-300 ease-in-out"
          >
            neμron
          </Link>
          <div className="justify-self-center md:justify-self-auto">
            <Logo name="wi" className="h-12 sm:h-20 md:h-32" />
          </div>
        </div>
        <nav
          ref={navRef}
          className="flex flex-wrap gap-3 sm:gap-8 md:gap-16 items-center justify-center text-base sm:text-xl px-4 py-2 font-[Inter]"
        >
          <NavLinks to={"/projekty"}>Projekty</NavLinks>
          <NavLinks to={"/artykuly"}>Artykuły</NavLinks>
          <NavLinks to={"/#onas"}>O nas</NavLinks>
          <NavLinks to={"/info"}>Info</NavLinks>
        </nav>
      </header>

      {/* Belka z samymi linkami podążająca za scrollem w stylu liquid glass */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b-2 border-white/15 shadow-2xl transition-all duration-300 ease-out ${
          isSticky
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-wrap gap-3 sm:gap-8 md:gap-16 items-center justify-center text-base sm:text-xl px-4 py-3 max-w-7xl mx-auto font-[Inter]">
          <NavLinks to={"/projekty"}>Projekty</NavLinks>
          <NavLinks to={"/artykuly"}>Artykuły</NavLinks>
          <NavLinks to={"/#onas"}>O nas</NavLinks>
          <NavLinks to={"/info"}>Info</NavLinks>
        </nav>
      </div>
    </>
  );
};
