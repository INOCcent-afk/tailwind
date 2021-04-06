import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Menu from "./pages/Menu";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const hideMenu = () => {
  //     if (window.innerWidth > 768 && isOpen) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("resize", hideMenu);

  //   return () => {
  //     window.removeEventListener("resize", hideMenu);
  //   };
  // });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
