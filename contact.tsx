import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="kontakti" className="py-6">
      <div className="container mx-auto max-w-[1100px] px-6">
        <Card className="p-5 bg-[#0f0f18] border-white/10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <h3 className="text-[#f7f8fb] font-semibold mb-1">Kontakti</h3>
            <p className="text-[#b8c2d9] text-sm mb-1">
              E‑pasts:{" "}
              <a href="mailto:xxxxxx.xxx@gmail.com" className="text-[#2563eb] hover:underline">
                xxxxxx.xxx@gmail.com
              </a>
            </p>
            <p className="text-[#b8c2d9] text-sm">
              Tālr.:{" "}
              <a href="tel:+37129xxxxxx" className="text-[#2563eb] hover:underline">
                29xxxxxx
              </a>
            </p>
          </div>
          <Button
            className="rounded-full px-4 py-2 font-bold text-[#0b0b12] border-none"
            style={{
              background: "linear-gradient(135deg, #7c5cff, #54d1ff)",
            }}
          >
            <a href="#quote">Get a quote</a>
          </Button>
        </Card>
      </div>
    </section>
  )
}
