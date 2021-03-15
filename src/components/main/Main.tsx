import React, { ReactNode } from "react";

import "./Main.scss";

interface MainProps {
    children: ReactNode
    name: string
}

const Main: React.FC<MainProps> = ({ children, name='base'}: MainProps) => {
  return (
    <main className={`bc-page-${name}`}>
      {children}
    </main>
  );
};

export default Main;
