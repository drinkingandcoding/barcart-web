import React, { ReactNode } from "react";

import './List.scss'

interface ListProps {
  children?: ReactNode
  title: string
}
const List: React.FC<ListProps> = ({ title, children }) => {
  return (
    <section className='bc-list'>
      <h3 className='bc-list-title'> {title} </h3>
      { children && 
        <ol className="bc-list-items">
          {children}
        </ol>
      }
    </section>
  )
}

export default List