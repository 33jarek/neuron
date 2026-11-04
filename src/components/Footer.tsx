export const Footer = () => {
  return (
    <div className="flex-col w-dvw border-t border-t-cyan/10 py-10 text-muted/30">
      <div className="flex justify-center gap-16 py-5">
        <div className="flex flex-col">
          <h6 className="text-primary/40">KN Neuron, WI</h6>
          <a
            className="hover:text-primary/40"
            href="https://github.com/kn-neuron-umg"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hover:text-primary/40"
            href="https://www.facebook.com/wi.umg"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="hover:text-primary/40"
            href="https://www.instagram.com/kn_neuron/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div className="flex flex-col">
          <h6 className="text-primary/40">UMG</h6>
          <a
            className="hover:text-primary/40"
            href="https://www.facebook.com/Uniwersytet.Morski.w.Gdyni"
            target="_blank"
          >
            Facebook
          </a>
        </div>
        <div className="flex flex-col">
          <h6 className="text-primary/40">Kontakt</h6>
          <p className="hover:text-primary/40">kolonaukoweneuron@gmail.com</p>
          <p className="hover:text-primary/40">577 507 807</p>
        </div>
      </div>
      <p className="text-muted/30 text-center  px-10">
        © 2026 Uniwersytet Morski w Gdyni, Wydział Informatyki, Koło Naukowe
        Neuron
      </p>
    </div>
  );
};
