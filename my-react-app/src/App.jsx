import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
