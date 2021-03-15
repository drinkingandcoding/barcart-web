import React, { ReactNode } from "react";

import './Empty.scss'

interface EmptyProps {
  title: string,
  description: string,
  className?: string,
  children?: ReactNode
}

const Empty: React.FC<EmptyProps> = ({ title, description, className, children }) => {
  return (
    <div className={`bc-empty ${className}`}>
      <div className='bc-empty-title'>{title}</div>
      <div className='bc-empty-description'>
        {description}
        {children}
      </div>
    </div>
  )
}

export default Empty