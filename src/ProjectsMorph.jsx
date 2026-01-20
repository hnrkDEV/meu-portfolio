import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./styles/projects-morph.css";

const projects = [
  {
    key: "rhally",
    name: "Rhally",
    type: "SaaS de RH",
    image: "/projects/rhally.png",
    description:
      "Sistema SaaS completo para gestão de RH, controle de ponto, empresas clientes e fluxo de funcionários. Desenvolvido com foco em escalabilidade, segurança e organização de regras de negócio.",
    impact: [
      "Redução de processos manuais",
      "Arquitetura escalável",
      "Sistema em produção",
    ],
    stack: ["Node.js", "NestJS", "React", "MongoDB", "Docker", "Nginx"],
  },
  {
    key: "rhallyMobile",
    name: "Rhally Mobile",
    type: "Sistema Mobile Corporativo",
    image: "/projects/rhally-mobile.png",
    description:
      "Aplicação mobile corporativa integrada ao ecossistema Rhally, focada em acesso rápido, usabilidade e sincronização com APIs backend.",
    impact: [
      "Mobilidade para usuários",
      "Integração com backend central",
      "Experiência otimizada",
    ],
    stack: ["React Native", "APIs REST"],
  },
  {
    key: "maisrh",
    name: "MaisRH",
    type: "Sistema Web Corporativo",
    image: "/projects/maisrh.png",
    description:
      "Sistema web de RH para gestão de documentos, solicitações internas e comunicação corporativa, otimizando processos administrativos.",
    impact: [
      "Melhoria de comunicação interna",
      "Centralização de documentos",
      "Redução de tempo operacional",
    ],
    stack: ["Node.js", "React", "MySQL", "PM2"],
  },
  {
    key: "iassepe",
    name: "Sistema de Licitações",
    type: "Sistema Institucional",
    image: "/projects/iassepe.png",
    description:
      "Sistema institucional voltado ao apoio de processos licitatórios, com cálculo de médias, saneamento de preços e apoio à tomada de decisão.",
    impact: [
      "Apoio técnico à decisão",
      "Processos mais confiáveis",
      "Integração com sistemas internos",
    ],
    stack: ["React", "JavaScript", "APIs", "Regras de Negócio"],
  },
  {
    key: "agiliza",
    name: "AgilizaBPO",
    type: "Sistema Web Corporativo",
    image: "/projects/agilizabpo.png",
    description:
      "Sistema corporativo para apoio a operações administrativas e de BPO, com foco em organização de processos e eficiência operacional.",
    impact: [
      "Padronização de processos",
      "Maior controle operacional",
      "Automação de rotinas",
    ],
    stack: ["React", "JavaScript", "APIs"],
  },
  {
    key: "cscRedeGess",
    name: "CSC Rede Gess",
    type: "Sistema Web Corporativo",
    image: "/projects/csc-redegess.png",
    description:
      "Sistema corporativo para centralização de serviços compartilhados, promovendo eficiência, controle e integração entre áreas.",
    impact: [
      "Centralização de serviços",
      "Maior visibilidade de processos",
      "Integração entre áreas",
    ],
    stack: ["React", "JavaScript", "APIs"],
  },
];

function ProjectsMorph() {
  const [active, setActive] = useState(projects[0]);
  const current = active;

  return (
    <motion.section
      className="projects-section"
      id="projetos"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h2 className="section-title">
        PROJETOS PROFISSIONAIS
        <div className="underline-wrapper">
          <span className="underline" />
          <span className="subtitle">Sistemas reais em produção</span>
        </div>
      </h2>

      {/* SELECTOR */}
      <motion.div
        className="projects-selector"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <button
            key={project.key}
            className={`project-tab ${
              current.key === project.key ? "active" : ""
            }`}
            onClick={() => setActive(project)}
          >
            {project.name}
          </button>
        ))}
      </motion.div>

      {/* MORPH PANEL */}
      <motion.div layout className="project-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="project-content"
          >
            {/* IMAGE HERO */}
            <motion.img
              layout
              src={current.image}
              alt={current.name}
              className="project-image"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* INFO */}
            <motion.div
              className="project-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="project-type">{current.type}</span>
              <h3>{current.name}</h3>

              <p className="project-description">{current.description}</p>

              <ul className="project-impact">
                {current.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <div className="project-stack">
                {current.stack.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default ProjectsMorph;
