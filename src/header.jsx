import { motion } from "framer-motion";
import "./styles/header.css";
import { useState } from "react";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3, // entra depois da hero começar
    },
  },
};

const navVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header variants={headerVariants} initial="hidden" animate="show">
      {/* LOGO */}
      <motion.img
        src="JS-logo.png"
        alt="João Silva"
        className="header-logo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      />


      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* NAV */}
      <motion.nav className={menuOpen ? "open" : ""} variants={navVariants} initial="hidden" animate="show">
        {[
          "Início",
          "Sobre",
          "Experiências",
          "Stack",
          "Projetos",
          "Educação",
          "Contato",
        ].map((item, i) => (
          <motion.a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="link-underline"
            onClick={() => setMenuOpen(false)}
            variants={linkVariants}
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>
    </motion.header>
  );
}

export default Header;
