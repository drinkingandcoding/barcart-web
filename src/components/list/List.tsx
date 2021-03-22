import React, { ReactNode } from "react";

import './List.scss'

interface ListProps {
  children?: ReactNode
  icon?: string
  title: string
}

const ListBlock: React.FC<ListProps> = ({ title, children }) => (
  <>
    <h3 className='bc-list-title'> {title} </h3>
    { children && 
      <ol className="bc-list-items">
        {children}
      </ol>
    }
  </>
)


const List: React.FC<ListProps> = ({ icon, title, children }) => {
  return (
    <section className={`bc-list bc-list-${icon ? 'withIcon': 'noIcon'}`}>
      {icon ?
        <>
          <div className='bc-list-section__icon'>
            <h3 className='bc-list-icon'> {icon} </h3>
          </div>
          <div className='bc-list-section__content'>
            <ListBlock title={title}>{children}</ListBlock>
          </div>
        </>
        : <ListBlock title={title}>{children}</ListBlock>
      }
    </section>
  )
}

export default List