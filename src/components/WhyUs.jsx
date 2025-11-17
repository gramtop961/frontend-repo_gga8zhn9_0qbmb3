import { ShieldCheck, BadgeCheck, Truck } from 'lucide-react'

const points = [
  { title: 'Durability', desc: 'Heavy-duty materials engineered for tough worksites.', icon: ShieldCheck },
  { title: 'Certified Products', desc: 'Compliant with international safety standards.', icon: BadgeCheck },
  { title: 'Wholesale Prices', desc: 'Competitive pricing for companies & large orders.', icon: ShieldCheck },
  { title: 'Fast Delivery', desc: 'Quick fulfillment and reliable logistics.', icon: Truck },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-gradient-to-b from-white to-blue-50/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-100 text-[#004AAD]">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-blue-900">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-800/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
