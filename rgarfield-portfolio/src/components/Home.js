import React from 'react'

function Home() {
  return (
    <>
      <div className="home-info">
        <h1 className="home-name">Ross Garfield</h1>
        <h2 className="home-title">Software Engineer</h2>
      </div>
      <div className="nav-buttons">
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <button className="nav-button">Skills</button>
        <button className="nav-button">Contact</button>
      </div>
    </>
  )
}

export default Home