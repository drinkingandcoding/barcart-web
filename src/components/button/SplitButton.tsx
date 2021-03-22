import React, { ReactNode } from "react";

import "./Button.scss";
import "./SplitButton.scss";

interface SplitButtonProps {
  children: ReactNode,
  className?: string,
  icon: ReactNode,
  href?: string,
  onClick?: () => void
}

const SplitButton: React.FC<SplitButtonProps> = ({ children, icon, className, onClick, href}) => {

  const buttonContent = <span className={"bc-splitButton__content"}> { children } </span>;
  const iconContent = <span className='bc-splitButton__icon'> { icon }</span>
  return (
    <a href={href} onClick={onClick} className={`bc-button bc-splitButton bc-button-ghost ${className}`}>
      { iconContent }
      { buttonContent }
    </a>
  );
};

export default SplitButton;
