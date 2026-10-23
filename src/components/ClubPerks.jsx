import React from 'react';
import { Wine, Flame, Disc, Shield } from 'lucide-react';

export default function ClubPerks() {
  const perks = [
    {
      icon: Wine,
      title: 'БАР С ОДНОСОЛОДОВЫМ ВИСКИ',
      desc: 'Бокал выдержанного шотландского или японского виски, крафтовый кофе и лимонад бесплатно к любой услуге.',
    },
    {
      icon: Flame,
      title: 'ЭВКАЛИПТОВЫЙ КОМПРЕСС',
      desc: 'Натуральные горячие полотенца, пропитанные эфирными маслами, для глубокого расслабления мышц лица.',
    },
    {
      icon: Disc,
      title: 'ВИНИЛОВЫЙ ЗВУК',
      desc: 'Никакой раздражающей попсы. Только тёплый джаз, блюз и классический рок на ламповом виниловом проигрывателе.',
    },
    {
      icon: Shield,
      title: 'МЕДИЦИНСКАЯ СТЕРИЛИЗАЦИЯ',
      desc: 'Инструменты проходят трёхэтапную сухожаровую стерилизацию и вскрываются из крафт-пакета строго при госте.',
    },
  ];

  return (
    <section id="perks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262626]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="bg-[#121212] p-6 border border-[#262626]">
              <div className="w-12 h-12 bg-black border border-[#d97706]/40 flex items-center justify-center text-[#d97706] mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-2xl text-white tracking-wide">
                {p.title}
              </h3>
              <p className="text-xs text-stone-400 mt-2 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
