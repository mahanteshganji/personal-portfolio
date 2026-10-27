import React from 'react'
import {useState} from 'react'

const Navbar = () => {
    
    const [menuOpen,setMenuOpen] = useState(false);

    const navItems = [
        {name:"Home",href:"#home"},
        {name:"About", href:"#about"},
        {name:"Skills", href:"#skills"},
        {name:"Projects",href:"#projects"},
        {name:"Experience",href:"#experience"},
        {name:"Contact",href:"#contact"},

        
        
    ];

  return (
    
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold text-white"
        >
          Mahantesh<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
  


export default Navbar