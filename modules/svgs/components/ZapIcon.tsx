import React from "react";

type Props = {
  width?: number;
  height?: number;
};

export const ZapIcon: React.FC<Props> = ({ height = 40, width = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3651 21.891C13.2631 21.891 13.2631 21.891 13.1591 21.88C12.0271 21.755 11.2011 20.632 11.3141 19.373L12.4041 6.062C12.5141 4.894 13.3991 4 14.4571 4H22.4371C22.6661 4 22.8911 4.043 23.1071 4.125C24.1841 4.536 24.7561 5.838 24.3861 7.034L21.7221 14.374H26.6351C26.9981 14.374 27.3541 14.481 27.6691 14.683C28.6521 15.32 28.9881 16.722 28.4161 17.812C27.6761 19.271 20.2271 31.787 17.8201 35.826C17.6291 36.148 17.1391 35.991 17.1591 35.617L17.9671 21.88L13.3661 21.891H13.3651Z"
        stroke="#F0BD66"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
