import { motion } from "framer-motion";
import "./styles/about.css";

function About() {
  return (
    <motion.div
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="about-image">
        <img src="about-pic.jpg" alt="" className="about-img" />
      </div>

      <div className="section-title">
        <h2 className="title">
          SOBRE MIM
          <div className="underline-wrapper">
            <span className="underline" />
            <span className="subtitle">Quem sou eu</span>
          </div>
        </h2>

        <div className="about-text">
          <p>
            Sou desenvolvedor de software e atuo na área de programação desde
            2021, movido pela curiosidade e pelo desejo constante de evoluir
            tecnicamente. Tenho familiaridade em backend com Node.js e
            TypeScript, onde gosto de trabalhar com arquitetura, organização de
            código e construção de APIs bem estruturadas, mas também tenho ampla
            experiência com Desenvolvimento frontend, o que me permite entender
            o produto de ponta a ponta. Ao longo da minha jornada, participei do
            desenvolvimento de sistemas reais, lidando com desafios como regras
            de negócio, integração entre serviços, prazos, tomada de decisões
            técnicas e até a criação de um SAAS completo de RH. <br /> Sou
            graduado em Análise e Desenvolvimento de Sistemas mas sigo em
            constante aprendizado, buscando aprimorar boas práticas, aprofundar
            meus conhecimentos e crescer profissionalmente, com o objetivo de
            assumir desafios cada vez maiores e gerar impacto através da
            tecnologia.
          </p>

          <div className="btn-container">
            <button
              className="about-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Joao_Henrique_Desenvolvedor_FullStack.pdf";
                link.download = "Joao_Henrique_Desenvolvedor_FullStack.pdf";
                link.click();
              }}
            >
              Baixar CV
            </button>

            <button className="about-btn">
              <a
                href="https://wa.me/5581986171237"
                target="_blank"
                rel="noreferrer"
              >
                Me contactar
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
