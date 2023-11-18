import { createClient } from "pexels";

export default function getLocationImage(location) {
  const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);
  const query = location;

  return new Promise((resolve, reject) => {
    client.photos.search({ query, per_page: 1 })
      .then(photos => resolve(photos.photos[0].src.small))
      .catch(error => reject(error));
  });
}
