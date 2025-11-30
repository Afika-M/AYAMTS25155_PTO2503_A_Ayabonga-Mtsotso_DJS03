import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";


const Modal = ({ podcast, onClose }) => {
  if (!podcast) 
    return null; // don't render if nothing is selected
  const formattedDate = podcast.updated ? DateUtils.format(podcast.updated) : "";

  // Convert genre IDs to names using GenreService
  const genreNames = Array.isArray(podcast.genres)
    ? GenreService.getNames(podcast.genres)
    : [];


  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{podcast.title}</h2>
        <img src={podcast.image} className="modal-img"/>
        <p>Seasons: {podcast.seasons}</p>
        <p className="updated">Updated: {formattedDate}</p>
        <div className="tags">
            {genreNames.map((g, idx) => (
            <span key={idx} className="tag">{g}</span>
            ))}
      </div>
      </div>
    </div>
  );
};

export default Modal;