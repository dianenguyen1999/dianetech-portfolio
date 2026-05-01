import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen overflow-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        {/* Animated background */}
        <div className="fixed inset-0 z-0 bg-gradient-to-r from-blue-950 via-black to-purple-950 animate-gradient" />

        {/* Soft glow effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-120px] left-[-120px] animate-pulse" />
          <div className="absolute w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl bottom-[-120px] right-[-120px] animate-pulse" />
        </div>

        {/* Your content */}
        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;