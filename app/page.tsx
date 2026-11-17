import { PriceTabs } from "@/components/PriceTabs";
import { Reveal } from "@/components/Reveal";
import { img } from "@/components/img";

const PHONE = "+7 (921) 384-56-29";

const P = {
  hero: "photo-1632345031435-8727f6897d53",
  n1: "photo-1610992015732-2449b76344bc",
  n2: "photo-1604654894611-6973b376cbde",
  n3: "photo-1659391542239-9648f307c0b1",
  n4: "photo-1630843599725-32ead7671867",
  brows: "photo-1592999177797-0f96d5617ed3",
  lashes: "photo-1548902378-2ec44c906391",
  salon: "photo-1633681926022-84c23e8cb2d6",
  m1: "photo-1438761681033-6461ffad8d80",
  m2: "photo-1758600434473-b8694347de49",
  m3: "photo-1603988089669-c041ac2fe196",
};

const services = [
  { t: "Маникюр", d: "Покрытие держится 3 недели. Если отколется за 7 дней — исправим бесплатно.", p: "от 1 400 ₽", photo: P.n1 },
  { t: "Брови", d: "Форма, окрашивание и долговременная укладка — подберём под лицо.", p: "от 1 300 ₽", photo: P.brows },
  { t: "Ресницы", d: "Ламинирование и наращивание. Выглядит естественно, держится до 6 недель.", p: "от 2 500 ₽", photo: P.lashes },
];

const works = [P.n2, P.n3, P.n4, P.hero];

const masters = [
  { name: "Анна", role: "Топ-мастер маникюра", exp: "6 лет", photo: P.m1 },
  { name: "Вика", role: "Маникюр и педикюр", exp: "4 года", photo: P.m2 },
  { name: "Соня", role: "Брови и ресницы", exp: "5 лет", photo: P.m3 },
];

export default function Page() {
  return (
    <>
      <header className="wrap flex h-20 items-center justify-between">
        <div className="font-display text-2xl font-extrabold">lumi<span className="text-wine">.</span>studio</div>
        <nav className="hidden gap-8 text-sm font-semibold text-muted md:flex">
          <a href="#uslugi" className="hover:text-wine">Услуги</a>
          <a href="#price" className="hover:text-wine">Прайс</a>
          <a href="#masters" className="hover:text-wine">Мастера</a>
        </nav>
        <a href="#contacts" className="btn btn-wine !px-5 !py-2.5 text-sm">Записаться</a>
      </header>

      <section className="wrap grid items-center gap-12 pb-16 pt-6 md:grid-cols-2 md:pt-12">
        <div>
          <span className="rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-wine shadow-sm">✦ м. Чкаловская · 2 минуты пешком</span>
          <h1 className="rise mt-6 font-display text-5xl font-extrabold leading-[1.02] md:text-7xl" style={{ animationDelay: ".1s" }}>
            Маникюр, который <span className="grad-text">держится 3 недели</span>
          </h1>
          <p className="rise mt-6 max-w-md text-lg text-muted" style={{ animationDelay: ".2s" }}>Маникюр, брови и ресницы в студии у метро Чкаловская. Инструменты стерилизуем после каждого клиента.</p>
          <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: ".3s" }}>
            <a href="#contacts" className="btn btn-wine">Записаться онлайн</a>
            <span className="rounded-full bg-blush px-4 py-2 text-sm font-bold text-wine">−15% на первый визит</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="morph absolute -inset-4 bg-gradient-to-br from-[#ff3d8b] via-[#ffb3d1] to-lilac opacity-70 blur-2xl" />
          <img src={img(P.hero, 1000, 1000)} alt="Мастер делает маникюр" className="morph relative aspect-square w-full object-cover shadow-2xl" />
          <div className="float absolute -left-4 bottom-10 rounded-3xl bg-white px-5 py-4 shadow-xl">
            <div className="font-display text-2xl font-extrabold">4,9 ★</div>
            <div className="text-sm text-muted">380 отзывов на картах</div>
          </div>
          <div className="float absolute -right-2 top-8 rounded-3xl bg-plum px-5 py-4 text-white shadow-xl" style={{ animationDelay: "2s" }}>
            <div className="text-sm text-white/70">Сегодня свободно</div>
            <div className="font-display text-xl font-extrabold">14:00 · 17:30</div>
          </div>
        </div>
      </section>

      <div className="-rotate-1 overflow-hidden bg-gradient-to-r from-[#ff3d8b] to-lilac py-4 text-white">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl font-extrabold">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["маникюр", "педикюр", "брови", "ресницы", "дизайн ногтей", "ламинирование"].map((s) => (
              <span key={s + k} className="flex items-center gap-10">{s}<span>♥</span></span>
            )),
          )}
        </div>
      </div>

      <section id="uslugi" className="wrap py-24">
        <Reveal><h2 className="h2">Что мы делаем</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_-34px_rgba(224,24,108,.45)] transition hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img src={img(s.photo, 800, 640)} alt={s.t} className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-extrabold">{s.t}</h3>
                    <span className="whitespace-nowrap font-bold text-wine">{s.p}</span>
                  </div>
                  <p className="mt-3 text-muted">{s.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-24">
        <Reveal><h2 className="h2">Наши <span className="grad-text">работы</span></h2></Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {works.map((w, i) => (
            <Reveal key={w} delay={i * 80}>
              <img src={img(w, 600, 760)} alt="Работа мастера" className={`aspect-[4/5] w-full rounded-[1.75rem] object-cover transition hover:scale-[1.03] ${i % 2 ? "md:mt-10" : ""}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="price" className="relative overflow-hidden bg-blush py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#ff3d8b]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-lilac/30 blur-3xl" />
        <div className="wrap relative">
          <Reveal>
            <h2 className="h2">Прайс</h2>
            <p className="mt-3 mb-8 text-lg text-muted">Цены окончательные — без доплат за снятие и форму.</p>
          </Reveal>
          <Reveal delay={100}><PriceTabs /></Reveal>
        </div>
      </section>

      <section id="masters" className="wrap py-24">
        <Reveal><h2 className="h2">Мастера</h2></Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {masters.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group text-center">
                <div className="relative mx-auto w-4/5">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-to-br from-[#ff3d8b] to-lilac" />
                  <img src={img(m.photo, 600, 700)} alt={m.name} className="relative aspect-[6/7] w-full rounded-[2rem] object-cover transition group-hover:-translate-y-1" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-extrabold">{m.name}</h3>
                <p className="text-muted">{m.role}</p>
                <p className="mt-1 text-sm font-bold text-wine">Опыт {m.exp}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacts" className="wrap pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-plum text-white">
            <img src={img(P.salon, 1600, 900)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-plum via-plum/85 to-[#e0186c]/40" />
            <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-14">
              <div>
                <h2 className="h2">Запись через Telegram и WhatsApp</h2>
                <p className="mt-4 text-white/75">Напишите в мессенджер — администратор подберёт время и мастера.</p>
                <p className="mt-6 font-display text-2xl font-extrabold">{PHONE}</p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <a href="#" className="btn bg-white text-wine">Записаться в Telegram</a>
                <a href="#" className="btn border-2 border-white/40">Записаться в WhatsApp</a>
                <p className="mt-2 text-sm text-white/70">Большой пр. П.С., 88 · ежедневно 10:00–22:00</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line py-10">
        <div className="wrap flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <span className="font-display font-extrabold">lumi<span className="text-wine">.</span>studio</span>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Lumi Studio. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
