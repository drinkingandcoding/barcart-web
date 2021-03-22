import React, { ReactNode } from "react";

import './Card.scss'

interface CardProps {
  children: ReactNode,
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <article className={`bc-card ${className}`}>
      {children}
    </article>
  )
}

export default Card