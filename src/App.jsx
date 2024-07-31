import React from "react";
import 'boxicons/css/boxicons.min.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import './index.css';
import Analytics from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
