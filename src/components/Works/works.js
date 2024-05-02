import React from "react";
import "./works.css";
import StreetEatz from "../../assets/streeteatz.png";
import DraftMadness from "../../assets/draftmadness.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const projects = [
  { image: StreetEatz, name: "StreetEatz", link: "https://github.com/StreetEatz" },
  { image: DraftMadness, name: "Draft Madness Backend", link: "https://github.com/ithill22/draft_madness_be" },
  { image: Portfolio3, name: "Portfolio 3 Project", link: "#" },
  { image: Portfolio4, name: "Portfolio 4 Project", link: "#" },
  { image: Portfolio5, name: "Portfolio 5 Project", link: "#" },
  { image: Portfolio6, name: "Portfolio 6 Project", link: "#" }
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc">Demo text...</span>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="workContainer">
              <img src={project.image} alt={project.name} className="worksImg" />
              <div className="overlay">
                <span className="projectName">{project.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
