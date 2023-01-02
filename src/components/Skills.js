import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div class="skills">
                          <div class="details">
                            <span>Python </span>
                            <span>90%</span>
                          </div>
                          <div class="bar">
                              <div id="python-bar"></div>
                          </div>
                        </div>
                        <div class="skills">
                          <div class="details">
                            <span>Java </span>
                            <span>85%</span>
                          </div>
                          <div class="bar">
                              <div id="java-bar"></div>
                          </div>
                        </div>
                        <div class="skills">
                          <div class="details">
                            <span>JavaScript, HTML, CSS </span>
                            <span>85%</span>
                          </div>
                          <div class="bar">
                              <div id="JSHTMLCSS-bar"></div>
                          </div>
                        </div>
                        <div class="skills">
                          <div class="details">
                            <span>React </span>
                            <span>70%</span>
                          </div>
                          <div class="bar">
                              <div id="React-bar"></div>
                          </div>
                        </div>
                        <div class="skills">
                          <div class="details">
                            <span>Machine Learning & AI </span>
                            <span>50%</span>
                          </div>
                          <div class="bar">
                              <div id="MLAI-bar"></div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
