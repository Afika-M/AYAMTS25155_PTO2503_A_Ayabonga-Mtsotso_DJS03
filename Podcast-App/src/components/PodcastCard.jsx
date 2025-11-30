import React from "react";
import { GenreService } from "../utils/GenreService";
import { DateUtils } from "../utils/DateUtils";

const PodcastCard = ({
  podcastid,
  title = "No title",
  image = "",
  genres = [],
  seasons = 0,
  updated = "",
  onSelect,
}) => {
  const genreNames = GenreService.getNames(genres);
  const formattedDate = updated ? DateUtils.format(updated) : "";

  return (
    <div className="card" onClick={() => onSelect?.({ id: podcastid })}>
      <img src={image}  />
      <h3>{title}</h3>
      <p>{seasons} season{Number(seasons) > 1 ? "s" : ""}</p>
      <div className="tags">
        {genreNames.map((g, idx) => (
          <span key={idx} className="tag">{g}</span>
        ))}
      </div>
      <p className="updated">{formattedDate}</p>
    </div>
  );
};

export default PodcastCard;