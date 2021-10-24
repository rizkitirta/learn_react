import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Contact from "../views/Contact";
import NotFound from "../views/Error/NotFound";
import Home from "../views/Home";
import Users from "../views/users";
import Show from "../views/users/Show";
import * as Middleware from "../middleware/App";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar>
          <Middleware.AuthenticatedUser render={<Home />} />
        </Navbar>
      </Route>
      <Route path="/about">
        <Navbar>
          <Middleware.AuthenticatedUser render={<About />} />
        </Navbar>
      </Route>
      <Route path="/contact">
        <Navbar>
          <Middleware.AuthenticatedUser render={<Contact />} />
        </Navbar>
      </Route>
      <Route exact path="/users">
        <Navbar>
          <Middleware.AuthenticatedUser render={<Users />} />
        </Navbar>
      </Route>
      <Route path="/user/:id">
        <Navbar>
          <Show />
        </Navbar>
      </Route>
      <Route path="/login">
        <Navbar>
          <Middleware.Guest render={<Login />} />
        </Navbar>
      </Route>
      <Route path="/register">
        <Navbar>
          <Middleware.Guest render={<Register />} />
        </Navbar>
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;
