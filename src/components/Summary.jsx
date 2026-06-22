import { ImageModal } from "./ImageModal";
import headshotImg from "../assets/headshot.jpg";

export const Summary = () => {
  return (
    <div className="content">
      <div className="hero">
        <div className="hero-photo-wrapper">
          <ImageModal
            imageClass="hero-photo"
            src={headshotImg}
            alt="Michael Tanel"
          />
        </div>
        <div className="hero-text">
          <h1>Michael Tanel</h1>
          <p className="hero-role">Team Lead &amp; Software Developer</p>
          <p>
            Over 6 years of experience crafting innovative software solutions to complex business
            challenges. Currently leading a team delivering client services for a large-scale
            business banking application.
          </p>
          <p>
            My background spans full-stack development, freelance IT consulting, and a B.Eng. in
            Computer Engineering from Queen's University. I adapt quickly to new environments and
            thrive on building software that solves real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};
