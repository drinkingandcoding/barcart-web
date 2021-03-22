import React from "react";
import { Link, } from "react-router-dom";

import "./Masthead.scss";
import { Logo } from "../logo";

const Masthead: React.FC = () => {
  return (
    <header className="bc-masthead">
      <Link to='./'><Logo/></Link>
    </header>
  );
};

export default Masthead;
