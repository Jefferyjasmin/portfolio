import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./Work";
import Devpage from "./Devpage";
import AmazonPage from "./AmazonPage";
import GoalPage from "./GoalPage";
import Banner from "./Banner";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Work />} />
        </Routes>

        <Routes>
          <Route exact path="/develperconnect" element={<Devpage />} />
        </Routes>
        <Routes>
          <Route exact path="/amazon" element={<AmazonPage />} />
        </Routes>
        <Routes>
          // <Route exact path="/goal" element={<GoalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// <Router>
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Work />} />
//       </Routes>

//       <Routes>
//         <Route exact path="/develperconnect" element={<Devpage />} />
//       </Routes>
//       <Routes>
//         <Route exact path="/amazon" element={<AmazonPage />} />
//       </Routes>
//       <Routes>
//         <Route exact path="/goal" element={<GoalPage />} />
//       </Routes>
//     </div>
//   </Router>
