import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  inputType?: HTMLInputTypeAttribute;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputType,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="pb-2">{label}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="px-3 py-2 rounded-lg bg-gray-100"
      />
    </div>
  );
};
