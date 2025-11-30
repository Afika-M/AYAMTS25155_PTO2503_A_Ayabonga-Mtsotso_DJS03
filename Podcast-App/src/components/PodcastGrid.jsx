import { useState } from "react";
import PodcastCard from "./PodcastCard";
import Modal from "../components/Modal";
/**
 * Renders a grid of podcast cards and manages modal state
 * @param {object[]} podcastList - Array of podcast data
 * @returns JSX.Element
 */

export default function PodcastGrid({ podcastList }) {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handleSelect = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const handleClose = () => {
    setSelectedPodcast(null);
  };

  return (
    <div id="podcastGrid" className="podcast-grid">
      {podcastList.map((p) => (
        <PodcastCard
          key={p.id}
          podcastid={p.id}
          title={p.title}
          image={p.image}
          seasons={p.seasons}
          updated={p.updated}
          genres={p.genres}
          onSelect={() => handleSelect(p)}
        />
      ))}
      {/* Render modal only if a podcast is selected */}
      {selectedPodcast && (
        <Modal podcast={selectedPodcast} onClose={handleClose} />
      )}
    </div>
  );
}
