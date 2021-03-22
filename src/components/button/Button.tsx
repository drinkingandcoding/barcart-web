import React, { ReactNode } from 'react';
import { Link, } from 'react-router-dom';

import './Button.scss';

interface ButtonProps {
    children: ReactNode,
    variant?: 'light' | 'dark' | 'ghost' | 'icon',
    to?: string,
    href?: string,
    className?: string,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, variant, to, href, className, onClick}) => {

  const buttonContent = <span className='bc-button__content'> { children } </span>;

  return (
    <React.Fragment>
      { to &&
            <Link to={to} className={`bc-button bc-button-${variant} ${className}}`}>
              { buttonContent }
            </Link>
      }
      { href &&
            <a href={href} className={`bc-button bc-button-${variant} ${className}`}>
              { buttonContent }
            </a>
      }
      { onClick &&
            <button onClick={onClick} className={`bc-button bc-button-${variant} ${className}`}>
              { buttonContent }
            </button>
      }
    </React.Fragment>
  );
};

export default Button;

Button.defaultProps = {
  variant: 'light',
};