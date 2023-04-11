import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  children?: React.ReactNode;
  markdown?: string;
};

export const Content: React.FC<Props> = ({ children, markdown }) => {
  return (
    <div>
      {children}
      {/* {markdown && <ReactMarkdown className="">{markdown}</ReactMarkdown>} */}
    </div>
  );
};
