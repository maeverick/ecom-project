import React from "react";
import "./story.style.css";
import { useState } from "react";
import StoryModal from "../../Component/story-modal/story-modal.component";

const Team = [
  {
    name: "George Spencer",
    position: "IT expert",
    picture: require("../../images/people/beautiful-woman-face-portrait-brown-background.jpeg"),
  },
  {
    name: "Verna White",
    position: "Lead Dev",
    picture: require("../../images/people/portrait-british-woman.jpeg"),
  },
  {
    name: "Samuel Barnett",
    position: "Marketing",
    picture: require("../../images/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg"),
  },
];

const Story = () => {
  const [details, setDetails] = useState(false);
  const handleShowDetails = () => {
    setDetails(true);
  };
  const handleClosedetails = () => {
    setDetails(false);
  };
  return (
    <section className="story">
      <div className="story-intro">
        <div className="story-intro-text">
          <h1>
            <span className="highlight">Company</span> <br />
            Fashion
          </h1>
        </div>
        <div className="story-image">
          <img
            src={require("../../images/header/businesspeople-meeting-office-working.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className="people">
        <div className="people-section">
          <h2>
            Meet our <span className="highlight">team</span>
          </h2>
          <div className="people-block">
            {Team.map((members) => {
              return (
                <div className="people-detail">
                  <div className="people-image">
                    <img src={members.picture} alt="" />
                  </div>
                  <div className="people-name">
                    <div>
                      <ul>
                        <li>
                          <h3>{members.name}</h3>
                        </li>
                        <li>
                          <h4>{members.position}</h4>
                        </li>
                      </ul>
                    </div>
                    <div className="plus">
                      <button onClick={handleShowDetails}> </button>
                    </div>
                    <StoryModal
                      details={details}
                      close={handleClosedetails}
                      team={Team}
                    
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="review">{/* TODO: create review slider */}</div>
    </section>
  );
};

export default Story;
