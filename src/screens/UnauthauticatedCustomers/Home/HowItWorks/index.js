import React from "react";
import "./style.scss";
import bookIcon from "../../../../images/Book Yellow Circle.svg";
import confirmationIcon from "../../../../images/icon_home_checkin.svg";
import checkInIcon from "../../../../images/Book Yellow Circle.svg";
import enjoyBreakIcon from "../../../../images/icon_home_tick.svg";

class HowItWorks extends React.Component {
  render() {
    return (
      <section id="howItWorks">
        <div class="content">
          <div class="service">
            <img src={bookIcon} alt="book icon" />
            <h5>Book</h5>
            <p>
              Book your private space for 30 mins up to 4 hours easily with your
              name and email.
            </p>
          </div>
          <div class="service">
            <img src={confirmationIcon} alt="confirmation icon" />
            <h5>Confirmation</h5>
            <p>You'll receive an email confirming your booking.</p>
          </div>
          <div class="service">
            <img src={checkInIcon} alt="check-in icon" />
            <h5>Check-in</h5>
            <p>
              A receptionist will welcome you and set you up in your private and
              peaceful pod.
            </p>
          </div>
          <div class="service">
            <img src={enjoyBreakIcon} alt="enjoy your break icon" />
            <h5>Enjoy your break</h5>
            <p>
              Just lie down and relax. You can power-nap and meditate in peace.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
