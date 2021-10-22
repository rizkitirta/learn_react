import React from "react";
import { Route, Switch } from "react-router";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Router;
