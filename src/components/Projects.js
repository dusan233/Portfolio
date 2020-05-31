import React from "react";
import ProjectCard from "./ProjectCard";

import musicProjectImage from "../assets/Optimized-music.jpg";
import movieProjectImage from "../assets/Optimized-movies.jpg";
import recipesProjectImage from "../assets/Optimized-recipe.jpg";
import restaurantImage from "../assets/Optimized-Screenshot_1.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">Projects</h1>
      <div className="projects__container">
        <ProjectCard
          image={recipesProjectImage}
          name="MERN Recipe sharing app"
          to="https://recipeapp53.firebaseapp.com/"
          github="https://github.com/dusan233/Sharing-recipes-app-mern-frontend"
          info="Web application where users can find their new favourite recipes and share their own recipes with others."
        />
        <ProjectCard
          image={movieProjectImage}
          to="https://movidb-c4446.firebaseapp.com/"
          github="https://github.com/dusan233/movieapp-React-firebase"
          name="Movie & Tv Shows application"
          info="React and firebase application that uses TMDB api for showing movies and tv shows."
        />
        <ProjectCard
          image={musicProjectImage}
          name="Mini Deezer"
          to="https://minideezer.netlify.app/"
          github="https://github.com/dusan233/musicapp-React-firebase"
          info="Simple app made with React, firebase and deezer api where you can listen your favourite tracks."
        />
        <ProjectCard
          image={restaurantImage}
          name="Restaurant website"
          to="https://restaurantdule.netlify.app/"
          github="https://github.com/dusan233/restaurant-html-css-javascript"
          info="HTML/SASS/Javascript website"
        />
      </div>
    </div>
  );
};

export default Projects;
