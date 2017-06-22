import React from 'react'
import './MainContent.css'

const MainContent = () => {
  return(
    <div id="main-content-container" className= "main-content-container">
     <div className="top-main-content">
       <h3>DEATH STAR incorporated</h3>
       <p>It is a blast here!</p>
      </div>
      <div className="main-content">
        <section className="row-1"><h5>Welcome</h5>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      </section>
      <section className="row-2 "></section>
      <section className="row-3">Hi! We are Death Star incorporated,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</section>
      <section className="row-4"></section>
      <section className="row-5"></section>
      <section className="row-6">
       <div>
        <p>999-9999-9999</p>
        <p>deathstarincorporated.com</p>
       </div>
        <div>
           <p>718 Colorado Ave N</p>
           <p>Suite 300</p>
           <p> Denver, Colorado, 80202</p>
        </div>
      </section>
      <section className="row-7"></section>
      <section className="row-8">
        <h6>PARTIAL CLIENT LIST</h6>
        <ul className='list-container'>
          <li>Target</li>
          <li>FaceBook</li>
          <li>The New York Times</li>
          <li>Chronicle Books</li>
          <li>Williams Sonoma</li>
          <li>Moet Hennessy</li>
          <li>Minnesota Orchestra</li>
          <li>Lowes</li>
          <li>Big Cartel</li>
          <li>Real Simple Magazine</li>
          <li>Random House</li>
          <li>Wired</li>
          <li>Old Navy</li>
          <li>Purina</li>
          <li>Post</li>
          <li>JCPenny</li>
          <li>ESPN Magazine</li>
          <li>Minnesota Opera</li>
          <li>Zendesk</li>
        </ul>
      </section>
    </div>
    <footer>
      <div className="footer-section">
       <span>Connect</span>
        <p>TWITTER</p>
        <p>FACEBOOK</p>
        <p> DRIBBLE</p>
        <p>INSTAGRAM</p>
        <p>PINTEREST</p>
      </div>
      <div className="footer-section">
        <span>Contact</span>
        <div>
           <p>718 Colorado Ave N</p>
           <p>Suite 300</p>
           <p> Denver, Colorado, 80202</p>
        </div>
     </div>
     <div className="footer-section">
       <p>999-9999-9999</p>
       <p>deathstarincorporated.com</p>
     </div>
     <div className="footer-section">
     <copyright>© 2004 – 2017 death star incorporated</copyright>
     </div>
    </footer>
  </div>
  )
}

export default MainContent
