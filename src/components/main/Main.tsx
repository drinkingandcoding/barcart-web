import React from "react";

import "./Main.scss";

interface MainProps {
    children: any,
    isLanding?: boolean
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <main className='bc-page-landing'>
      {props.children}
    </main>
  );
};

export default Main;
