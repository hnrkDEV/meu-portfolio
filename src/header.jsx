import "./styles/header.css";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home" className="link-underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link-underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="link-underline">
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#contact" className="link-underline">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="link-underline">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
