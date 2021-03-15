import React from "react";

import "./Masthead.scss";
import { Logo } from "../logo";

const Masthead: React.FC = () => {
  return (
    <header className="bc-masthead">
      <Logo/>
    </header>
  );
};

export default Masthead;
