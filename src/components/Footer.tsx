import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="relative z-10 flex flex-col w-full bg-[#060814] border-t border-t-cyan/10 py-10 text-muted/30">
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row justify-center items-center md:items-start text-center md:text-left gap-8 md:gap-16 py-5 px-4 sm:px-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-primary/40">KN Neuron</h6>
          <FooterLink link="https://github.com/kn-neuron-umg">
            Github
          </FooterLink>
          <FooterLink link="https://www.instagram.com/kn_neuron/">
            Instagram
          </FooterLink>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-primary/40">Wydział Informatyki</h6>
          <FooterLink link="https://wi.umg.edu.pl/">Strona</FooterLink>
          <FooterLink link="https://www.facebook.com/wi.umg">
            Facebook
          </FooterLink>
          <FooterLink link="https://www.instagram.com/wydzialinformatyki/">
            Instagram
          </FooterLink>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-primary/40">Uniwersytet Morski w Gdyni</h6>
          <FooterLink link="https://www.facebook.com/Uniwersytet.Morski.w.Gdyni">
            Facebook
          </FooterLink>
          <FooterLink link="https://www.umg.edu.pl/">Strona główna</FooterLink>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-primary/40">Kontakt</h6>
          <p className="hover:text-primary/40 break-all">kolonaukoweneuron@gmail.com</p>
          <p className="hover:text-primary/40">577 507 807</p>
        </div>
      </div>
      <p className="text-muted/30 text-center text-sm px-4 sm:px-10">
        © 2026 Uniwersytet Morski w Gdyni, Wydział Informatyki, Koło Naukowe
        Neuron
      </p>
    </footer>
  );
};
