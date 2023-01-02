import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects"
// import { Project } from "./components/Project.js";
import { Experiences } from "./components/Experiences.js";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Experiences />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
