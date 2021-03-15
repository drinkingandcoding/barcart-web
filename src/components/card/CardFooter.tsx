import React, { ReactNode } from "react";

import './Card.scss'

interface CardFooterProps {
  children: ReactNode,
  className?: string
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={`bc-card-footer ${className}`}>
      {children}
    </div>
  )
}

export default CardFooter;
