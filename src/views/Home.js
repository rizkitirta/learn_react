import React from "react";
import Authenticated from "../components/Authenticated";
import { UserProvider } from "./context/User";

const Home = () => {
  return (
    <div className="container">
      <UserProvider>
        <Authenticated/>
      </UserProvider>
    </div>
  );
};

export default Home;
