import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Contact from "../views/Contact";
import NotFound from "../views/Error/NotFound";
import Home from "../views/Home";
import Users from "../views/users";
import Show from "../views/users/Show";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar>
          <Home />
        </Navbar>
      </Route>
      <Route path="/about">
        <Navbar>
          <About />
        </Navbar>
      </Route>
      <Route path="/contact">
        <Navbar>
          <Contact />
        </Navbar>
      </Route>
      <Route exact path="/users">
        <Navbar>
          <Users />
        </Navbar>
      </Route>
      <Route path="/user/:id">
        <Navbar>
          <Show />
        </Navbar>
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;
