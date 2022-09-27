import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className="home-section" name="home">
        <Home />
      </div>
      <div className="about-section" name="about">
        <About />
      </div>
      <div className="projects-section" name="projects">
        <Projects />
      </div>
      <div className="contact-section" name="contact">
        <Contact />
      </div>
    
    </div>
  );
}

export default App;
