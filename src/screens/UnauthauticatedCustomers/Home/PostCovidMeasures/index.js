import React from "react";
import "./style.scss";
import limitedUserIcon from "../../../../images/icon_users.svg";
import filteringIcon from "../../../../images/icon_filtering.svg";
import cleaningIcon from "../../../../images/icon_cleaning.svg";

class PostCovidMeasures extends React.Component {
  render() {
    return (
      <section id="postCovidMeasures">
        <div class="content yellowBackground">
          <h2>Our Covid Measures</h2>
          <div class="bloc covidMeasuresList">
            <div class="covidMeasure">
              <img src={limitedUserIcon} alt="limite users icon" />
              <h6>Limited users</h6>
              <p>
                Less than 3-4 people in any given time in our spaces. Our pods
                are made of thick panels and installed next to each other with a
                space gap in between. There is at least a 1.5 metre distance
                between doors. Thus, you can feel safe in the knowledge that you
                are unlikely to get close to another user.
              </p>
            </div>
            <div class="covidMeasure">
              <img src={filteringIcon} alt="air-filtering icon" />
              <h6>Air-filtering</h6>
              <p>
                Each space is now equipped with an air filtration system that
                helps kill bacteria in the air. Every day we keep the filter
                running, along with vacuuming and disinfecting the floors twice
                - in the morning and evening - to ensure we get rid of any virus
                droplets.
              </p>
            </div>
            <div class="covidMeasure">
              <img src={cleaningIcon} alt="extra cleaning icon" />
              <h6>Extra cleaning</h6>
              <p>
                Each user will have access to hand sanitisers and wipes before &
                after her/his stay with us. Of course, we change the bed linens
                after every use. We encourage all of our users to wash their
                hands regularly and to avoid booking a pod if they feel unwell
                (body temperature, dry continuous cough).
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PostCovidMeasures;
