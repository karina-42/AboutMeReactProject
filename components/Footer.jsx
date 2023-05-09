import React from "react"
// target_blank

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:karina.vegega@gmail.com" className="footer__link">karina.vegega@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/karina-42/" className="social-list__link" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://twitter.com/momentOfEureka" className="social-list__link" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.wantedly.com/id/karina42" className="social-list__link" target="_blank">
          <img src="images/Wantedly_Mark_DarkBG.png" className="footer__wantedly-img"/>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/angela-karina-vegega-ortiz/" className="social-list__link" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.instagram.com/saintdarthbijin/" className="social-list__link" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  ) 
} 