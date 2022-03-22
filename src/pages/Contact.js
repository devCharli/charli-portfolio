import "./css/Contact.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-icons">
        <a
          href="mailto:charlisung@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaEnvelope />
        </a>
        <a href="https://github.com/devCharli" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/charli-sung-626720223/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p className="copy-right">Charli Sung © 2022</p>
    </section>
  );
}
