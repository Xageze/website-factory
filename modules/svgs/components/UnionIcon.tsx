import React from "react";

type Props = {
  className?: string;
};

export const UnionIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 9.451 5.964"
    >
      <path
        id="Union_2"
        data-name="Union 2"
        d="M.557,9.169.282,8.894a.964.964,0,0,1,0-1.362L3.089,4.725l-2.8-2.8a.965.965,0,0,1,0-1.36L.562.282a.963.963,0,0,1,1.362,0l3.76,3.76a.971.971,0,0,1,0,1.364L1.919,9.169a.963.963,0,0,1-1.362,0Z"
        transform="translate(0 5.964) rotate(-90)"
        fill="currentColor"
        className={className}
      />
    </svg>
  );
};
