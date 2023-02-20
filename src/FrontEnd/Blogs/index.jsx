import React from 'react'
import "./Blogs.css"

const Blogs = () => {
  return (
    <>
      <div className="wrapper">
        <div className="top-blog">
          <div className="main-img"></div>
          <div className="content">
            <h2>An Alternative Approach to Rate Limiting</h2>
            <p>A few weeks ago at Figma, we experienced our first-ever spam attack. This proved the value of Figma's rate limiter and finally put a stop...</p>
            <span className="author-date"><a href="#">Marvin.</a><br></br><span className="date">Apr 12</span></span>
          </div>
        </div>
        <div className="two-blog">
          <section>
            <div className="first-img"></div>
            <div className="content">
              <h2>Black Water/White Silence</h2>
              <p>Raoul and Merriam lean back into the arc of their smooth <br></br>black leather office chairs. The top floor of the Manhattan branch <br></br>is an icy room...</p>
              <span className="author-date"><a href="#">Mayur.</a><br></br> <span className="date">March 23</span></span>
            </div>
          </section>
          <section>
            <div className="first-img"></div>
            <div className="content">
              <h2>This Is the Mindfulness App Apple Doesn't Want You To Have</h2>
              <p>Space was reportedly rejected from the App Store. Here's why.</p>
              <span className="author-date"><a href="#">Meet.</a><br></br> <span className="date">March 24</span></span>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default Blogs