import React from "react";
import "./works.css";
import StreetEatz from "../../assets/streeteatz.png";
import DraftMadness from "../../assets/draftmadness.png";
import Mmdraft from "../../assets/mmdraft.png";
import Portfolio from "../../assets/portfolio.png";
import Portfolio5 from "../../assets/under_construction.png";
import Portfolio6 from "../../assets/under_construction2.png";

const projects = [
  { image: StreetEatz, name: "StreetEatz", link: "https://github.com/StreetEatz" },
  { image: DraftMadness, name: "Turing Draft Madness", link: "https://github.com/ithill22/draft_madness_be" },
  { image: Mmdraft, name: "(WIP) Fantasy Draft App 2.0", link: "https://github.com/orgs/mmdraft/repositories", wip: true },
  { image: Portfolio, name: "Portfolio Website", link: "#" },
  { image: Portfolio5, name: "Portfolio 5 Project", comingSoon: true },
  { image: Portfolio6, name: "Portfolio 6 Project", comingSoon: true }
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">Curious to learn more about what I do? Let's explore.</span>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <div className="workContainer" key={index}>
            <div className="imgWrapper">
              <img src={project.image} alt={project.name} className="worksImg" />
            </div>
            <div className="overlay">
              {project.wip && <span className="wipLabel">Work in Progress</span>}
              <span className="projectName">{project.name}</span>
              {project.comingSoon ? (
                <span className="comingSoon">Coming Soon</span>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/ithill22" target="_blank" rel="noopener noreferrer" className="workBtn">See More</a>
    </section>
  );
};

export default Works;

