import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Map from "./components/map/map";
import Predict from "./components/predictive/predict";
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
