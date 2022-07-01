import { useState } from "react";
import Banner from "./Banner";
import Services from "./Services";
import SideBar from "./SideBar";
import Toggle from "./Toggle";
import Work from "./Work";

function App() {
  const [toggle, setToggle] = useState("");
  let toggleMenu = () => {
    if (toggle === "") {
      setToggle("active");
    } else setToggle("");
  };
  return (
    <div className="App">
      <Banner />
      <Toggle toggleMenu={toggleMenu} toggle={toggle} />
      <SideBar toggleMenu={toggleMenu} toggle={toggle} />
      <Services />
      <Work />
    </div>
  );
}

export default App;
