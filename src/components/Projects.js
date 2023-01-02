import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import website from "../assets/img/personal_website.png"
import NN from "../assets/img/NN.png";
import AAI from "../assets/img/AAI.png";
import cafe from "../assets/img/cafe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Website",
      description: "Web Design",
      imgUrl: website,
    },
    {
      title: "Classical Music Interpolations",
      description: "Artificial Intelligence",
      imgUrl: AAI,
    },
    {
      title: "Neural Style Transfer",
      description: "Neural Networks",
      imgUrl: NN,
    },
    {
      title: "Cafe Review GUI",
      description: "Event-driven GUI",
      imgUrl: cafe,
      
    },
  ];

  const linkStyle = {
    paddingRight: "1px",
    fontWeight: 'bold',
    fontSize: 15,
    textDecoration: "none",
    color: 'white',
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are my personal projects I have worked on and completed in the past few years. Each project has taught me valuable skills and provided me with a deeper insight into different technologies. For information on current projects I'm working on, please view my resume linked above!</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                         {...project}
                         />
                      )
                    })
                  }
                </Row>
                <a href='https://drive.google.com/file/d/16P8fFSAgoVC6R0ZaHQZ-30SuSdQiGwlw/view?usp=sharing' target="_blank" style={linkStyle}><h3>(Click here for more information on the above projects!)</h3></a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
