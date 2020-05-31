import React from "react";
import { motion } from "framer-motion";

const animateAboutCont = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 2, delay: 0.3 },
};

const About = () => {
  return (
    <motion.div {...animateAboutCont} className="about">
      <p className="about__heading">
        Hello
        <span role="image" aria-label="dasdsa">
          {" "}
          👋
        </span>
        , I'm <span className="ime">Dusan Jovanovic</span> . I'm Final year
        student at School of Electrical and Computer Engineering of Applied
        Studies, with strong will to learn new technologies.
      </p>
    </motion.div>
  );
};

export default About;
