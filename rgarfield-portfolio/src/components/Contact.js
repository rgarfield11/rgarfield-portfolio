import React from 'react'
import ReactTooltip from 'react-tooltip';
import { BsFillEnvelopeFill, BsFillFileEarmarkTextFill, BsLinkedin, BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact me</h2>
      <a className="contact-option" data-tip data-for="email" target="_blank" href="mailto:rossgarfield@gmail.com">
        <BsFillEnvelopeFill/>
      </a>
      <a className="contact-option" data-tip data-for="resume" target="_blank" href="https://docs.google.com/document/d/1OOSamrcFre-r7etsvDcOWUdiq7lpV7dZ0Jlvmi4ES_o/edit">
        <BsFillFileEarmarkTextFill/>
      </a>
      <a className="contact-option" data-tip data-for="linkedin" target="_blank"  href="https://www.linkedin.com/in/rossgarfield/">
        <BsLinkedin/>
      </a>
      <a className="contact-option" data-tip data-for="github" target="_blank"  href="https://github.com/rgarfield11">
        <BsGithub/>
      </a>

      <ReactTooltip id='email' type='light' effect='solid'>
        <span>Email Me</span>
      </ReactTooltip>

      <ReactTooltip id='resume' type='light' effect='solid'>
        <span>My Resume</span>
      </ReactTooltip>

      <ReactTooltip id='linkedin' type='light' effect='solid'>
        <span>My LinkedIn</span>
      </ReactTooltip>

      <ReactTooltip id='github' type='light' effect='solid'>
        <span>My GitHub</span>
      </ReactTooltip>
    </div>
  )
}

export default Contact