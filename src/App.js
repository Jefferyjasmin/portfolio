import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";
import SideBar from "./SideBar";
import Toggle from "./Toggle";
import Work from "./Work";

function App() {
  const [bgd, setBgd] = useState("Dark");
  const [toggle, setToggle] = useState("");
  const [light, setLight] = useState("");
  // let toggleMenu = () => {
  //   if (toggle === "") {
  //     setToggle("active");
  //   } else setToggle("");
  // };
  let lightOrDark = () => {
    if (bgd === "Dark") {
      setBgd("");
      setLight("Light");
      setToggle("btn btn-primary");
    } else {
      setLight("");
      setBgd("Dark");
      setToggle("btn btn-dark");
    }
  };
  return (
    <Router>
      <div className="App">
        <Banner bgd={bgd} light={light} />
        <Work
          toggle={toggle}
          setToggle={setToggle}
          bgd={bgd}
          setBgd={setBgd}
          light={light}
          setLight={setLight}
          lightOrDark={lightOrDark}
        />
        {/* <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
        <Routes>
          <Route path="/work" element={<Work />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
