export function MainContent() {
  return (
    <section className="container mx-auto max-w-[1100px] px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          id="pakalpojumi"
          className="rounded-2xl p-5 text-white"
          style={{
            background: "linear-gradient(135deg, #2563eb, #0b1b3f)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Pakalpojumi</h3>
          <div className="text-left space-y-4 text-sm leading-relaxed">
            <p>Steidzami tulkojumi ārpus ierastā darba laika – kvalitatīvi un droši.</p>
            <p>Tikai juridiskām personām.</p>
            <p>
              Valodas: LV/RU → EN; EN → LV. Tulkojamais dokuments ir jāiesūta oriģinālajā Word formātā, t.i., tas
              nedrīkst būt "lauzts" dokuments.
            </p>
            <p>
              Ātri un kvalitatīvi pārtulkošu "degošos" pārskatus: gada pārskatus, tostarp konsolidētos gada pārskatus,
              vadības ziņojumus, ilgtspējas pārskatus, atbilstības pārskatus, nodokļu pārskatus un deklarācijas, Valsts
              ieņēmumu dienesta nodokļu auditu pārskatus, nodokļu risku un plānošanas pārskatus, transfertcenu
              dokumentāciju (vietējā un globālā dokumentācija) u.tml.
            </p>
            <p>Teksta (LV vai EN) uzlabošanas/rediģēšanas pakalpojumi.</p>
          </div>
        </div>

        <div
          id="cena"
          className="rounded-2xl p-5 text-white"
          style={{
            background: "linear-gradient(135deg, #2563eb, #0b1b3f)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Cena</h3>
          <div className="text-left space-y-4 text-sm leading-relaxed">
            <p>
              No 8 centiem par vienu vārdu tulkojamajā tekstā, atkarībā no vārdu skaita un vēlamā izpildes termiņa.
              Darbiem ar garāku izpildes termiņu cena ir no 5 centiem (bez PVN) par vienu vārdu tulkojamajā tekstā.
              Pastāvīgajiem klientiem - vēl izdevīgākas cenas.
            </p>
            <p>
              Klients var izvēlēties cenas aprēķinu pēc stundas likmēm: 50-70 EUR/h (bez PVN) par steidzamajiem
              tulkojumiem/rediģēšanu; 35 EUR/h (bez PVN) - par tulkojumiem/rediģēšanu ar izpildes termiņu 2-10 darba
              dienas.
            </p>
            <p>
              Maksimālais apjoms darbiem ar izpildes termiņu "rīt uz brokastlaiku" - 10 000 vārdu. Pēdējais šāda
              pakalpojuma pasūtīšanas termiņš - kārtējās darba dienas plkst 19.
            </p>
            <p>Steidzamajiem darbiem un jaunu klientu darbiem – 100 % priekšapmaksa.</p>
          </div>
        </div>

        <div
          id="kontakti"
          className="rounded-2xl p-5 text-white"
          style={{
            background: "linear-gradient(135deg, #2563eb, #0b1b3f)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Kontakti</h3>
          <div className="text-center space-y-3">
            <p className="font-semibold">Gunita Pužule</p>
            <p>
              Tālr.:{" "}
              <a href="tel:+37129438223" className="text-white hover:underline">
                29438223 (arī WhatsApp)
              </a>
            </p>
            <p>
              E-pasts:{" "}
              <a href="mailto:gunita.pzl@gmail.com" className="text-white hover:underline">
                gunita.pzl@gmail.com
              </a>
            </p>
            <p className="text-sm leading-relaxed mt-4 text-left">
              Tulkotājas pieejamība steidzamajiem tulkojumiem netiek garantēta. Priekšroka - pastāvīgajiem klientiem.
            </p>
            <p className="text-sm leading-relaxed text-left">
              Rezervējiet tulkotājas laiku savlaicīgi, lai jūsu tulkošanas sprinta finišs būtu veiksmīgs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
