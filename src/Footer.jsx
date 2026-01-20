import { motion } from "framer-motion";
import "./styles/footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-left">
          <span className="footer-name">João Henrique</span>
          <span className="footer-role">Desenvolvedor Fullstack</span>
          <span className="frase">
            Sistemas bem pensados, código bem escrito
          </span>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <a href="https://github.com/hnrkDEV" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/joao-hrnk"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/5581986171237"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} · Todos os direitos reservados
      </div>
    </motion.footer>
  );
}

export default Footer;
