import React from 'react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { playBladeSound } from '../utils/audio';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 border border-[#d97706]/40 bg-[#1c1917] text-[#d97706] text-xs font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ЖИВАЯ ОЧЕРЕДЬ И ЗАПИСЬ // СЕГОДНЯ СВОБОДНО 3 КРЕСЛА</span>
          </div>

          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-[0.92]">
            ОСТРАЯ СТАЛЬ. <br />
            <span className="text-[#d97706] amber-glow">БЕСКОМПРОМИССНОЕ</span> МАСТЕРСТВО.
          </h1>

          <p className="text-stone-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Мы против конвейерных стрижек на бегу. Мы возродили культуру классического бритья опасной бритвой, хирургических фейдов и ухода за кожей лица с бокалом односолодового скотча в руке.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => {
                playBladeSound('snip');
                onOpenBooking();
              }}
              className="px-8 py-4 bg-[#d97706] hover:bg-[#b45309] text-stone-950 font-bebas text-xl tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xl shadow-amber-950/30"
            >
              <span>ВЫБРАТЬ ВРЕМЯ И КРЕСЛО</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#services"
              onClick={() => playBladeSound()}
              className="px-8 py-4 border border-[#404040] hover:border-[#d97706] text-white font-bebas text-xl tracking-wider uppercase transition-colors text-center cursor-pointer"
            >
              ПРАЙС-ЛИСТ УСЛУГ
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-[#262626] grid grid-cols-3 gap-4 text-xs font-mono text-stone-400">
            <div>
              <div className="flex text-[#d97706] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d97706]" />
                ))}
              </div>
              <span className="text-white font-bold">4.98 / 5.0</span> Рейтинг гостей
            </div>
            <div>
              <div className="text-white font-bold text-sm">18 500+</div>
              Идеальных стрижек
            </div>
            <div>
              <div className="text-white font-bold text-sm">Основан в 2018</div>
              Флагманский клуб
            </div>
          </div>
        </div>

        {/* Right Column: Special Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#121212] p-8 border border-[#262626] shadow-2xl relative">
            <div className="flex justify-between items-start border-b border-[#262626] pb-4 mb-6">
              <div>
                <span className="text-[10px] tracking-widest text-[#d97706] font-mono uppercase">
                  ФЛАГМАНСКИЙ СЕРВИС
                </span>
                <h3 className="font-bebas text-3xl text-white tracking-wide mt-1">
                  КОРОЛЕВСКИЙ РИТУАЛ
                </h3>
              </div>
              <span className="font-bebas text-3xl text-[#d97706]">4 500 ₽</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
              Двойное распаривание горячим полотенцем с эвкалиптовым маслом, пропитка сандаловым кремом, чистое бритьё японским клинком Feather, охлаждающий компресс и комплимент — выдержанный скотч.
            </p>

            <div className="space-y-2.5 border-t border-[#262626] pt-4 mb-6 text-xs text-stone-300 font-mono">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                <span>60 минут работы топ-барбера</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                <span>Маска с вулканическим пеплом и очищение пор</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                <span>Массаж воротниковой зоны и головы</span>
              </div>
            </div>

            <button
              onClick={() => {
                playBladeSound('snip');
                onOpenBooking('Королевский ритуал');
              }}
              className="w-full py-3 bg-stone-900 border border-[#d97706]/60 hover:bg-[#d97706] hover:text-stone-950 text-white font-bebas text-lg tracking-wider uppercase transition-colors cursor-pointer"
            >
              ЗАБРОНИРОВАТЬ ЭТО КРЕСЛО
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
