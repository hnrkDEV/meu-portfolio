import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./styles/experience-spotlight.css";

const experiences = [
  {
    role: "Estagiário Fullstack",
    company: "Cattavento Tecnologia",
    period: "Mai 2025 — Nov 2025",
    description:
      "Atuei no desenvolvimento, evolução e manutenção de aplicações web e APIs escaláveis, participando ativamente de todo o ciclo de vida do software — desde o levantamento de requisitos até o deploy e sustentação em produção. Trabalhei no desenvolvimento de back-end robusto utilizando Node.js e NestJS, criando endpoints seguros, organizados e alinhados a boas práticas de arquitetura e clean code. Também participei da construção de interfaces web modernas em React, integradas ao back-end via APIs REST. Tive forte atuação em atividades de DevOps, realizando deploys em servidores VPS, configuração de PM2, Nginx, proxy reverso, certificados SSL e organização de ambientes de produção. Contribuí diretamente para a criação de soluções SaaS e sistemas corporativos de RH, com foco em performance, segurança, escalabilidade e impacto real nos processos das empresas atendidas.",
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "React",
      "MongoDB",
      "Docker",
      "PM2",
      "Nginx",
      "VPS",
    ],
  },
  {
    role: "Estagiário Backend",
    company: "Compass UOL",
    period: "Nov 2024 — Mai 2025",
    description:
      "Atuação focada no desenvolvimento de back-end, com criação e manutenção de APIs REST e microserviços utilizando Node.js, TypeScript e NestJS. Trabalhei aplicando conceitos de arquitetura em camadas, separação de responsabilidades e clean code, sempre seguindo padrões e boas práticas de engenharia de software. Participei da integração com APIs externas, modelagem e manipulação de dados com MongoDB e desenvolvimento de funcionalidades próximas a cenários reais de produção. Também atuei na escrita e manutenção de testes automatizados com Jest, garantindo maior confiabilidade e qualidade do código. O trabalho foi realizado em ambiente colaborativo, com versionamento via Git, práticas ágeis e participação em desafios técnicos e trilhas de aprendizado com foco em backend e arquitetura de sistemas.",
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Jest",
      "Git",
      "APIs REST",
    ],
  },
  {
    role: "Estagiário de Suporte Técnico / Frontend",
    company: "IASSEPE",
    period: "Mar 2024 — Nov 2024",
    description:
      "Atuei no desenvolvimento, manutenção e evolução de sistemas institucionais, com foco em front-end e suporte técnico. Trabalhei diretamente na implementação de sistemas voltados a processos administrativos e de licitações, lidando com estruturação e manipulação de dados como lotes, itens, valores e fornecedores. Participei da integração entre front-end e back-end, garantindo a correta comunicação com APIs e a consistência das informações. Desenvolvi lógicas de cálculo para apoio à tomada de decisão, como médias, mediana, quartis e saneamento de dados. Também atuei na correção de bugs, melhorias de usabilidade e ajustes evolutivos em sistemas legados, sempre respeitando requisitos legais, institucionais e boas práticas de desenvolvimento.",
    stack: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Integração com APIs",
      "Análise de Requisitos",
    ],
  },
];

function ExperienceSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = experiences[activeIndex];

  return (
    <motion.section
      className="experience-spotlight"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      id="experiencias"
    >
      <h2 className="section-title">
        EXPERIÊNCIA
        <div className="underline-wrapper">
          <span className="underline" />
          <span className="subtitle">Onde gerei impacto</span>
        </div>
      </h2>

      <div className="spotlight-wrapper">
        {/* NAV */}
        <div className="spotlight-nav">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`spotlight-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{exp.role}</span>
            </button>
          ))}
        </div>

        {/* CONTEÚDO */}
        <div className="spotlight-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.role}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="spotlight-card"
            >
              <span className="period">{active.period}</span>
              <h3>{active.role}</h3>
              <h4>{active.company}</h4>
              <p>{active.description}</p>

              <div className="stack">
                {active.stack.map((tech) => (
                  <span key={tech} className="stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSpotlight;
