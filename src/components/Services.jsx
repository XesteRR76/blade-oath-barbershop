import React from 'react';
import { Scissors, Clock, Sparkles } from 'lucide-react';
import { playBladeSound } from '../utils/audio';

export default function Services({ onSelectService }) {
  const list = [
    {
      name: 'Королевское бритьё опасной бритвой',
      time: '45 мин',
      price: 3200,
      desc: 'Классическое распаривание горячим полотенцем, нанесение пены барсучьей кистью, чистое бритьё клинком и ледяной минеральный компресс.',
      badge: 'ХИТ КЛУБА',
    },
    {
      name: 'Хирургический Skin Fade & Моделирование',
      time: '50 мин',
      price: 2800,
      desc: 'Плавнейший переход от нуля с бритвенной точностью контуров, мытье головы с охлаждающим ментолом и укладка премиальной глиной.',
      badge: 'ПОПУЛЯРНОЕ',
    },
    {
      name: 'Скульптурирование бороды и усов',
      time: '35 мин',
      price: 2200,
      desc: 'Создание четкой геометрии бороды машинкой и опасной бритвой с питанием органическим кедровым маслом.',
      badge: '',
    },
    {
      name: 'Полный комплекс реновации (Head & Beard)',
      time: '85 мин',
      price: 4900,
      desc: 'Стрижка, оформление бороды, детокс-маска для лица, распаривание, массаж головы и воротниковой зоны.',
      badge: 'ПРЕМИУМ',
    },
    {
      name: 'Стрижка Отец и Сын',
      time: '75 мин',
      price: 4500,
      desc: 'Два кресла рядом. Традиции стиля, передаваемые из поколения в поколение, напитки и непринужденная атмосфера.',
      badge: 'СЕМЕЙНОЕ',
    },
    {
      name: 'Камуфляж седины и тонирование',
      time: '30 мин',
      price: 2000,
      desc: 'Естественное маскирование седины без эффекта окрашенных волос специальными безаммиачными пигментами.',
      badge: '',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262626]">
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
          // МЕНЮ УСЛУГ И ТАРИФЫ
        </span>
        <h2 className="font-bebas text-5xl sm:text-6xl text-white mt-2 tracking-wide">
          УСЛУГИ МАСТЕРОВ
        </h2>
        <div className="w-16 h-1 bg-[#d97706] mx-auto mt-3" />
        <p className="text-sm text-stone-400 max-w-lg mx-auto mt-4 font-light">
          В стоимость каждой услуги включены напитки из нашего бара, мытьё головы премиальными шампунями и финальная укладка.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <div
            key={item.name}
            className="brutalist-card p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-xs text-stone-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{item.time}</span>
                </span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-amber-950/80 border border-amber-600/40 text-amber-300">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bebas text-2xl text-white group-hover:text-[#d97706] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-stone-400 mt-2 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between">
              <span className="font-bebas text-2xl text-white">
                {item.price.toLocaleString('ru-RU')} ₽
              </span>
              <button
                onClick={() => {
                  playBladeSound('snip');
                  onSelectService(item.name);
                }}
                className="px-4 py-2 bg-stone-900 border border-[#404040] hover:border-[#d97706] hover:bg-[#d97706] hover:text-stone-950 text-white font-bebas text-sm tracking-wider uppercase transition-colors cursor-pointer"
              >
                Выбрать
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
