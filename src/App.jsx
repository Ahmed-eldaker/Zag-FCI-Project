import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Counter } from "./Components/Counter";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
              <Link className="navbar-brand" to="/about">
                About
              </Link>
              <Link className="navbar-brand" to="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
