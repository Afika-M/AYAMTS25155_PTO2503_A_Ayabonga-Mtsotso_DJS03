import { useEffect, useState } from 'react';
import { fetchPodcasts } from './api/fetchPodcast'; 
import PodcastGrid from './components/PodcastGrid';
import {genres} from './data'
import Header from './components/Header';
import './App.css';

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []); 

  return (
    <>
      <Header />  
      <main>
        {loading && <div className="status-message loading">Loading podcasts</div>}

        {error &&  <div className="status-message error">Error: {error}</div>}

        {!loading && !error && (
         <PodcastGrid podcastList={podcasts} genres={genres} />
        )}
      </main>
    </>
  );
}

export default App
