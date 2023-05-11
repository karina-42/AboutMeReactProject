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
                <li className="main-list-item">I don't like cold weather. 
                  <span lang="ja"> 寒がりなのでユニクロのヒートテックが良く着る。</span>
                  <span lang="es">Todavía no me acostumbro al frío del invierno de Japón.</span>
                </li>
                <li className="main-list-item">I love food and can eat anything. 
                  <span lang="ja"> ピザやすき焼きが大好き。</span>
                  <span lang="es">Pero mi comida favorita es por supuesto la de mi mamá.</span>
                </li>
            </ul>
          <p>What are your fun facts about yourself?</p>
        </section>
        <section className="about-me-img-container">
          <img src='/images/golfing.jpg' className='about-me-img'></img>
        </section>
      </main>
    )
}