import { ReactComponent as WorkIcon } from "../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/img/school.svg";
import verizon from "../assets/img/verizon.png";
import { ReactComponent as IBM} from "../assets/img/IBM.png";
import { ReactComponent as ACSB} from "../assets/img/ACSB.png";
import { ReactComponent as GT} from "../assets/img/GT.png";
import circle from "../assets/img/circle.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import colorSharp from "../assets/img/color-sharp.png"


import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experiences = () =>{
 

  return (
    <div>
      <section className="experience" id="experience">
        <h1>Experience</h1>
        
      <VerticalTimeline>
]        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              icon={<img src={circle} alt="" />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {/* {showButton && (
                <a className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"}`}
                      href="/"
                  >
                    {element.buttonText}
                </a>
              )} */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </section>
    </div>
    
  );
}