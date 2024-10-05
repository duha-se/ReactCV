import { useState } from "react";
import "./App.css";

function App() {
  // Popup visibility control functions
  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  return (
    <>
      <div>
        <button id="open-popup-btn" onClick={openPopup}>
          Contact Me
        </button>

        <div id="popup" className="popup" style={{ display: "none" }}>
          <div className="popup-content">
            <h2>Contact Me</h2>

            <form action="#" method="post">
              <div className="row">
                <div className="column">
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                  />
                </div>
                <div className="column">
                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" id="last-name" name="last-name" required />
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="column">
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <label htmlFor="country">Country:</label>
                  <select id="country" name="country" required>
                    <option value="">Select Country</option>
                    <option value="ps">Palestine</option>
                    <option value="sp">Spain</option>
                    <option value="lb">Lebanon</option>
                    <option value="sw">Switzerland</option>
                    <option value="ho">Holland</option>
                  </select>
                </div>
                <div className="column">
                  <label htmlFor="hours">Available Hours:</label>
                  <div className="time-inputs">
                    <input
                      type="time"
                      id="hours-start"
                      name="hours-start"
                      required
                    />
                    <span>-</span>
                    <input
                      type="time"
                      id="hours-end"
                      name="hours-end"
                      required
                    />
                  </div>
                </div>
              </div>

              <label htmlFor="message">Write a note or message for me:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <div className="buttons">
                <input type="submit" value="Submit" />

                <button type="button" onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
