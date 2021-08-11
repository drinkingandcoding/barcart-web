import React, { ReactNode } from 'react';
import { Link, } from 'react-router-dom';

import './Button.scss';

interface ButtonProps {
    children?: ReactNode,
    variant?: 'light' | 'dark' | 'ghost' | 'icon',
    to?: string,
    href?: string,
    className?: string,
    onClick?: () => void,
    type?: string,
    value?: string
}

const Button: React.FC<ButtonProps> = ({ children, variant, to, href, className, type, onClick, value}) => {

  const buttonContent = <span className='bc-button__content'> { children } </span>;

  return (
    <React.Fragment>
      { to &&
            <Link to={to} className={`bc-button bc-button-${variant} ${className}`}>
              { buttonContent }
            </Link>
      }
      { href &&
            <a href={href} className={`bc-button bc-button-${variant} ${className}`}>
              { buttonContent }
            </a>
      }
      { onClick && !type &&
            <button onClick={onClick} className={`bc-button bc-button-${variant} ${className}`}>
              { buttonContent }
            </button>
      }
      { type === 'submit' &&
          <input type={type} value={value || 'Search'} className={`bc-button bc-button-${variant} ${className}`} onClick={onClick}/>
      }
    </React.Fragment>
  );
};

export default Button;

Button.defaultProps = {
  variant: 'light',
};