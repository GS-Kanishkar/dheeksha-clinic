import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./index.css";
import "./App.css";
import {  useState } from "react";
import { Element } from "react-scroll";
import FadeInSection from "./FadeInSection.js";

function App() {
  const [active, setActive] = useState("home");
  document.addEventListener("contextmenu", (e) => {
    console.log("Sorry! Right Click is Disabled");
    e.preventDefault();
    return false;
  });
  return (
    <>
      <BrowserRouter>
        <a
          href="https://api.whatsapp.com/send?phone=919080024196&text=Hi, I want to book the doctor appointment "
          className="float"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
        <NavBar active={active} />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
        
        </Routes>
        <Element name="footer" className="footer">
        <FadeInSection>
        <Footer />
        </FadeInSection>
        
        </Element>
      </BrowserRouter>
    </>
  );
}

export default App;
