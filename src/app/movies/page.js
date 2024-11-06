'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
          const data = await response.json();
          setMovie(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchMovieDetails();
    }
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
      <p><strong>Sinopsis:</strong> {movie.overview}</p>
      <p><strong>Calificación:</strong> {movie.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-md"
      />
    </div>
  );
};

export default MovieDetail;