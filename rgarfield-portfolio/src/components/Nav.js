import React from 'react'

function Nav({ projectsScroll, homeScroll, aboutScroll, contactScroll }) {
  return (
    <div className="nav-main">
      <button className="nav-button" onClick={homeScroll}>Home</button>
      <button className="nav-button" onClick={aboutScroll}>About</button>
      <button className="nav-button" onClick={projectsScroll}>Projects</button>
      <button className="nav-button" >Skills</button>
      <button className="nav-button" onClick={contactScroll}>Contacts</button>
    </div>
  )
}

export default Nav