"use client"

import { useState } from "react"

export function Header() {
  const [currentLang, setCurrentLang] = useState("lv")

  return (
    <header className="container mx-auto max-w-[1100px] px-6 py-6">
      <nav className="flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 font-bold text-[#f7f8fb]">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #0b1b3f, #2563eb)",
            }}
          />
          NAKTS TULKOTĀJA
        </a>

        <div className="flex items-center gap-3 relative">
          <div className="absolute top-6 -right-4 pointer-events-none">
            <svg width="70" height="50" viewBox="0 0 70 50" className="opacity-60">
              {/* Big Dipper constellation stars - proper dipper/ladle shape */}
              {/* Bowl of the dipper */}
              <circle
                cx="10"
                cy="15"
                r="2.2"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "0s", animationDuration: "2s" }}
              />
              <circle
                cx="20"
                cy="12"
                r="2"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}
              />
              <circle
                cx="30"
                cy="18"
                r="2.1"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "0.6s", animationDuration: "1.8s" }}
              />
              <circle
                cx="22"
                cy="25"
                r="1.9"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "0.9s", animationDuration: "2.1s" }}
              />
              {/* Handle of the dipper */}
              <circle
                cx="35"
                cy="22"
                r="1.8"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "1.2s", animationDuration: "1.9s" }}
              />
              <circle
                cx="45"
                cy="28"
                r="1.9"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "1.5s", animationDuration: "2.3s" }}
              />
              <circle
                cx="55"
                cy="35"
                r="1.7"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "1.8s", animationDuration: "2s" }}
              />

              {/* Constellation lines forming the dipper shape */}
              <path
                d="M10,15 L20,12 L30,18 L22,25 L10,15 M30,18 L35,22 L45,28 L55,35"
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>

          <a href="#pakalpojumi" className="text-[#b8c2d9] font-semibold hover:text-[#f7f8fb] transition-colors">
            Pakalpojumi
          </a>
          <a href="#cena" className="text-[#b8c2d9] font-semibold hover:text-[#f7f8fb] transition-colors">
            Cena
          </a>
          <a href="#kontakti" className="text-[#b8c2d9] font-semibold hover:text-[#f7f8fb] transition-colors">
            Kontakti
          </a>
          <div className="flex gap-2">
            <button className="bg-transparent border-none cursor-pointer font-semibold text-[#2563eb]">LV</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
