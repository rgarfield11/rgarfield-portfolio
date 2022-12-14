import React, { useEffect, useState } from "react"
import { scroller as Scroll } from "react-scroll"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import '../App.css';

function App() {
  let [showNavigation, setShowNavigation] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 650) {
        setShowNavigation(false);

      }
      if (window.scrollY > 650) {
        setShowNavigation(true);
      }
    })
  }, [window.scrollY])

  const aboutScroll = () => {
    Scroll.scrollTo("about", {
      smooth: true
    });
  }

  const projectsScroll = () => {
    Scroll.scrollTo("projects", {
      smooth: true
    });
  }

  const contactScroll = () => {
    Scroll.scrollTo("contact", {
      smooth: true
    });
  }

  const homeScroll = () => {
    Scroll.scrollTo("home", {
      smooth: true
    });
  }
  
  return (
    <div className="App">
      <Nav
      aboutScroll={aboutScroll}
      projectsScroll={projectsScroll}
      contactScroll={contactScroll}
      homeScroll={homeScroll}
    />
      <div className="home-section" name="home">
        <Home 
          aboutScroll={aboutScroll}
          projectsScroll={projectsScroll}
          contactScroll={contactScroll}
        />
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
