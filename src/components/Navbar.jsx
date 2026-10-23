import React from 'react';
import { Scissors, Calendar } from 'lucide-react';
import { playBladeSound } from '../utils/audio';

export default function Navbar({ onOpenBooking }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={() => playBladeSound('snip')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-[#171717] border border-[#d97706]/40 flex items-center justify-center text-[#d97706] group-hover:border-[#d97706] transition-colors">
            <Scissors className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-wider text-white">
              BLADE & OATH
            </div>
            <div className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase font-mono -mt-1">
              МУЖСКОЙ КЛУБ & БАРБЕРШОП
            </div>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium text-stone-400">
          <a
            href="#services"
            onClick={() => playBladeSound()}
            className="hover:text-[#d97706] transition-colors"
          >
            Услуги и цены
          </a>
          <a
            href="#masters"
            onClick={() => playBladeSound()}
            className="hover:text-[#d97706] transition-colors"
          >
            Барберы
          </a>
          <a
            href="#perks"
            onClick={() => playBladeSound()}
            className="hover:text-[#d97706] transition-colors"
          >
            Клуб
          </a>
          <a
            href="#contact"
            onClick={() => playBladeSound()}
            className="hover:text-[#d97706] transition-colors"
          >
            Контакты
          </a>
        </nav>

        {/* Booking CTA Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              playBladeSound('snip');
              onOpenBooking();
            }}
            className="px-6 py-2.5 bg-[#d97706] hover:bg-[#b45309] text-stone-950 font-bebas text-lg tracking-wider uppercase transition-colors duration-200 cursor-pointer shadow-lg shadow-amber-950/40 flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>ЗАПИСАТЬСЯ</span>
          </button>
        </div>
      </div>
    </header>
  );
}
