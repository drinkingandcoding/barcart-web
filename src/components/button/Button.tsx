import React from "react";
import { Link, } from "react-router-dom";

import "./Button.scss";

interface ButtonProps {
    children: any,
    variant?: "light" | "dark" | "ghost",
    to?: string,
    href?: string,
    onClick?: any
}

const Button: React.FC<ButtonProps> = (props) => {

  const buttonContent = <span className={"bc-button__content"}> { props.children } </span>;

  return (
    <React.Fragment>
      { props.to &&
            <Link to={props.to} className={`bc-button bc-button-${props.variant}`}>
              { buttonContent }
            </Link>
      }
      { props.href &&
            <a href={props.href}className={`bc-button bc-button-${props.variant}`}>
              { buttonContent }
            </a>
      }
      { props.onClick &&
            <button onClick={props.onClick} className={"bc-button bc-button-link"}>
              { buttonContent }
            </button>
      }
    </React.Fragment>
  );
};

export default Button;

Button.defaultProps = {
  variant: "light",
};