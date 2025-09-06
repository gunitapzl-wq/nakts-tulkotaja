"use client"

import { useState } from "react"

export type Language = "lv" | "en"

export interface Translations {
  eyebrow: string
  headline: string
  sub: string
  cta_primary: string
}

const translations: Record<Language, Translations> = {
  lv: {
    eyebrow:
      "Tulkotāja ar starptautiski atzītām finanšu, nodokļu, iekšēja auditora un revīzijas kvalifikācijām un praktisku darba pieredzi nozarē......",
    headline: "NAKTS TULKOTĀJA",
    sub: "Gada pārskatu, ilgtspējas pārskatu, transfertcenu dokumentācijas un citu finanšu un biznesa pārskatu tulkošana — rīt uz brokastlaiku.",
    cta_primary: "Saņemt piedāvājumu",
  },
  en: {
    eyebrow: "Translator with international finance and audit qualifications and experience",
    headline: "NAKTS TULKOTĀJA",
    sub: "Translation of annual reports, sustainability reports, transfer pricing documentation and other financial and business reports — ready by breakfast tomorrow.",
    cta_primary: "Get a quote",
  },
}

export function useTranslations() {
  const [currentLang, setCurrentLang] = useState<Language>("lv")

  const t = translations[currentLang]

  return {
    currentLang,
    setCurrentLang,
    t,
  }
}
