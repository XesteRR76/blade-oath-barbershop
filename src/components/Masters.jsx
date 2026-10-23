import React from 'react';
import { Award, Scissors, Calendar } from 'lucide-react';
import { playBladeSound } from '../utils/audio';

export default function Masters({ onSelectMaster }) {
  const team = [
    {
      name: 'Виктор Вэнс',
      role: 'ШЕФ-БАРБЕР & ОСНОВАТЕЛЬ',
      exp: '12 лет в ремесле',
      spec: 'Опасная бритва, классика Лондона, авторские техники фейдинга.',
      awards: 'Чемпион Russian Barber Week 2021',
    },
    {
      name: 'Маркус Крофт',
      role: 'ТОП-МАСТЕР',
      exp: '8 лет в ремесле',
      spec: 'Текстурные стрижки, Low/Mid/High Fade, адаптация под форму черепа.',
      awards: 'Топ-3 Barber Battle Pro',
    },
    {
      name: 'Джексон Рид',
      role: 'МАСТЕР ПО БОРОДАМ',
      exp: '7 лет в ремесле',
      spec: 'Архитектура бороды любой сложности, камуфляж седины, уход за кожей.',
      awards: 'Сертифицированный трихолог-эксперт',
    },
  ];

  return (
    <section id="masters" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262626]">
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
          // КОМАНДА МАСТЕРОВ
        </span>
        <h2 className="font-bebas text-5xl sm:text-6xl text-white mt-2 tracking-wide">
          ХРАНИТЕЛИ КЛИНКА
        </h2>
        <div className="w-16 h-1 bg-[#d97706] mx-auto mt-3" />
        <p className="text-sm text-stone-400 max-w-lg mx-auto mt-4 font-light">
          Каждый наш барбер прошел суровую академическую подготовку и владеет искусством работы клинком на уровне хирурга.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.name} className="brutalist-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 rounded-none bg-stone-900 border border-[#d97706]/40 flex items-center justify-center text-[#d97706] mb-4">
                <Scissors className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#d97706] uppercase">
                {m.role}
              </span>
              <h3 className="font-bebas text-3xl text-white mt-1">
                {m.name}
              </h3>
              <div className="text-xs font-mono text-stone-400 mt-0.5">
                {m.exp}
              </div>

              <p className="text-xs text-stone-300 mt-4 leading-relaxed font-light">
                {m.spec}
              </p>

              <div className="mt-4 pt-3 border-t border-[#262626] flex items-center space-x-2 text-[11px] font-mono text-amber-300/80">
                <Award className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                <span>{m.awards}</span>
              </div>
            </div>

            <button
              onClick={() => {
                playBladeSound('snip');
                onSelectMaster(m.name);
              }}
              className="mt-6 w-full py-2.5 bg-stone-900 border border-[#333] hover:border-[#d97706] text-white font-bebas text-sm tracking-wider uppercase transition-colors cursor-pointer"
            >
              Записаться к {m.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
