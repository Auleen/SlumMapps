import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Map from "./components/map/map";
import Sidebar from "./components/sidebar/sidebar";
import Copare from "./components/compare/compare";
import ButtonSlide from "./buttonslide/buttonslide";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Map />
        <Sidebar />
      </div>
      <ButtonSlide />
    </div>
  );
}

export default App;
