import React, { Fragment, } from "react";
import { Route, } from "react-router-dom";

import MastHead from "./components/masthead/Masthead";
import Home from "./routes/Home";

import "./App.scss";

const App: React.FC = () => {

  return (
    <Fragment>
      <MastHead/>
      <Route exact path='/' component={ Home }/>
    </Fragment>
  );
};

export default App;