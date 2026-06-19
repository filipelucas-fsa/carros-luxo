import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";
import { animate, stagger } from "animejs";
import { ShieldCheck, Award, Gem, ArrowUpRight, Plus } from "lucide-react";

import carImg from "../assets/car-silhouette.png";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import heroShowroom from "../assets/hero-showroom.jpg";
import { CustomCursor } from "../components/CustomCursor";
import { IntroCurtain } from "../components/IntroCurtain";
import { GoldenDust } from "../components/GoldenDust";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maranello Atelier — Concessionária Privada de Hipercarros" },
      {
        name: "description",
        content:
          "Um atelier privado para colecionadores de automóveis exóticos e historicamente significativos. Procedência verificada, dossiês assinados pela fábrica e entrega discreta em todo o mundo.",
      },
      { property: "og:title", content: "Maranello Atelier — Concessionária Privada de Hipercarros" },
      {
        property: "og:description",
        content: "Confie no dossiê antes de confiar no vendedor.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <IntroCurtain />
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <ValueProp />
      <Collection />
      <Stats />
      <Quote />
      <Closing />
      <Footer />
    </main>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 md:px-8 py-4 md:py-5">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 shrink-0 rounded-full border border-gold/50 flex items-center justify-center">
            <span className="font-display text-gold text-sm">M</span>
          </div>
          <div className="font-display text-[13px] md:text-[15px] tracking-[0.18em] uppercase truncate">
            Maranello{" "}
            <span className="text-muted-foreground font-sans font-normal tracking-[0.3em] hidden sm:inline">
              Atelier
            </span>
          </div>
        </a>
        <nav className="hidden md:flex justify-center gap-10 text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
          <a href="#collection" className="hover:text-foreground transition">Coleção</a>
          <a href="#process" className="hover:text-foreground transition">Processo</a>
          <a href="#provenance" className="hover:text-foreground transition">Registros</a>
          <a href="#contact" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href="#contact"
          className="btn-outline-gold hover:btn-outline-gold-hover px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-[11px] tracking-[0.2em] uppercase whitespace-nowrap"
        >
          <span className="hidden sm:inline">Visita privada</span>
          <span className="sm:hidden">Visita</span>
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = headlineRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".word");
    animate(words, {
      opacity: [0, 1],
      y: [40, 0],
      filter: ["blur(12px)", "blur(0px)"],
      duration: 1100,
      delay: stagger(90, { start: 250 }),
      ease: "out(4)",
    });
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] bg-spotlight pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Editorial showroom photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroShowroom}
          alt="Showroom privado — hipercarro único sob um spotlight dourado"
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "contrast(1.05) saturate(0.95)" }}
        />
      </div>
      {/* Three.js golden dust drifting across the showroom */}
      <div className="absolute inset-0 z-[1]">
        <GoldenDust />
      </div>
      {/* Overlays: vignette + left-fade for legibility */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block bg-gradient-to-r from-background via-background/75 to-transparent" />

      {/* Editorial frame markers (desktop only) */}
      <div className="hidden md:block absolute top-28 left-8 text-[10px] tracking-[0.3em] uppercase text-muted-foreground z-10">
        N°001 · Ano MMXXVI
      </div>
      <div className="hidden md:block absolute top-28 right-8 text-[10px] tracking-[0.3em] uppercase text-muted-foreground z-10 text-right">
        Salão privado
        <br />
        <span className="text-gold/70">Somente com hora marcada</span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center min-h-[72vh]">
        <div className="md:col-span-7 animate-fade-in" style={{ animationDuration: "1s", animationDelay: "0.2s", animationFillMode: "both" }}>
          <span className="chip mb-6 md:mb-8">
            <span className="w-1 h-1 rounded-full bg-gold" /> Fundada em 2008 · Mônaco
          </span>

          <h1
            ref={headlineRef}
            className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] leading-[0.95] mb-6 md:mb-8"
          >
            <span className="word inline-block opacity-0 will-change-transform">A</span>{" "}
            <span className="word inline-block opacity-0 will-change-transform">concessionária</span>
            <br />
            <span className="word inline-block opacity-0 will-change-transform">que</span>{" "}
            <span className="word inline-block opacity-0 will-change-transform">conquista</span>
            <br />
            <span className="word inline-block opacity-0 will-change-transform text-gold-gradient italic font-normal">o</span>{" "}
            <span className="word inline-block opacity-0 will-change-transform text-gold-gradient italic font-normal">segundo</span>{" "}
            <span className="word inline-block opacity-0 will-change-transform text-gold-gradient italic font-normal">aperto&nbsp;de&nbsp;mão.</span>
          </h1>

          <p className="text-[15px] md:text-[17px] leading-relaxed text-muted-foreground max-w-md mb-10 md:mb-12">
            Um atelier privado para colecionadores. Procedência verificada,
            dossiês assinados por técnicos de fábrica e entrega discreta para
            qualquer garagem do mundo — sem o teatro das comissões.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <a
              href="#collection"
              className="btn-fill hover:btn-fill-hover px-6 md:px-7 py-3.5 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center gap-3 group"
            >
              Ver coleção
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="btn-outline-gold hover:btn-outline-gold-hover px-6 md:px-7 py-3.5 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.2em] uppercase"
            >
              Visita privada
            </a>
          </div>

          <TrustBadges />
        </div>

        <div className="hidden md:block md:col-span-5" />
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, label: "Verificação de fábrica", sub: "Cada chassi, sem exceção" },
    { icon: Award, label: "Histórico em concursos", sub: "12 anos, invicto" },
    { icon: Gem, label: "Curadoria vitalícia", sub: "Reservada a colecionadores" },
  ];
  return (
    <ul className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/60 border-y border-border max-w-2xl">
      {badges.map(({ icon: Icon, label, sub }, i) => (
        <li
          key={label}
          className="bg-background/80 backdrop-blur px-5 py-4 md:py-5 flex items-start gap-3 animate-fade-in"
          style={{
            animationDuration: "0.8s",
            animationDelay: `${0.8 + i * 0.18}s`,
            animationFillMode: "both",
          }}
        >
          <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <span className="min-w-0">
            <span className="block text-[13px] tracking-wide">{label}</span>
            <span className="block text-[11px] text-muted-foreground mt-0.5">{sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */
function Marquee() {
  const marques = [
    "Ferrari", "Pagani", "Koenigsegg", "Bugatti", "Aston Martin",
    "Lamborghini", "McLaren", "Porsche", "Rolls-Royce", "Bentley",
  ];
  const row = [...marques, ...marques];
  return (
    <section className="relative border-y border-border bg-background py-10 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 eyebrow z-10">
        Marcas representadas
      </div>
      <div className="flex gap-16 mt-4 animate-[marquee_50s_linear_infinite] whitespace-nowrap will-change-transform">
        {row.map((m, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl text-muted-foreground/50 hover:text-gold transition-colors duration-500"
          >
            {m}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </section>
  );
}

/* ─────────────────────── VALUE PROP ─────────────────────── */
function ValueProp() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carRef.current,
        { xPercent: -130, rotate: -3, scale: 0.95 },
        {
          xPercent: 130,
          rotate: 3,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>(".vp-line").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.35, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 45%",
              scrub: 1.2,
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const lines = [
    { t: "Não vendemos carros.", em: false },
    { t: "Montamos dossiês.", em: false },
    { t: "Procedência, quilometragem, histórico mecânico — assinados.", em: true },
    { t: "Depois, deixamos o carro falar.", em: false },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-background overflow-hidden"
    >
      <img
        ref={carRef}
        src={carImg}
        alt=""
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[90vw] md:w-[80vw] max-w-[1300px] opacity-60 md:opacity-80 pointer-events-none select-none mix-blend-screen"
      />
      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="hairline w-12 md:w-16" />
          <p className="eyebrow text-gold">Capítulo I — O Processo</p>
        </div>
        <div className="space-y-10 md:space-y-12">
          {lines.map((l, i) => (
            <h2
              key={i}
              className={`vp-line font-display text-[2rem] sm:text-[2.75rem] md:text-[4.5rem] leading-[1.05] max-w-4xl ${
                l.em ? "text-gold-gradient italic font-normal" : ""
              }`}
            >
              {l.t}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── COLLECTION ─────────────────────── */
function Collection() {
  const items = [
    {
      img: car1,
      name: "Aurelia GT-R",
      marque: "Especificação Atelier",
      year: "2024",
      price: "Sob consulta",
      tag: "Para o colecionador",
      power: "789 hp",
      zeroToHundred: "2,6s",
      units: "1 de 12",
    },
    {
      img: car2,
      name: "Veloce 400 SWB",
      marque: "Numeração original",
      year: "1968",
      price: "€4.8M",
      tag: "Em caução",
      power: "320 hp",
      zeroToHundred: "5,4s",
      units: "Chassi #0421",
    },
    {
      img: car3,
      name: "Nero Edizione",
      marque: "Único dono",
      year: "2022",
      price: "Sob consulta",
      tag: "Para o colecionador",
      power: "612 hp",
      zeroToHundred: "2,9s",
      units: "1 de 24",
    },
  ];
  return (
    <section id="collection" className="bg-background py-24 md:py-32 px-5 md:px-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-8 md:flex md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="hairline w-12 md:w-16" />
              <p className="eyebrow text-gold">Capítulo II — Inventário Atual</p>
            </div>
            <h2 className="font-display text-[2.25rem] md:text-6xl leading-tight max-w-2xl">
              Três automóveis,
              <br />
              <span className="text-gold-gradient italic font-normal">atualmente no salão.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition inline-flex items-center gap-2 group self-start md:self-auto"
          >
            Solicitar registros completos
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60">
          {items.map((it, i) => (
            <article
              key={it.name}
              className="bg-background group cursor-pointer animate-fade-in"
              style={{
                animationDuration: "0.9s",
                animationDelay: `${i * 0.12}s`,
                animationFillMode: "both",
              }}
              data-cursor="hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={it.img}
                  alt={`${it.name}, ${it.year}`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105"
                  style={{ filter: "grayscale(50%) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />
                <span className="absolute top-4 left-4 chip">
                  <span className={`w-1.5 h-1.5 rounded-full ${it.tag === "For the collector" ? "bg-gold" : "bg-muted-foreground"}`} />
                  {it.tag}
                </span>
                <Plus className="absolute bottom-4 right-4 w-7 h-7 text-gold opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />

                {/* Hover-revealed spec rail */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gold/30 text-[10px] tracking-[0.18em] uppercase">
                    <div>
                      <div className="text-muted-foreground/80">Potência</div>
                      <div className="text-foreground mt-1 tabular-nums">{it.power}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground/80">0–100</div>
                      <div className="text-foreground mt-1 tabular-nums">{it.zeroToHundred}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground/80">Série</div>
                      <div className="text-foreground mt-1">{it.units}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-7 border-t border-border">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl truncate">{it.name}</h3>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground tabular-nums shrink-0">
                    {it.year}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-muted-foreground gap-4">
                  <span className="truncate">{it.marque}</span>
                  <span className="text-gold shrink-0">{it.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (!ref.current || fired) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runCounters = () => {
      const els = ref.current!.querySelectorAll<HTMLElement>("[data-count]");
      els.forEach((el) => {
        const end = Number(el.dataset.count);
        const decimals = Number(el.dataset.decimals ?? 0);
        if (reduced) {
          el.textContent = end.toFixed(decimals);
          return;
        }
        const cu = new CountUp(el, end, {
          duration: 2.8,
          decimalPlaces: decimals,
          easingFn: (t, b, c, d) => {
            t /= d;
            t--;
            return -c * (t * t * t * t - 1) + b;
          },
        });
        if (!cu.error) cu.start();
      });
      setFired(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounters();
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [fired]);

  const stats = [
    { end: 612, prefix: "", suffix: "", label: "Veículos entregues" },
    { end: 1.4, suffix: "Bi", prefix: "US$ ", label: "Transacionado (USD)", decimals: 1 },
    { end: 38, suffix: "", prefix: "", label: "Países atendidos" },
    { end: 99, suffix: "%", prefix: "", label: "Clientes recorrentes" },
  ];

  return (
    <section
      ref={ref}
      id="provenance"
      className="bg-showroom-fade py-24 md:py-32 px-5 md:px-8 border-y border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="hairline w-12 md:w-16" />
          <p className="eyebrow text-gold">Capítulo III — Os Registros</p>
        </div>
        <h2 className="font-display text-[2.25rem] md:text-6xl mb-16 md:mb-20 max-w-3xl leading-tight">
          Um registro que <span className="text-gold-gradient italic font-normal">fala</span> antes de nós.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-14">
          {stats.map((s, i) => (
            <div key={s.label} className="relative pt-8">
              <div className="absolute top-0 left-0 right-0 hairline" />
              <span className="absolute top-3 right-0 text-[10px] tracking-[0.2em] text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <div className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight tabular-nums">
                <span className="text-gold-gradient">{s.prefix}</span>
                <span data-count={s.end} data-decimals={s.decimals ?? 0}>0</span>
                <span className="text-gold-gradient">{s.suffix}</span>
              </div>
              <div className="mt-4 text-[11px] md:text-[12px] text-muted-foreground tracking-[0.15em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── QUOTE ─────────────────────────── */
function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carRef.current,
        { xPercent: 140, rotate: 2, opacity: 0 },
        {
          xPercent: -160,
          rotate: -2,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        trailRef.current,
        { scaleX: 0, transformOrigin: "right center", opacity: 0 },
        {
          scaleX: 1,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background py-28 md:py-40 px-5 md:px-8 overflow-hidden">
      {/* Tire-trail streak */}
      <div
        ref={trailRef}
        aria-hidden
        className="absolute left-0 right-0 top-[55%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--gold) 60%, transparent) 50%, transparent 100%)",
          boxShadow: "0 0 24px color-mix(in oklab, var(--gold) 40%, transparent)",
        }}
      />
      {/* Drive-by silhouette */}
      <img
        ref={carRef}
        src={carImg}
        alt=""
        aria-hidden
        className="absolute top-[42%] left-0 w-[80vw] max-w-[900px] opacity-0 pointer-events-none select-none mix-blend-screen blur-[1px]"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="font-display text-6xl md:text-7xl text-gold/40 leading-none block mb-4 md:mb-6">"</span>
        <blockquote className="font-display text-xl sm:text-2xl md:text-4xl leading-[1.4] mb-8 md:mb-10">
          Conduziram a aquisição de uma{" "}
          <span className="text-gold-gradient italic">365 GTB/4</span> com
          numeração original com a seriedade de um tabelião e a discrição de
          um banqueiro. Três transações depois, ainda é a minha única chamada.
        </blockquote>
        <div className="flex items-center justify-center gap-3 md:gap-4 text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground flex-wrap">
          <span className="text-foreground">A. von Rensburg</span>
          <span className="w-px h-3 bg-border" />
          <span>Colecionador privado · Zurique</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CLOSING ─────────────────────────── */
function Closing() {
  const headlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = headlightsRef.current;
    if (!el) return;
    const beams = el.querySelectorAll<HTMLElement>(".beam");
    animate(beams, {
      opacity: [
        { to: 0.35, duration: 1400, ease: "out(3)" },
        { to: 0.6, duration: 1800, ease: "inOut(2)" },
      ],
      scaleY: [
        { to: 1, duration: 1400, ease: "out(3)" },
      ],
      loop: true,
      alternate: true,
      delay: stagger(200),
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-background py-28 md:py-40 px-5 md:px-8 border-t border-border overflow-hidden"
    >
      {/* Headlight beams sweeping from below */}
      <div ref={headlightsRef} aria-hidden className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none">
        <div
          className="beam absolute bottom-0 left-[28%] w-[30vw] h-full origin-bottom opacity-0"
          style={{
            background:
              "conic-gradient(from 350deg at 50% 100%, transparent 0deg, color-mix(in oklab, var(--gold) 35%, transparent) 8deg, transparent 18deg)",
            filter: "blur(22px)",
            transform: "scaleY(0.4)",
          }}
        />
        <div
          className="beam absolute bottom-0 right-[28%] w-[30vw] h-full origin-bottom opacity-0"
          style={{
            background:
              "conic-gradient(from 350deg at 50% 100%, transparent 0deg, color-mix(in oklab, var(--gold) 35%, transparent) 8deg, transparent 18deg)",
            filter: "blur(22px)",
            transform: "scaleY(0.4)",
          }}
        />
      </div>
      {/* Asphalt grid (perspective road) */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0 60px, color-mix(in oklab, var(--gold) 25%, transparent) 60px 62px)",
          maskImage:
            "linear-gradient(to top, hsl(0 0% 0% / 0.9), transparent 70%), linear-gradient(to right, transparent, hsl(0 0% 0%) 30%, hsl(0 0% 0%) 70%, transparent)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to top, hsl(0 0% 0% / 0.9), transparent 70%)",
          transform: "perspective(600px) rotateX(62deg)",
          transformOrigin: "bottom center",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <div className="hairline w-12 md:w-16" />
          <p className="eyebrow text-gold">Começar</p>
          <div className="hairline w-12 md:w-16" />
        </div>
        <h2 className="font-display text-[2.5rem] md:text-7xl leading-[1.05] mb-6 md:mb-8">
          Quando estiver pronto,
          <br />
          <span className="text-gold-gradient italic font-normal">já sabemos qual é o carro.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 md:mb-12">
          Uma conversa. Sem showroom. Sem pressão de comissão. Uma seleção
          curada em até sete dias.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <a
            href="mailto:concierge@maranelloatelier.com"
            className="btn-fill hover:btn-fill-hover px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center gap-3 group"
          >
            Iniciar um briefing
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#collection"
            className="btn-outline-gold hover:btn-outline-gold-hover px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[11px] md:text-[12px] tracking-[0.2em] uppercase"
          >
            Ver inventário
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-12 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto grid gap-4 md:grid-cols-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        <span>© {new Date().getFullYear()} Maranello Atelier S.A.M.</span>
        <span className="md:text-center">Mônaco · Dubai · Miami</span>
        <span className="md:text-right">concierge@maranelloatelier.com</span>
      </div>
    </footer>
  );
}