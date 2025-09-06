import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Quote() {
  const mailtoLink =
    "mailto:xxxxxx.xxx@gmail.com?subject=Pied%C4%81v%C4%81jums%20%E2%80%94%20NAKTS%20TULKOT%C4%80JA&body=S%C4%81kotn%C4%93j%C4%81%20valoda:%0D%0AM%C4%93%C4%B7a%20valoda:%0D%0ATermi%C5%86%C5%A1:%0D%0ASaite%20uz%20failu:%0D%0APapildu%20info:%0D%0A"

  return (
    <section id="quote" className="py-3">
      <div className="container mx-auto max-w-[1100px] px-6">
        <Card className="p-5 bg-[#0f0f18] border-white/10 rounded-2xl">
          <h3 className="text-[#f7f8fb] font-semibold mb-3">Saņemt piedāvājumu</h3>
          <p className="text-[#b8c2d9] text-sm mb-3 max-w-2xl">
            Nosūtiet saiti uz dokumentu vai pievienojiet failu un īsu aprakstu (valoda → valoda, termiņš).
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              className="rounded-full px-4 py-2 font-bold text-[#0b0b12] border-none"
              style={{
                background: "linear-gradient(135deg, #7c5cff, #54d1ff)",
              }}
            >
              <a href={mailtoLink}>Rakstīt e‑pastu</a>
            </Button>
            <Button variant="ghost" className="rounded-full px-4 py-2 font-bold text-[#f7f8fb] border border-white/10">
              <a href="tel:+37129xxxxxx">Zvanīt: 29xxxxxx</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
