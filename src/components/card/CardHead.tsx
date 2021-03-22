import React, { ReactNode } from "react";

import './Card.scss'

interface CardHeadProps {
  title: string,
  action?: ReactNode,
  className?: string
}

const CardHead: React.FC<CardHeadProps> = ({ title, action, className }) => {
  return (
    <div className={`bc-card-head ${className}`}>
      {title}
      { action &&
        <section className='bc-card-head__action'>
          {action}
        </section>
      }
    </div>
  )
}

export default CardHead