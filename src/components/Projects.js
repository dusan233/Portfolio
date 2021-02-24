import React from "react";
import ProjectCard from "./ProjectCard";

import musicProjectImage from "../assets/Optimized-music.jpg";
import movieProjectImage from "../assets/Optimized-movies.jpg";
import recipesProjectImage from "../assets/Optimized-recipe.jpg";
import restaurantImage from "../assets/Optimized-Screenshot_1.jpg";
import spotifyProjectImage from '../assets/Spoty_cover _img.png';
import rentorImage from '../assets/rentor.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">Projects</h1>
      <div className="projects__container">
      <ProjectCard
          image={spotifyProjectImage}
          name="Spotify clone"
          to="https://spoty-client.web.app/login"
          github="https://github.com/dusan233/spoty_client"
          info="Spotify clone application made with React, Spotify api and Node.js"
        />
        <ProjectCard
          image={rentorImage}
          name="Rentor"
          to="https://rentor-1.web.app/"
          github="https://github.com/dusan233/rentor-Angular-app"
          info="Angular application for searching for perfect rental anywhere in America. App uses realtor api and mapbox api for displaying interactive map."
        />
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
