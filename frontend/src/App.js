import React from "react";
import logo from "./logo.svg";
import test from "./test.png";
import { Button } from "react-bootstrap";
import makeschool from "./makeschool.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <h1>Hello, World and Make School! React+Django to Heroku</h1>
      <img src={logo} className="testing" alt="Logo" />
      <br></br>
      <hr></hr>
      <h2>Test Image</h2>
      <img src={makeschool} alt="TEST image" />
      <hr></hr>
      <h2>Test Bootstrap Buttons</h2>
    </div>
  );
};

export default App;
