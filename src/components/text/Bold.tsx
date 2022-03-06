import React from "react";

type Props = { className?: string; text: string };

const Bold: React.FC<Props> = ({ className, text }) => {
  return <span className={`${className || ""} font-bold`}>{text}</span>;
};

export default Bold;
