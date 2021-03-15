import React, { Fragment, } from "react";
import { Route, Switch } from "react-router-dom";

import MastHead from "./components/masthead/Masthead";
import Home from "./routes/Home";
import MakePage from "./routes/Make";
import FindPage from "./routes/Find";

import "./App.scss";

const App: React.FC = () => {

  return (
    <Fragment>
      <MastHead/>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/find' component={ FindPage }/>
        <Route path='/make' component={ MakePage }/>
    </Switch>
    </Fragment>
  );
};

export default App;