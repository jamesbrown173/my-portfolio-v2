import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;

// TODO
// 1. Refractor the cards text into objects and react components. Maybe? If framer allows it.
