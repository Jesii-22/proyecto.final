import Link from "next/link";

export default function MoviesGallery({ movies }) {
  return (
    <div className="py-5 px-4">
      <h2 className="text-2xl font-bold mb-4">Cartelera de Cine</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: `/movies/[id]`,
              query: { id: movie.id },
            }}
            className="group"
          >
            <div
              className="relative w-full aspect-video bg-cover bg-center rounded"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40"></div>
            </div>
            <p className="text-center mt-2 font-medium">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
