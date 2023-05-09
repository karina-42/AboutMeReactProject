import React from "react"

export default function Main() {
    return (
      <main className="main">
        <section className="main-info">
          <h1 className="main-title">Fun facts about me <span className="main-title-languages">(in English, <span lang="ja">日本語</span>, and <span lang="es">Español</span>)</span></h1>
            <ul className="main-list">
                <li className="main-list-item">I'm learning how to play golf now. 
                  <span lang="ja"> 全然出来ないけど楽しい。</span> 
                  <span lang="es">El más difícil para mí es el driver.</span>
                </li>
                <li className="main-list-item">I do weight training 5 days a week. 
                  <span lang="ja"> まだ弱いんですけど。。。</span>
                  <span lang="es">Mi meta es ser fuerte por dentro y por fuera.</span>
                </li>
                <li className="main-list-item">I can speak Spanish, English, and Japanese. 
                  <span lang="ja"> 英語とスペイン語は同時に習った。</span> 
                  <span lang="es">El japonés lo aprendí en la universidad y después al vivir en Japón.</span>
                </li>
                <li className="main-list-item">I broke my neck in a car accident (but I'm fine now, aside from some neck and shoulder pains every once in a while). 
                  <span lang="ja"> 肩こりがヤバいです。</span>
                  <span lang="es">Tuve suerte de no tener peores heridas así que todo los días estoy agradecida.</span>
                </li>
                <li className="main-list-item">I love food and can eat anything. 
                  <span lang="ja"> ピザやすき焼きが大好き。</span>
                  <span lang="es">Pero mi comida favorita es por supuesto la de mi mamá.</span>
                </li>
            </ul>
          <p>What are your fun facts about yourself?</p>
        </section>
        <section className="about-me-img-container">
          <img src='/images/picc.jpg' className='about-me-img'></img>
        </section>
      </main>
    )
}