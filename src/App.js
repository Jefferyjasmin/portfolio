import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
        <Routes>
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
