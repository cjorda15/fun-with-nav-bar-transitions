import React from 'react'
import './MainContent.css'

const MainContent = () => {
  return(
    <div id="main-content-container" className= "main-content-container">
      <div className="top-main-content main-content">
       <h3>DEATH STAR incorporated</h3>
       <p>It is a blast here!</p>
      </div>
      <div className="main-info-container">
        <h6 className="main-info-cat">Who We Are</h6>
        <p className="main-info-text">
          blah blah blah blah
        </p>
        </div>
       <div className="main-info-container">
        <h6 className="main-info-cat">TRAINING!</h6>
        <p className="main-info-text">Get the best paid-training this galaxy has to offer. Enjoy a competitive salary, Good health benefits (dental and vision), life insurance, 401k, flex spending, employee discounts….  Maybe you can not shoot straight, but heck, who can
        </p>
       </div>
     </div>
  )
}

export default MainContent
