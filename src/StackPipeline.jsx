import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./styles/stack-pipeline.css";

const pipeline = [
  {
    key: "ide",
    title: "IDE & Código",
    description:
      "Etapa inicial do ciclo de desenvolvimento, onde a solução começa a tomar forma. Envolve a organização do ambiente de desenvolvimento, definição de padrões de código, versionamento e boas práticas desde o primeiro commit. Aqui priorizo legibilidade, manutenibilidade e consistência do código, utilizando ferramentas que apoiam a validação, documentação e testes de APIs e integrações ao longo do desenvolvimento.",
    techs: [
      "VS Code",
      "Git",
      "GitHub",
      "CI/CD",
      "Postman",
      "Insomnia",
      "Swagger",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    description:
      "Camada responsável pela lógica de negócio, regras do sistema e orquestração das operações. Atuo na construção de APIs robustas, escaláveis e seguras, aplicando conceitos de arquitetura em camadas, separação de responsabilidades, clean code e boas práticas de engenharia de software. O foco está na criação de endpoints bem estruturados, validação de dados, segurança, performance e integração eficiente com outras camadas do sistema.",
    techs: ["Node.js", "NestJS", "TypeScript", "Java", "Spring Boot"],
  },
  {
    key: "database",
    title: "Persistência de Dados",
    description:
      "Etapa dedicada à modelagem, persistência e gerenciamento dos dados da aplicação. Envolve a definição de estruturas adequadas, relacionamentos, índices e estratégias de acesso aos dados, sempre com foco em integridade, consistência e performance. Busco garantir que os dados suportem a lógica de negócio de forma eficiente, escalável e segura, considerando cenários reais de uso e crescimento do sistema.",
    techs: ["MongoDB", "SQL"],
  },
  {
    key: "frontend",
    title: "Frontend",
    description:
      "Camada responsável pela interface e pela experiência do usuário. Atuo na criação de interfaces modernas, responsivas e acessíveis, garantindo boa usabilidade, performance e clareza visual. O frontend é desenvolvido de forma integrada ao backend, consumindo APIs de maneira eficiente e refletindo corretamente as regras de negócio, sempre com foco em entregar uma experiência fluida e intuitiva ao usuário final.",
    techs: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    key: "devops",
    title: "DevOps",
    description:
      "Fase em que a aplicação é preparada para rodar em ambientes reais. Envolve deploy, configuração e manutenção da infraestrutura, garantindo estabilidade, segurança e escalabilidade. Atuo na configuração de servidores, automação de processos, gerenciamento de aplicações em produção e otimização do ambiente, assegurando que o sistema esteja pronto para suportar uso contínuo e crescimento.",
    techs: ["Docker", "PM2", "Nginx", "VPS", "AWS"],
  },
  {
    key: "production",
    title: "Produção",
    description:
      "Etapa final do ciclo, onde o sistema está disponível para usuários reais. O foco está em disponibilidade, monitoramento, versionamento e evolução contínua da aplicação. Envolve acompanhamento do comportamento do sistema em produção, identificação de melhorias, correção de falhas e garantia de que a solução continue performando de forma estável, segura e escalável ao longo do tempo.",
    techs: ["SSL", "Proxy Reverso", "Monitoramento"],
  },
];

function StackPipeline() {
  const [active, setActive] = useState(pipeline[0]);

  return (
    <motion.section
      className="stack-pipeline"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h2 className="section-title">
        MINHA STACK
        <div className="underline-wrapper">
          <span className="underline" />
          <span className="subtitle">Como eu trabalho</span>
        </div>
      </h2>

      <div className="stack-summary">
        <div className="stack-groups">
          <div className="stack-group">
            <span className="group-title">Backend</span>
            <p>Node.js · NestJS · TypeScript · Java · Spring Boot</p>
          </div>

          <div className="stack-group">
            <span className="group-title">Frontend</span>
            <p>React · Vite · JavaScript · HTML5 · CSS3 · TailwindCSS</p>
          </div>

          <div className="stack-group">
            <span className="group-title">Banco de Dados</span>
            <p>MongoDB · SQL</p>
          </div>

          <div className="stack-group">
            <span className="group-title">DevOps</span>
            <p>Docker · PM2 · Nginx · VPS · AWS</p>
          </div>
        </div>
      </div>

      {/* PIPELINE */}
      <div className="pipeline-wrapper">
        {pipeline.map((step, index) => (
          <button
            key={step.key}
            className={`pipeline-step ${
              active.key === step.key ? "active" : ""
            }`}
            onClick={() => setActive(step)}
          >
            <span className="step-index">{index + 1}</span>
            <span className="step-title">{step.title}</span>
          </button>
        ))}
      </div>

      {/* DETALHE */}
      <div className="pipeline-detail">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="pipeline-card"
          >
            <h3>{active.title}</h3>
            <p>{active.description}</p>

            <div className="pipeline-techs">
              {active.techs.map((tech) => (
                <span key={tech} className="pipeline-pill">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default StackPipeline;
