import About from "./about.jsx";
import "./App.css";
import Education from "./education.jsx";
import ExperienceSpotlight from "./ExperienceSpotlight.jsx";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
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
      <Education />
    </>
  );
}

export default App;
