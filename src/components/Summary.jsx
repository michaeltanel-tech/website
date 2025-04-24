import React from "react";
import { ImageModal } from "./ImageModal";

export const Summary = () => {
  return (
    <div className="content summary">
      <div className="image-gallery">
        <ImageModal imageClass="image-card" src={require("../assets/headshot.jpg")} alt="headshot" />
      </div>
      <div className="summary-details">
        <p>
          Hi, I'm Michael Tanel and welcome to my site! I bring over 6 years of experience as a software developer, driven by a passion for crafting
          innovative software solutions to complex business challenges. I hold a Bachelor's degree in Computer Engineering from Queen's University.
        </p>
        <p>
          In my current role as a Team Lead and Software Developer, I focus on client services for a large-scale business banking application. My
          background includes developing a B2P product and providing freelance IT/software consulting services. My diverse experience across various
          projects, technologies, and development processes has honed my ability to adapt quickly to new environments and rapidly acquire new skills
          to deliver effective solutions.
        </p>
        <p>
          I am eager to explore new opportunities where I can contribute to dynamic projects, help companies achieve their business objectives, and
          develop software that addresses real-world problems.
        </p>
      </div>
    </div>
  );
};
