import React, { ReactNode } from "react";

import './Card.scss'

interface CardBodyProps {
  children: ReactNode,
  className?: string
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div className={`bc-card-body ${className}`}>
      {children} 
    </div>
  )
}

export default CardBody