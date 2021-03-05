import React from "react";

import "./Content.scss";

interface ContentProps {
    children: any
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <section className='bc-content'>
      {props.children}
    </section>
  );
};

export default Content;
