import React, { ReactNode } from "react";

import './List.scss'

interface ListProps {
  children: ReactNode
  title: string
}
const List: React.FC<ListProps> = ({ title, children }) => {
  return (
    <>
      <h3> {title} </h3>
      <ol className="bc-list">
        {children}
      </ol>
    </>
  )
}

export default List