import React from 'react'
import myPhoto from "../Profile.webp";

function About() {
  return (
    <div className="about">
      <h2>About me</h2>
      <img src={myPhoto} alt="me" className="about-photo" />
      <div className="about-description">
        <p>Before becoming a software engineer, I earned a Bachelor of Science in Architecture from Tulane University</p>
        <p>At this time, I am open to any junior, internship, or apprenticeship opportunities in frontend developement and software engineering.</p>
      </div>
    </div>
  )
}

export default About