import React from "react";
import "./app.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="ml-32 mr-32 font-serif">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
