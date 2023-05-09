import React from "react"

export default function Main() {
    return (
      <main className="main">
        <section className="main-info">
          <h1 className="main-title">Fun facts about me</h1>
            <ul className="main-list">
                <li className="main-list-item">I'm learning how to play golf now</li>
                <li className="main-list-item">I do weight training 5 days a week</li>
                <li className="main-list-item">I can speak Spanish, English, and Japanese</li>
                <li className="main-list-item">I broke my neck in a car accident (but I'm fine now, aside from some neck and shoulder pains every once in a while)</li>
                <li className="main-list-item">I love food and can eat anything</li>                
            </ul>
        </section>
        <img src='/images/picc.jpg' className='about-me-img'></img>
      </main>
    )
}