import "./css/About.css";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import javascript from "../images/icons/javaScript.svg";
import react from "../images/icons/react.svg";
import gatsby from "../images/icons/gatsby.svg";
import nodejs from "../images/icons/nodeJs.svg";
import graphql from "../images/icons/graphql-icon.svg";
import heroku from "../images/icons/heroku.svg";
import firebase from "../images/icons/firebase.svg";
import mongoDB from "../images/icons/mongoDB.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import sketch from "../images/icons/sketch.svg";
import netlify from "../images/icons/netlify.svg";
import tailwindcss from "../images/icons/tailwind-css.svg";
import wordpress from "../images/icons/wordpress.svg";
import git from "../images/icons/git.svg";
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <p>
          A bilingual, self-taught, and proactive Front End Developer with great
          communication skills. Experience in web design, JavaScript, and React.
          Dedicated to learning the basics in depth and open to adapting to new
          technologies and environments. Passionate about analyzing problems and
          coming up with creative solutions.
        </p>
        <div className="skills">
          <fieldset className="skill-box">
            <legend>Foundation in</legend>{" "}
            <div className="image-box">
              <img src={html} alt="html5" />
              <img src={css} alt="css3" />
              <img src={javascript} alt="javascript" />
            </div>
          </fieldset>

          <fieldset className="skill-box">
            <legend>Built projects with</legend>
            <div class="image-box">
              <img src={react} alt="react" />
              <img src={gatsby} alt="gatsby" />
              <img src={nodejs} alt="nodejs" />
              <img src={graphql} alt="graphql" />
              <img src={mongoDB} alt="mongoDB" />
              <img src={firebase} alt="firebase" />
            </div>
          </fieldset>

          <fieldset className="skill-box">
            <legend>Design with</legend>
            <div className="image-box">
              <img src={bootstrap} alt="bootstrap" />
              <img src={tailwindcss} alt="tailwind" />
              <img src={sketch} alt="sketch" />
            </div>
          </fieldset>

          <fieldset className="skill-box">
            <legend>Experience in</legend>
            <div className="image-box">
              <img src={git} alt="git" />
              <img src={netlify} alt="netlify" />
              <img src={heroku} alt="heroku" />
              <img src={wordpress} alt="wordpress" />
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
