import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "Finanšu pārskati",
      description: "Gada pārskati, konsolidētie pārskati, starpperiodu atskaites. Terminoloģija saskaņā ar IFRS/LKAS.",
    },
    {
      title: "Ilgtspējas/ESG",
      description: "Ilgtspējas pārskati (CSRD), NFD, ESG paziņojumi un KPI. Precīza, konsekventa terminoloģija.",
    },
    {
      title: "Transfertcenas",
      description: "Transfertcenu dokumentācija un atskaites. Konfidencialitāte un ātri izpildes termiņi.",
    },
  ]

  return (
    <section
      id="pakalpojumi"
      className="py-16"
      style={{
        background: "radial-gradient(1200px 600px at 50% -10%, rgba(124, 92, 255, 0.13), transparent 60%)",
      }}
    >
      <div className="container mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="p-5 bg-[#0f0f18] border-white/10 rounded-2xl">
              <h3 className="text-[#f7f8fb] font-semibold mb-2">{service.title}</h3>
              <p className="text-[#b8c2d9] text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
