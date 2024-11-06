// components/MoviesGallery.js
import MovieCard from "./MovieCard";  // Asegúrate de importar MovieCard

export default function MoviesGallery({ movies }) {
  return (
    <div className="py-5 px-4">
      <h2 className="text-2xl font-bold mb-4">Cartelera de Cine</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} /> 
          </div>
        ))}
      </div>
    </div>
  );
}
