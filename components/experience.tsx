import { Card } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="pieredze" className="py-8">
      <div className="container mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            className="p-5 border-white/10 rounded-2xl"
            style={{
              background: "linear-gradient(0deg, rgba(11, 27, 63, 0.13), transparent)",
            }}
          >
            <h3 className="text-[#f7f8fb] font-semibold mb-2">Kvalifikācijas</h3>
            <p className="text-[#b8c2d9] text-sm leading-relaxed">
              Starptautiska finanšu un revīzijas kvalifikācija. Darbs ar lielajiem četrinieka standartiem, iekšējo
              kontroli un finanšu terminoloģiju.
            </p>
          </Card>

          <Card className="p-5 bg-[#0f0f18] border-white/10 rounded-2xl">
            <h3 className="text-[#f7f8fb] font-semibold mb-2">Process</h3>
            <p className="text-[#b8c2d9] text-sm leading-relaxed">
              Ātra uzsākšana, divpakāpju redakcija, termiņu ievērošana. Piegāde līdz rītam (pēc vienošanās).
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
