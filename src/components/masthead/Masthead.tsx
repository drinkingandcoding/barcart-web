import React from "react";

import "./Masthead.scss";
import Logo from "../logo/Logo";

const Masthead: React.FC = () => {
  return (
    <header className="bc-masthead">
      <Logo/>
    </header>
  );
};

export default Masthead;
