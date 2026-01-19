import "./styles/education.css";

function Education() {
  const items = [
    {
      year: "2019",
      title: "Ensino Médio Completo",
      school: "Colégio EREM Lagoa Encantada",
      description:
        "Realizei o ensino médio no Colégio EREM Lagoa Encantada, onde adquiri uma base sólida de conhecimentos acadêmicos e desenvolvi habilidades essenciais para minha formação pessoal e profissional.",
      local: "Recife-PE",
    },
    {
      year: "2025",
      title: "Graduado em Análise e Desenvolvimento de Sistemas",
      school: "UNINASSAU",
      description:
        "Concluí o diploma em Análise e Desenvolvimento de Sistemas na UNINASSAU, desenvolvendo competências em programação, análise de requisitos e modelagem de sistemas.",
      local: "Remoto",
    },
    {
      year: "2026",
      title: "Bootcamp em Desenvolvimento Fullstack",
      school: "Generation Brasil",
      description:
        "Recebi treinamento intensivo e ao vivo em desenvolvimento fullstack, abrangendo tanto o frontend quanto o backend, com foco em tecnologias modernas, práticas ágeis e também em questões interpessoais.",
      local: "Online",
    },
    {
      year: "2027",
      title: "Curso Técnico Fullstack Python",
      school: "EBAC",
      description:
        "Participei do curso técnico de desenvolvimento fullstack com ênfase em Python na EBAC, adquirindo habilidades práticas em desenvolvimento web, bancos de dados e frameworks populares.",
      local: "Online",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="about-title">
        EDUCAÇÃO
        <div className="about-underline-wrapper">
          <span className="about-underline" />
          <span className="about-subtitle">Aprendizado</span>
        </div>
      </h2>

      <div className="timeline">
        <div className="timeline-wrapper">
          {items.map((item, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={`${item.year}-${index}`}
            >
              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <h4>{item.title}</h4>
                <span className="school">{item.school}</span> <br />
                <span>{item.local}</span>
                <p>{item.description}</p>
              </div>

              <div className="timeline-center">
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
