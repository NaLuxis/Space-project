import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import { Carousel } from "../../Components/Carousel/Carousel";

import Earth from "../../Images/Earth.jpg";

function Home() {
  return (
    <>
      <NavBar />
      <header className="header">
        <img src={Earth} alt="Logo" height="100%" width="100%" />
      </header>
      <Carousel />
      <Footer />
    </>
  );
}

export { Home };
