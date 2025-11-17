import { HardHat, Shirt, Hand, Glasses, Wrench, Highlighter } from 'lucide-react'

const categories = [
  { name: 'Safety Shoes', icon: Wrench },
  { name: 'Work Uniforms', icon: Shirt },
  { name: 'Gloves', icon: Hand },
  { name: 'Helmets', icon: HardHat },
  { name: 'High-visibility Outfits', icon: Highlighter },
  { name: 'Tools', icon: Wrench },
]

export default function Categories() {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((item) => (
            <div key={item.name} className="group bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="h-10 w-10 sm:h-12 sm:w-12 grid place-items-center rounded-lg bg-white text-[#004AAD] shadow">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-semibold text-blue-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
