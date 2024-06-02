import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Advntgs from "./Components/Advntgs";
import Fully from "./Components/FullyCustomize";
import Testimonial from "./Components/Testimonial";
import FAq from "./Components/Faq";
import Footer from "./Components/Footer";
import Ready from "./Components/Ready";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Features />
        <Advntgs />
        <Fully />
        <Testimonial />
        <FAq />
        <Ready/>
        <Footer />
      </div>
    </>
  );
}

export default App;
