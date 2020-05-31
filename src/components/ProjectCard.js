import React from "react";

const ProjectCard = ({ image, name, info, to, github }) => {
  return (
    <div className="project__card">
      <div className="project__info">
        <h2>{name}</h2>
        <p>{info}</p>
        <div className="project__buttons">
          <a
            className="button-link-sec"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </a>
          <a
            className="button-link"
            href={to}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
        </div>
      </div>
      <a
        className="project__image-link"
        target="_blank"
        rel="noopener noreferrer"
        href={to}
      >
        <div className="project__image__container">
          <img src={image} alt={`Describes project ${name}`} />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
