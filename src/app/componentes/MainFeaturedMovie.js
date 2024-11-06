"use client";
import Link from "next/link";

export default function MainFeaturedMovie({ movie }) {
  return (
    <div className="relative w-full">
      <Link href={`/movies/${movie.id}`}>
        <div
          className="w-full aspect-video bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          }}
        ></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p>{movie.release_date}</p>
        </div>
      </Link>
    </div>
  );
}
