import React from 'react';
import { Scissors, MapPin, Phone, Clock } from 'lucide-react';
import { playBladeSound } from '../utils/audio';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-black border-t border-[#262626] py-16 px-4 sm:px-6 lg:px-8 text-stone-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#171717] border border-[#d97706]/40 flex items-center justify-center text-[#d97706]">
              <Scissors className="w-4 h-4 -rotate-45" />
            </div>
            <span className="font-bebas text-2xl text-white tracking-wider">
              BLADE & OATH
            </span>
          </div>
          <p className="text-stone-400 font-light max-w-sm leading-relaxed">
            Клуб джентльменов и традиционный барбершоп. Культура безупречного мужского груминга, чистого бритья опасной бритвой и честного разговора.
          </p>
          <button
            onClick={() => {
              playBladeSound('snip');
              onOpenBooking();
            }}
            className="px-6 py-2.5 bg-[#d97706] text-stone-950 font-bebas text-base tracking-wider uppercase transition-colors"
          >
            ЗАБРОНИРОВАТЬ ВИЗИТ
          </button>
        </div>

        <div className="md:col-span-4 space-y-3">
          <div className="text-white font-bebas text-xl tracking-wider">
            ЛОКАЦИИ И РЕЖИМ
          </div>
          <div className="flex items-start space-x-2 text-stone-400">
            <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
            <span>Москва, ул. Большая Дмитровка 18 (Собственная парковка)</span>
          </div>
          <div className="flex items-center space-x-2 text-stone-400">
            <Phone className="w-4 h-4 text-[#d97706] shrink-0" />
            <span>+7 (495) 890-12-34 (Консьерж)</span>
          </div>
          <div className="flex items-center space-x-2 text-stone-400">
            <Clock className="w-4 h-4 text-[#d97706] shrink-0" />
            <span>Ежедневно с 10:00 до 23:00</span>
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div className="text-white font-bebas text-xl tracking-wider">
            ПРАВИЛА КЛУБА
          </div>
          <ul className="space-y-1.5 text-stone-400 text-[11px]">
            <li>• Строго 18+ (кроме семейного формата)</li>
            <li>• Бесплатный бар для гостей</li>
            <li>• Сигарная терраса во внутреннем дворике</li>
            <li>• Wi-Fi и удобные кресла для работы</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-600 gap-4">
        <div>
          © 2026 BLADE & OATH GENTLEMEN’S CLUB. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </div>
        <div>
          ДИЗАЙН СТАНДАРТА BRUTALIST DARK LUXURY
        </div>
      </div>
    </footer>
  );
}
