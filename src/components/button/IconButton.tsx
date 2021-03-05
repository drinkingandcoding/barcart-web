import React from "react";
import { Link, } from "react-router-dom";

import "./IconButton.scss";

interface IconButton {
    children: any,
    variant?: "light" | "dark",
    to?: string,
    href?: string,
    onClick?: any
}

const IconButton: React.FC<IconButton> = (props) => {
  return (
    <React.Fragment>
      { props.to &&
                <Link to={props.to} className={`bc-a-icon bc-a-icon-${props.variant}`}> { props.children } </Link>
      }
      { props.href &&
                <a href={props.href} className={`bc-a-icon bc-a-icon-${props.variant}`}> { props.children } </a>
      }
      { props.onClick &&
                <button onClick={props.onClick} className={`bc-button-icon bc-button-icon-${props.variant}`}> { props.children }</button>        
      }
    </React.Fragment>
  );
};

export default IconButton;

IconButton.defaultProps = {
  variant: "light",
};