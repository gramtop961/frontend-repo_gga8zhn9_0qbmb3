import { Phone, MessageCircle, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-blue-50/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">Contact Us</h2>
            <p className="mt-2 text-blue-800/80">Get a quote for wholesale orders or ask about availability.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href="https://wa.me/213555000000" target="_blank" className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] text-white py-3 font-semibold shadow hover:brightness-95">
                <MessageCircle className="h-5 w-5" /> WhatsApp Sales
              </a>
              <a href="tel:+213555000000" className="flex items-center justify-center gap-2 rounded-md bg-[#004AAD] text-white py-3 font-semibold shadow hover:bg-blue-800">
                <Phone className="h-5 w-5" /> Call Store
              </a>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-blue-50 text-blue-900 text-sm">
              <p className="font-semibold">EURL Medjaldi Top</p>
              <p>Wholesale & Retail • Safety equipment and workwear</p>
              <p className="mt-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> Store location: City Center, Algiers</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-sm min-h-[320px]">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=2.756%2C35.0%2C8.3%2C37.4&layer=mapnik" className="w-full h-full min-h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
