import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import Team from "./OurTeam/Team";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>CSS AMU Website Frontend</h1> */}
      <Carousel />

      <Team />
    </div>
  );
}

export default App;
