import { motion } from "framer-motion";
import "./styles/header.css";

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

      {/* NAV */}
      <motion.nav variants={navVariants} initial="hidden" animate="show">
        <motion.a
          className="link-underline"
          href="#home"
          variants={linkVariants}
        >
          Início
        </motion.a>
        <motion.a
          className="link-underline"
          href="#about"
          variants={linkVariants}
        >
          Sobre
        </motion.a>
        <motion.a
          className="link-underline"
          href="#experiencias"
          variants={linkVariants}
        >
          Experiências
        </motion.a>
        <motion.a
          className="link-underline"
          href="#stack"
          variants={linkVariants}
        >
          Stack
        </motion.a>
        <motion.a
          className="link-underline"
          href="#projetos"
          variants={linkVariants}
        >
          Projetos
        </motion.a>
        <motion.a
          className="link-underline"
          href="#educacao"
          variants={linkVariants}
        >
          Educação
        </motion.a>
        <motion.a
          className="link-underline"
          href="#contact"
          variants={linkVariants}
        >
          Contato
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}

export default Header;
