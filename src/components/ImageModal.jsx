import { useEffect, useState } from "react";
import "./ImageModal.css";

export const ImageModal = ({ src, largeSrc, alt, imageClass }) => {
  const [open, setOpen] = useState(false);
  const modalSrc = largeSrc || src;

  // Preload the modal-sized image into the browser cache so the modal
  // opens instantly without a second network request.
  useEffect(() => {
    if (largeSrc) {
      const img = new Image();
      img.src = largeSrc;
    }
  }, [largeSrc]);

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
          <img src={modalSrc} alt={alt} className="modal-image" />
        </div>
      )}
    </>
  );
};
