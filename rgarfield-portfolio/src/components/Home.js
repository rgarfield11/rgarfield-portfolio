import React from 'react'

function Home({ aboutScroll, projectsScroll, contactScroll }) {
  return (
    <>
      <div className="home-info">
        <h1 className="home-name">Ross Garfield</h1>
        <h2 className="home-title">Software Engineer</h2>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={aboutScroll}>About</button>
        <button className="nav-button" onClick={projectsScroll}>Projects</button>
        <button className="nav-button" >Skills</button>
        <button className="nav-button" onClick={contactScroll}>Contact</button>
      </div>
    </>
  )
}

export default Home