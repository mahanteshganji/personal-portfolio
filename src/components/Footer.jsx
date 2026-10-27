import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8"> 
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row"> 
        
        {/* Copyright */} 
        <p className="text-sm text-gray-500"> © {new Date().getFullYear()} Mahantesh Ganjagol. All rights reserved. </p> 
        
        {/* Social Links */} 
        <div className="flex items-center gap-6"> 
            
            <a href="https://github.com/mahanteshganji" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition hover:text-white" > GitHub </a> 
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition hover:text-white" > LinkedIn </a> 
            <a href="mailto:mahanteshg510@gmail.com" className="text-sm text-gray-400 transition hover:text-white" > Email </a> 
            </div> 
            </div> 
            </footer>
            
            
                    ); 
                }
  
