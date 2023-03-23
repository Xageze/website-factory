import Image from "next/image";
import Link from "next/link";
import "../../../app/globals.css";

type Link = {
  text: string;
  href: string;
};

type Props = {
  logo: string;
  logoTitle: string;
  links: Array<Link>;
  backgroundColor?: string;
};

export const Header: React.FC<Props> & { height: number } = ({
  logo,
  logoTitle,
  links,
}) => {
  return (
    <header
      className="sticky top-0 text-lg font-medium shadow-lg flex items-center bg-white z-10"
      style={{ height: Header.height }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-8">
          <div className="relative h-14 aspect-square">
            <Image
              src={logo}
              alt={"Logo de la page d'accueil"}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold">{logoTitle}</h3>
        </div>

        <div className="flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.text + link.href}
              href={link.href}
              className="hover:underline min-w-fit"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

Header.height = 80;
