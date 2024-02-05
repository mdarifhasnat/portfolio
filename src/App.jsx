import React from "react";
import "./app.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav3 from "./components/Navbar/nav3";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="ml-32 mr-32 font-serif">
      {/*<Navbar />
      <Nav2 />*/}
      <Nav3 />
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
