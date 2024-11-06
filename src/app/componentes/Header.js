"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#30270D] px-10 py-3">
       <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#FFFFFF]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 4C25.78 14.22 33.78 22.22 44 24C33.78 25.78 25.78 33.78 24 44C22.22 33.78 14.22 25.78 4 24C14.22 22.22 22.22 14.22 24 4Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold">TICKET FLICKS</h2>
        </div>
        <nav className="flex items-center gap-9">
        <Link href={`/`}>Películas</Link>
        <Link href={`/`}>Cartelera</Link>
        <Link href={`/`}>Contacto</Link>
       
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <input type="text" placeholder="Search" className="form-input bg-[#30270D] text-[#FFFFFF] placeholder:text-[#D3B45F]" />
        <button className="bg-[#30270D] text-[#FFFFFF] px-4 py-2 rounded">Profile</button>
      </div>
    </header>
  );
}
