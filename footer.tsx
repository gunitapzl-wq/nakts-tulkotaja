"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="py-10 text-center">
      <p className="text-[#9aa0aa] text-sm">© {currentYear} NAKTS TULKOTĀJA. Visas tiesības aizsargātas.</p>
    </footer>
  )
}
