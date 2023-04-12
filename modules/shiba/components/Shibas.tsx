import Image from "next/image";

type Props = {
  shiba: string;
};

export const Shibas: React.FC<Props> = ({ shiba }) => {
  return (
    <Image
      src={shiba}
      alt={shiba}
      width={400}
      height={400}
      className="transition hover:scale-105 rounded-lg"
    />
  );
};
