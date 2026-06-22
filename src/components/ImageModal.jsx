import { useEffect, useState } from "react";
import "./ImageModal.css";

export const ImageModal = ({ src, alt, imageClass }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="image-card-wrapper" onClick={() => setOpen(true)}>
        <img className={imageClass} src={src} alt={alt} />
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} className="modal-image" />
        </div>
      )}
    </>
  );
};
