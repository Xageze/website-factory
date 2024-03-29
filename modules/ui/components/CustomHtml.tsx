import { LinkType } from "@modules/miscellaneous/type";
import { Arrow } from "@modules/svgs/components/Arrow";
import clsx from "clsx";
import Link from "next/link";
import React, { ButtonHTMLAttributes, HTMLInputTypeAttribute } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

type linkProps = {
  children: React.ReactNode;
  hrefLink: LinkType;
  className?: string;
  onClick?: () => void;
};

const H1: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={clsx("text-3xl sm:text-4xl lg:text-6xl font-bold", className)}
    >
      {children}
    </h1>
  );
};

const H2: React.FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={clsx("text-3xl sm:text-4xl lg:text-5xl font-bold", className)}
    >
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({ children, className }) => {
  return (
    <h3 className={clsx("text-xl sm:text-2xl font-bold", className)}>
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={clsx("text-lg sm:text-xl font-bold", className)}>
      {children}
    </h4>
  );
};

const H5: React.FC<Props> = ({ children, className }) => {
  return (
    <h5 className={clsx("text-base sm:text-lg font-semibold", className)}>
      {children}
    </h5>
  );
};

const P: React.FC<Props> = ({ children, className }) => {
  return <p className={clsx("text-base sm:text-lg", className)}>{children}</p>;
};

const Button: React.FC<Props & { buttonType?: "submit" }> = ({
  children,
  className,
  buttonType,
}) => {
  return (
    <button
      type={buttonType}
      className={clsx(
        "self-center px-5 py-3 rounded-lg text-white font-semibold bg-green-400 hover:bg-green-500",
        className
      )}
    >
      {children}
    </button>
  );
};

const CustomLink: React.FC<linkProps> = ({
  children,
  className,
  hrefLink,
  onClick,
}) => {
  return (
    <Link
      href={hrefLink}
      onClick={onClick}
      className={clsx(
        "text-white font-semibold",
        "bg-green-400 hover:bg-green-500",
        "px-4 py-3 flex items-center",
        className
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
};

const CustomHtml = { H1, H2, H3, H4, H5, P, Button, CustomLink };

export default CustomHtml;
