import React from 'react'
import './Forms.css'

const Forms = () => {
  return(
    <div id="form-container" className="form-container">
      <div className="form-top-bar"></div>
      <div className="forms">
      <div className="form-style-5">
        <form>
          <fieldset>
          <legend><span className="number">1</span>Spy Candidate Info</legend>
          <input type="text" name="field1" placeholder="Your Name *"/>
          <input type="text" name="field1" placeholder="Your Agent ID *"/>
          <input type="email" name="field2" placeholder="Your Email *"/>
          <textarea name="field3" placeholder="About yourself"></textarea>
          <label htmlFor="job">Interests:</label>
          <select id="job" name="field4">
          <optgroup label="Indoors">
            <option value="fishkeeping">Fishkeeping</option>
            <option value="reading">Reading</option>
            <option value="boxing">Boxing</option>
            <option value="debate">Debate</option>
            <option value="gaming">Gaming</option>
            <option value="snooker">Snooker</option>
            <option value="other_indoor">Other</option>
          </optgroup>
          <optgroup label="Outdoors">
            <option value="football">Football</option>
            <option value="swimming">Swimming</option>
            <option value="fishing">Fishing</option>
            <option value="climbing">Climbing</option>
            <option value="cycling">Cycling</option>
            <option value="other_outdoor">Other</option>
          </optgroup>
          </select>
          </fieldset>
          <fieldset>
          <legend><span className="number">2</span> Additional Info</legend>
          <textarea name="field3" placeholder="About Your Agent School"></textarea>
          </fieldset>
          <input type="submit" value="Apply" onClick={(e)=>{e.preventDefalut()}}/>
         </form>
        </div>
        <div className="form-style-6">
          <h1>Contact Us</h1>
          <form>
          <input type="text" name="field1" placeholder="Your Name" />
          <input type="email" name="field2" placeholder="Email Address" />
          <textarea name="field3" placeholder="Type your urgent  Message"></textarea>
          <input type="submit" value="Send" onClick={(e)=>{e.preventDefalut()}}/>
          </form>
        </div>

    <footer className="forms-footer">
      <div className="forms-footer-content">
        <div className="footer-logo">
        </div>
        <div className="forms-footer-text">The name is...</div>
        <div className="footer-logo">
        </div>
      </div>
    </footer>
  </div>
</div>
  )
}

export default Forms
