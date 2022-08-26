import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Map from "./components/map/map";
import Sidebar from "./components/sidebar/sidebar";
import Copare from "./components/compare/compare";
import Predict from "./components/predictive/predict";
import ButtonSlide from "./buttonslide/buttonslide";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Predict />} />
        <Route
          path="/Interactivemaps"
          element={
            <>
              <Navbar />
              <Map />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

function AppAgain() {
  return <Predict />;
}

export default App;
// export default App;
