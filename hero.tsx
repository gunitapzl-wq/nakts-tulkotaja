"use client"
import { WebGLBackground } from "@/components/webgl-background"

export function Hero() {
  return (
    <section className="relative min-h-[84vh] flex items-center justify-center overflow-hidden">
      <WebGLBackground />

      <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-xs text-slate-200 mb-4">
          Tulkotāja ar starptautiski atzītām finanšu, nodokļu, iekšēja auditora un revīzijas kvalifikācijām un praktisku
          darba pieredzi nozarē......
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 text-balance">NAKTS TULKOTĀJA</h1>

        <p className="text-[#b8c2d9] text-sm md:text-lg max-w-2xl mx-auto mb-6 text-pretty">
          Gada pārskatu, ilgtspējas pārskatu, transfertcenu dokumentācijas un citu finanšu un biznesa pārskatu tulkošana
          — rīt uz brokastlaiku.
        </p>

        <div className="flex justify-center">
          <a
            href="#quote"
            className="inline-block px-4 py-3 rounded-full font-bold text-white border-none"
            style={{
              background: "linear-gradient(135deg, #2563eb, #0b1b3f)",
            }}
          >
            Saņemt piedāvājumu
          </a>
        </div>
      </div>
    </section>
  )
}
