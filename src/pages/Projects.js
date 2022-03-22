import "./css/Projects.css";
import { useState } from "react";
import react from "../images/icons/react.svg";
import javascript from "../images/icons/javaScript.svg";
import gatsby from "../images/icons/gatsby.svg";
import graphql from "../images/icons/graphql-icon.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import firebase from "../images/icons/firebase.svg";
import tailwind from "../images/icons/tailwind-css.svg";
import commerce from "../images/e-commerce.png";
import blog from "../images/blog.png";
import todo from "../images/todo.png";
import sushi from "../images/sushi.png";
import money from "../images/money-tracker.jpg";

export default function Projects() {
  const [contents, setContents] = useState([
    {
      id: 0,
      title: "Money Tracker",
      stack: [react, firebase, tailwind],
      description:
        "A simple money management application with authentication functionality. The app is designed with Tailwind CSS and provides dark/light mode. Users can sign up with their emails and all the data is stored in the Firestore database.",
      picture: money,
      show: true,
      url: "https://slp-blog.netlify.app/",
      github: "https://github.com/devCharli/gatsby-blog-project",
    },
    {
      id: 1,
      title: "Speech Pathologist's Blog",
      stack: [react, gatsby, graphql],
      description:
        "A blog built with Gatsby, a static-site framework. It is developed with react, nodeJS, and graphQL. The blog contents are easily managed with markdown documents. All contents’ titles are slugified and added to the url. The contents are searchable by categories and tags.",
      picture: blog,
      show: false,
      url: "https://slp-blog.netlify.app/",
      github: "https://github.com/devCharli/gatsby-blog-project",
    },
    {
      id: 2,
      title: "Sushi Restaurant Website",
      stack: [react, javascript],
      description:
        "A responsive sushi restaurant website built with React. The website provides customers with the menu, hours, and location. A visual map is displayed by using Google Maps API. Customers can submit requests on the 'Contact' page, and the message is sent to the owner’s email by EmailJS.",
      picture: sushi,
      show: false,
      url: "https://akira-sushi.netlify.app/",
      github: "https://github.com/devCharli/charli-portfolio",
    },
    {
      id: 3,
      title: "Shoe Website",
      stack: [react, javascript],
      description:
        "A mock e-commerce site with React and fake store API. React context hook is used to manage the state. A user can (pretend to) login, add products to a cart, and make a payment. Adding sign in and log in with a database would be an improvement.",
      picture: commerce,
      show: false,
      url: "https://shop-with-api.netlify.app/",
      github: "https://github.com/devCharli/final-mock-shop",
    },
    {
      id: 4,
      title: "Todo List",
      stack: [react, bootstrap],
      description:
        "A CRUD (create, read, update, delete) To-do List built with React, bootstrap, and localStorage. A user can add a list, edit it, and delete it. The list is draggable. The progress bar on the bottom shows how many tasks are completed. Data persists in the browser localStorage.",
      picture: todo,
      show: false,
      url: "https://todo-charli.netlify.app/",
      github: "https://github.com/devCharli/first-todo-app",
    },
  ]);

  const activateContent = (id) => {
    const activateProject = contents.map((project) => {
      return project.id === id
        ? { ...project, show: true }
        : { ...project, show: false };
    });

    setContents(activateProject);
  };

  return (
    <section className="projects">
      <div className="project-container">
        <div className="preview-btns">
          {contents.map((project, i) => (
            <button
              className={project.show ? "active" : ""}
              onClick={() => activateContent(i)}
            ></button>
          ))}
        </div>
        <div className="contents">
          {contents.map((project) => (
            <div
              className={project.show ? "project active" : "project"}
              key={project.title}
            >
              <div className="project-left">
                <div
                  className={project.show ? "description show" : "description"}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <div className="stack">
                    {project.stack &&
                      project.stack.map((item) => {
                        return <img className="project-icon" src={item} />;
                      })}
                  </div>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <div className="code-btns">
                    <a href={project.url} target="_blank">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank">
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <img src={project.picture} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
