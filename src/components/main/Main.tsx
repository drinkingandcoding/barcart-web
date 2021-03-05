import React, { ReactNode } from "react";

import "./Main.scss";

interface MainProps {
    children: ReactNode
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <main className='bc-page-landing'>
      {props.children}
    </main>
  );
};

export default Main;
