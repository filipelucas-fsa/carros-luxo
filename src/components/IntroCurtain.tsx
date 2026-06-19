import { useEffect, useState } from "react";

export function IntroCurtain() {
  const [phase, setPhase] = useState<"hidden" | "showing" | "opening" | "done">("hidden");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("intro-played") === "1") {
      setPhase("done");
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("done");
      sessionStorage.setItem("intro-played", "1");
      return;
    }

    setPhase("showing");
    document.body.style.overflow = "hidden";

    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 17) + 6;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
      }
      setCount(n);
    }, 90);

    const t1 = setTimeout(() => setPhase("opening"), 1400);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      sessionStorage.setItem("intro-played", "1");
    }, 2400);

    return () => {
      clearInterval(id);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done" || phase === "hidden") return null;

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none">
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-ink transition-transform duration-[1000ms]"
        style={{
          transform: phase === "opening" ? "translateX(-100%)" : "translateX(0)",
          transitionTimingFunction: "cubic-bezier(0.7, 0, 0.3, 1)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-ink transition-transform duration-[1000ms]"
        style={{
          transform: phase === "opening" ? "translateX(100%)" : "translateX(0)",
          transitionTimingFunction: "cubic-bezier(0.7, 0, 0.3, 1)",
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          phase === "opening" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Maranello Atelier
          </div>
          <div className="font-display text-7xl md:text-9xl text-gold-gradient tabular-nums">
            {count.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}