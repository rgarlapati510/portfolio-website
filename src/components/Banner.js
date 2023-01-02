import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle, BorderLeft, ChevronCompactLeft } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BrowserRouter as Router, Link} from 'react-router-dom';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  const linkStyle = {
    paddingRight: "1px",
    fontWeight: 'bold',
    fontSize: 20,
    textDecoration: "none",
    color: 'white',
  }

  const handleAnchorClick = event => {
    console.log('Resume Link clicked');
    ChevronCompactLeft.log(event.currentTarget);
  }

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! My name is Ruthvika Garlapati`} </h1>
                    <p>I am currently a 4th year Computer Science Student at the Georgia Institute of Technology. My concentrations within my major include Artificial Intelligence and Human Computer Interaction. My goal is to use my skills to make a positive impact on peoples' lives, whether it be through developing new technologies, building tools to connect people across the world, or creating efficient systems. I am passionate about producing innovative solutions to real-world problems. </p>
                    <a onClick={handleAnchorClick} href="https://drive.google.com/file/d/1lk0Z-l_17tsmkqGEP0CB7yd1bGhURHpa/view?usp=sharing" targer="blank" rel="noreferrer" style={linkStyle}>Resume        <ArrowRightCircle size={25} /></a>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img style={{width: 400, height: 400, borderRadius: 400/ 2}} src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

    </Router>
    
  )
}
