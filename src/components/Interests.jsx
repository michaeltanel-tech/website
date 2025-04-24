import React from "react";
import { DetailedSection } from "./DetailedSection";
import { ImageModal } from "./ImageModal";

export const Interests = () => {
  return (
    <div className="content profile-container">
      <div className="image-gallery">
        <ImageModal imageClass="image-card" src={require("../assets/go kart 1.jpeg")} alt="gokart1" />
        <ImageModal imageClass="image-card" src={require("../assets/go kart 2.jpg")} alt="gokart2" />
      </div>
      <div>
        <DetailedSection
          title="Sports"
          description={[
            "I race in a go-karting league and enjoy watching Formula 1",
            "I love playing and watching hockey — my favorite team is the Chicago Blackhawks",
            "I also enjoy both playing and watching golf",
          ]}
        />
        <DetailedSection
          title="TV & Movies"
          description={[
            <>
              Some of my favorite movies are <i>Goodfellas</i>, <i>A Night at the Roxbury</i>, and <i>The Departed</i>.
            </>,
            <>
              I'm a big fan of TV shows like <i>The Sopranos</i>, <i>Entourage</i>, and <i>Succession</i>.
            </>,
          ]}
        />
      </div>
    </div>
  );
};
