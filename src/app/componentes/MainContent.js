import MovieCard from "./MovieCard";

export default function MainContent({ movies }) {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="text-center">
          
          {/* mantener los botones de 'Trailer' y 'Get Tickets' ??? */}
        </div>
        
        <h2 className="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Películas más vistas 
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
