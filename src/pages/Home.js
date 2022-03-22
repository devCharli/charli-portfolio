import "./css/Home.css";
import Pdf from "../documents/Charli_Sung.pdf";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <h2>Hi, my name is Charli Sung.</h2>
        <h3>A self-taught front-end developer in Sacramento, CA.</h3>
        <a href={Pdf} target="_blank">
          résumé
          <FaExternalLinkAlt className="balloon" />
        </a>
      </div>
    </section>
  );
}
