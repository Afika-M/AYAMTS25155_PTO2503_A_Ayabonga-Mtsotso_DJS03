import React from "react";

const Modal = ({ podcast, onClose }) => {
  if (!podcast) return null; // don't render if nothing is selected

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{podcast.title}</h2>
        <img src={podcast.image} alt={podcast.title} />
        <p>Seasons: {podcast.seasons}</p>
        <p>Updated: {podcast.updated}</p>
        <p>Genres: {podcast.genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default Modal;