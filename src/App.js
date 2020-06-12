import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/";
import SpeakersList from "./components/SpeakerList";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/speakers" component={SpeakersList} />
    </Switch>
      <Footer />
      </>
  );
}

export default App;
