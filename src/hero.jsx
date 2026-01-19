import { motion } from "framer-motion";
import "./styles/hero.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const imageVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <>
      <div className="hero-section">
        {/* TEXTO */}
        <motion.div
          className="hero-info"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Desenvolvedor Fullstack que entrega{" "}
            <span className="hero-span">experiências únicas</span> e qualidade!
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Sou apaixonado por criar soluções digitais que fazem a diferença,
            focando não apenas na entrega do código, mas em criatividade,
            resolução e qualidade.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button className="hero-button lets-talk">Vamos conversar</button>
            <button className="hero-button see-projects">
              {" "}
              <a href="https://github.com/hnrkDEV" target="_blank">
                {" "}
                Ver projetos
              </a>
            </button>
          </motion.div>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          className="hero-imgContainer"
          variants={imageVariants}
          initial="hidden"
          animate="show"
        >
          <img src="joao-pic.png" alt="" className="hero-img" />
        </motion.div>
      </div>

      {/* TICKER fica sem animação de entrada */}
      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-group">
            <img src="icons/javascript-original.svg" alt="Javascript" />
            <img src="icons/typescript-original.svg" alt="Typescript" />
            <img src="icons/react-original.svg" alt="React" />
            <img src="icons/vite-original.svg" alt="Vite" />
            <img src="icons/tailwindcss-original.svg" alt="Tailwind CSS" />
            <img src="icons/nodejs-original.svg" alt="NodeJS" />
            <img src="icons/nestjs-original.svg" alt="NestJS" />
            <img src="icons/mysql-original.svg" alt="MySQL" />
            <img src="icons/mongodb-original.svg" alt="MongoDB" />
            <img src="icons/git-original.svg" alt="Git" />
            <img src="icons/github-original.svg" alt="Github" />
            <img src="icons/insomnia-original.svg" alt="Insomnia" />
            <img src="icons/postman-original.svg" alt="Postman" />
            <img src="icons/docker-original.svg" alt="Docker" />
          </div>

          <div className="ticker-group">
            <img src="icons/javascript-original.svg" alt="" />
            <img src="icons/typescript-original.svg" alt="" />
            <img src="icons/react-original.svg" alt="" />
            <img src="icons/vite-original.svg" alt="" />
            <img src="icons/tailwindcss-original.svg" alt="" />
            <img src="icons/nodejs-original.svg" alt="" />
            <img src="icons/nestjs-original.svg" alt="" />
            <img src="icons/mysql-original.svg" alt="" />
            <img src="icons/mongodb-original.svg" alt="" />
            <img src="icons/git-original.svg" alt="" />
            <img src="icons/github-original.svg" alt="" />
            <img src="icons/insomnia-original.svg" alt="" />
            <img src="icons/postman-original.svg" alt="" />
            <img src="icons/docker-original.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
