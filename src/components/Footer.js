import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="icons">
            <Row className="align-items-center">
            <Col size={12} className="text-center text-sm-end">
                <div className="social-icon">
                <a href='https://www.linkedin.com/in/rgarlapati' target="_blank"><img src={navIcon1} alt="" /></a>
                <a href='https://github.com/rgarlapati510' target="_blank"><img src={navIcon2} alt="" /></a>
                <a href='mailto:rgarlapati3@gatech.edu' target="_blank"><img src={navIcon3} alt="" /></a>
                </div>
            </Col>
            </Row>
        </div>
      
    </footer>
  )
}