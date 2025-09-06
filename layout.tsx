import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "NAKTS TULKOTĀJA — Tulkošanas pakalpojumi",
  description:
    "NAKTS TULKOTĀJA — Gada pārskatu, ilgtspējas pārskatu, transfertcenu dokumentācijas un citu finanšu/biznesa pārskatu tulkošana. Tulkotāja ar starptautisku finanšu un revīzijas kvalifikācijām un pieredzi.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
