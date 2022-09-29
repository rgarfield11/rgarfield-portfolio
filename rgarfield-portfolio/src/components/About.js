import React from 'react'
import myPhoto from "../Profile.jpg";

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <img src={myPhoto} alt="me" className="about-photo" />
      <div className="about-description">
        <p>Before becoming a software engineer, I earned a Bachelor of Science in Architecture from Tulane University. I then pursued a passion in cooking, working for three years in one of New Orleans' most renowned restaurant groups. Seeking a new challenge, I enrolled in the Flatiron School software engineering bootcamp. There, I continued my penchant for problem-solving and design by creating and collaborating on compelling web applications. Today, I am continuing my growth as a web developer, seeking to solve problems we encounter every day.</p>
        <p>At this time, I am open to any junior, internship, or apprenticeship opportunities in frontend, backend, or full-stack developement and software engineering.</p>
      </div>
    </div>
  )
}

export default About