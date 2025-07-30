import React from "react";
import HeroSlider from "./components/heroSlider";
import AboutUs from "./components/aboutUs";
import Team from "./components/team";
import Achievements from "./components/achievements";
import ContactUs from "./components/ContactUS";

function App() {
  return (
    <div>
      <HeroSlider />
      <AboutUs/>
      <Team/>
      <Achievements/>
      <ContactUs/>
    </div>
  );
}

export default App;
