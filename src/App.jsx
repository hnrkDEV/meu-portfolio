import About from "./about.jsx";
import "./App.css";
import Contact from "./contact.jsx";
import Education from "./education.jsx";
import ExperienceSpotlight from "./ExperienceSpotlight.jsx";
import Footer from "./Footer.jsx";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import ProjectsMorph from "./ProjectsMorph.jsx";
import StackPipeline from "./StackPipeline.jsx";

function App() {
  return (
    <>
      {/*     
  ordem dos componentes será:
  Hero
  Sobre mim
  Experiências
  Stack
  Projetos
  Educação
  Contato
       */}
      <Header />
      <Hero />
      <About />
      <ExperienceSpotlight />
      <StackPipeline />
      <ProjectsMorph />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
