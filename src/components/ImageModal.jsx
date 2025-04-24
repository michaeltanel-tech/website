import React, { useState } from "react";
import "./ImageModal.css";

export const ImageModal = ({ src, alt, imageClass }) => {
  const [open, setOpen] = useState(false);

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
