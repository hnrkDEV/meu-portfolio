import "./styles/hero.css";
function Hero() {
  return (
    <>
      <div className="hero-section">
        <h1 className="hero-h1">EAI, SOU O JOÃO!</h1>
        <img src="joao-pic-nobg.png" className="my-picture" alt="" />
        <p className="hero-text">
          Sou um desenvolvedor fullstack apaixonado por tecnologia e inovação.{" "}
          <br />
          Adoro criar soluções eficientes e elegantes para desafios complexos.
          Vamos construir algo incrível juntos!
        </p>
        <button className="hero-cta">Contactar!</button>
      </div>
      <section class="hero-transition"></section>
    </>
  );
}

export default Hero;
