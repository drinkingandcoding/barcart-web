import React from "react";

import './Card.scss'

interface CardHeadProps {
  title: string,
  className?: string
}

const CardHead: React.FC<CardHeadProps> = ({ title, className }) => {
  return (
    <div className={`bc-card-head ${className}`}> {title} </div>
  )
}

export default CardHead