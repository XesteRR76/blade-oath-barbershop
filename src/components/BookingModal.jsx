import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Scissors } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playBladeSound } from '../utils/audio';

export default function BookingModal({ isOpen, onClose, initialService, initialMaster }) {
  const [service, setService] = useState(initialService || 'Королевское бритьё опасной бритвой');
  const [master, setMaster] = useState(initialMaster || 'Любой свободный мастер');
  const [date, setDate] = useState('Сегодня');
  const [time, setTime] = useState('18:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setBooked(true);
    playBladeSound('success');
    try {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#d97706', '#f59e0b', '#ffffff'],
      });
    } catch (_) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#121212] border border-[#d97706]/50 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => {
            playBladeSound();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!booked ? (
          <div>
            <div className="flex items-center space-x-2 text-[#d97706] font-mono text-xs tracking-widest mb-1 uppercase">
              <Scissors className="w-4 h-4" />
              <span>ОНЛАЙН-ЗАПИСЬ В КЛУБ</span>
            </div>
            <h3 className="font-bebas text-3xl text-white mb-2">
              ВЫБОР КРЕСЛА И ВРЕМЕНИ
            </h3>
            <p className="text-xs text-stone-400 mb-6 font-light">
              Заполните данные для бронирования времени. Мы подготовим горячие полотенца и выбранный сорт виски к вашему приходу.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-stone-300 uppercase mb-1">
                  Услуга
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                >
                  <option>Королевское бритьё опасной бритвой (3 200 ₽)</option>
                  <option>Хирургический Skin Fade & Моделирование (2 800 ₽)</option>
                  <option>Скульптурирование бороды и усов (2 200 ₽)</option>
                  <option>Полный комплекс реновации (4 900 ₽)</option>
                  <option>Королевский ритуал (4 500 ₽)</option>
                  <option>Стрижка Отец и Сын (4 500 ₽)</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 uppercase mb-1">
                  Барбер
                </label>
                <select
                  value={master}
                  onChange={(e) => setMaster(e.target.value)}
                  className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                >
                  <option>Любой свободный мастер</option>
                  <option>Виктор Вэнс (Шеф-барбер)</option>
                  <option>Маркус Крофт (Топ-мастер)</option>
                  <option>Джексон Рид (Мастер по бородам)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 uppercase mb-1">
                    День
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                  >
                    <option>Сегодня</option>
                    <option>Завтра</option>
                    <option>Послезавтра</option>
                    <option>В субботу</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-300 uppercase mb-1">
                    Слот времени
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                  >
                    <option>14:00</option>
                    <option>15:30</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:30</option>
                    <option>21:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-300 uppercase mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="напр. Александр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase mb-1">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1c1917] border border-[#333] px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-[#d97706] hover:bg-[#b45309] text-stone-950 font-bebas text-xl tracking-wider uppercase transition-colors cursor-pointer shadow-lg shadow-amber-950/40"
              >
                ПОДТВЕРДИТЬ БРОНЬ В КЛУБ
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 font-mono">
            <div className="w-16 h-16 bg-black border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-bebas text-4xl text-white mb-2">
              КРЕСЛО ЗАБРОНИРОВАНО
            </h3>
            <p className="text-xs text-stone-300 mb-4">
              Ждем вас, <strong className="text-white">{name}</strong>!
            </p>
            <div className="bg-[#1c1917] p-4 border border-[#333] text-left text-xs text-stone-300 space-y-1 mb-6">
              <div>Услуга: <span className="text-[#d97706]">{service}</span></div>
              <div>Мастер: <span className="text-white">{master}</span></div>
              <div>Время: <span className="text-white">{date}, {time}</span></div>
              <div>Телефон: <span className="text-white">{phone}</span></div>
            </div>
            <p className="text-[11px] text-stone-400 mb-6">
              SMS с деталями визита и схемой парковки отправлена на указанный номер.
            </p>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-stone-900 border border-[#333] text-white font-bebas text-lg tracking-wider uppercase"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
