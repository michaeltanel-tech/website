import { DetailedSection } from "./DetailedSection";
import { ImageModal } from "./ImageModal";
import goKart1 from "../assets/gokart1.jpeg";
import goKart2 from "../assets/gokart2.jpg";

export const Interests = () => {
  return (
    <div className="content">
      <p className="section-heading">Interests</p>
      <div className="image-gallery">
        <ImageModal imageClass="gallery-img" src={goKart1} alt="Go karting" />
        <ImageModal imageClass="gallery-img" src={goKart2} alt="Go karting 2" />
      </div>
      <div className="interests-card-text">
        <DetailedSection
          title="Sports"
          description={[
            "Race in a competitive go-karting league and love watching Formula 1.",
            "Avid hockey fan — favorite team is the Chicago Blackhawks.",
            "Enjoy both playing and watching golf.",
          ]}
        />
        <DetailedSection
          title="TV & Movies"
          description={[
            <> Favorite films: <i>Goodfellas</i>, <i>A Night at the Roxbury</i>, and <i>The Departed</i>.</>,
            <> Favorite shows: <i>The Sopranos</i>, <i>Entourage</i>, and <i>Succession</i>.</>,
          ]}
        />
      </div>
    </div>
  );
};
