import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./styles/contact.css";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        },
      );
  }

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h2 className="section-title">
        CONTATO
        <div className="underline-wrapper">
          <span className="underline" />
          <span className="subtitle">Vamos conversar</span>
        </div>
      </h2>

      <div className="contact-wrapper">
        {/* TEXTO */}
        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Tem um projeto em mente?</h3>
          <p>
            Estou aberto a oportunidades, freelas, projetos autorais e desafios
            que envolvam desenvolvimento de software, arquitetura e soluções
            reais. Se você procura alguém comprometido, técnico e focado em
            impacto, vamos conversar.
          </p>

          <div className="contact-links">
            <a
              href="https://wa.me/5581986171237"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/hnrkDEV"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/joao-hrnk"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={formRef}
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={sendEmail}
        >
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={4}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <span className="form-success">Mensagem enviada com sucesso!</span>
          )}

          {status === "error" && (
            <span className="form-error">Erro ao enviar. Tente novamente.</span>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
