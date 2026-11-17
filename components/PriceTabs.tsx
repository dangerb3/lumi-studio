"use client";
import { useState } from "react";

const tabs = {
  Маникюр: [
    ["Маникюр без покрытия", "60 мин", 1400],
    ["Маникюр + гель-лак", "90 мин", 2400],
    ["Укрепление + гель-лак", "120 мин", 2900],
    ["Наращивание", "180 мин", 3900],
    ["Дизайн 1 ноготь", "", 150],
  ],
  Педикюр: [
    ["Педикюр без покрытия", "60 мин", 2000],
    ["Педикюр + гель-лак", "90 мин", 2800],
    ["Аппаратный SMART-педикюр", "75 мин", 2500],
  ],
  Брови: [
    ["Архитектура бровей", "40 мин", 1300],
    ["Окрашивание хной", "60 мин", 1800],
    ["Долговременная укладка", "60 мин", 2300],
    ["Ламинирование ресниц", "75 мин", 2500],
  ],
} as const;

type Tab = keyof typeof tabs;

export function PriceTabs() {
  const [tab, setTab] = useState<Tab>("Маникюр");
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(tabs) as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-5 py-2 font-semibold transition ${tab === t ? "bg-wine text-white" : "bg-blush text-wine hover:bg-rose"}`}>
            {t}
          </button>
        ))}
      </div>
      <ul className="mt-8 divide-y divide-line rounded-3xl bg-white px-6 shadow-[0_20px_60px_-30px_rgba(122,46,69,.35)]">
        {tabs[tab].map(([name, time, price]) => (
          <li key={name} className="flex items-baseline gap-3 py-5">
            <span className="font-medium">{name}</span>
            {time && <span className="hidden text-sm text-muted sm:inline">{time}</span>}
            <span className="flex-1 border-b border-dotted border-rose" />
            <span className="whitespace-nowrap font-semibold">{price.toLocaleString("ru-RU")} ₽</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
