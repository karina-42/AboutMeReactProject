import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"



export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:karina.vegega@gmail.com" className="footer__link">karina.vegega@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/karina-42/" className="social-list__link" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://twitter.com/momentOfEureka" className="social-list__link" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.wantedly.com/id/karina42" className="social-list__link" target="_blank">
          <img src="images/Wantedly_Mark_DarkBG.png" className="footer__wantedly-img"/>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/angela-karina-vegega-ortiz/" className="social-list__link" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.instagram.com/saintdarthbijin/" className="social-list__link" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </footer>
  ) 
} 