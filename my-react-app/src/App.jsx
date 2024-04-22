import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

// TODO
// 1. Refractor the cards text into objects and react components. Maybe? If framer allows it.
// 2. Fix the resizing of the navbar and about sections to be conistent with each other.
// 3. Commenting for commit map 3
