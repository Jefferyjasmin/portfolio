import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import NavBar from "./newP/components/NavBar";
import Work from "./Work";
import { CardChecklist } from "react-bootstrap-icons";
import Card from "./Card";
import Devpage from "./Devpage";
import AmazonPage from "./AmazonPage";
import GoalPage from "./GoalPage";

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Work
                toggle={toggle}
                setToggle={setToggle}
                bgd={bgd}
                setBgd={setBgd}
                light={light}
                setLight={setLight}
                lightOrDark={lightOrDark}
              />
            }
          />
        </Routes>

        <Routes>
          <Route exact path="/develperconnect" element={<Devpage />} />
        </Routes>
        <Routes>
          <Route exact path="/amazon" element={<AmazonPage />} />
        </Routes>
        <Routes>
          <Route exact path="/goal" element={<GoalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
