type Props = {
  children: string;
  link: string;
};
export const FooterLink = ({ children, link }: Props) => {
  return (
    <a className="hover:text-primary/40" href={link} target="_blank">
      {children}
    </a>
  );
};
