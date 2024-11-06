"use client";

import MainFeaturedMovie from "./componentes/MainFeaturedMovie";
import MoviesCarousel from "./componentes/MoviesCarousel";
import MoviesGallery from "./componentes/MoviesGallery";
import Header from "./componentes/Header";
import MainContent from "./componentes/MainContent";
import useMovies from "./Hooks/useMovies";
import Link from "next/link";  // Importamos Link para las rutas

export default function Home() {
  const { movies, loading, error } = useMovies("now_playing");
  const { movies: popularMovies } = useMovies("popular");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const featuredMovie = movies[0];

  return (
    <div className="min-h-screen bg-[#181407] text-[#FFFFFF] font-sans">
      <Header />
      {featuredMovie && <MainFeaturedMovie movie={featuredMovie} />}
      
      {/* Carrusel de películas populares */}
      {popularMovies && (
        <MoviesCarousel movies={popularMovies} />
      )}

      {/* Enlaces a la galería */}
      <MainContent movies={movies} />

      {/* Galería de películas en cartelera */}
      <MoviesGallery movies={movies} />
    </div>
  );
}
