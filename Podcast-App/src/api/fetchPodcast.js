
/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from a specified API endpoint and updates state using provided setter functions.
 * Handles loading, error and successful data response via provided state setters
 * 
 * @param {Function} setPodcast 
 * @param {Function} setError 
 * @param {Function} setLoading 
 * 
 * @returns {Promise<void>} A promise that resolves when the fetch operation is complete.
 */

export async function fetchPodcasts(setPodcast, setError, setLoading) {
    try{
        const response = await fetch("https://podcast-api.netlify.app/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPodcast(data);
    } catch (error) {
        console.error("Error fetching podcast data:", error);
    } finally {
        setLoading(false);
    }
}