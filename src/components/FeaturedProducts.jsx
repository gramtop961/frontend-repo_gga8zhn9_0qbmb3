const products = [
  { id: 1, name: 'Steel Toe Safety Shoes', price: '6,800 DA', img: 'https://images.unsplash.com/photo-1562184647-cb9b5c7c5b69?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'High-Visibility Vest', price: '1,200 DA', img: 'https://images.unsplash.com/photo-1617957796311-4bae0df5905a?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Protective Gloves', price: '850 DA', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Hard Hat Helmet', price: '2,400 DA', img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=800&auto=format&fit=crop' },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">Featured Products</h2>
          <a href="#contact" className="text-sm text-[#004AAD] hover:underline">Need bulk pricing?</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-xl border border-blue-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden bg-blue-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-blue-900">{p.name}</h3>
                <p className="mt-1 text-[#004AAD] font-bold">{p.price}</p>
                <button className="mt-3 w-full py-2 rounded-md bg-[#004AAD] text-white text-sm hover:bg-blue-800">Request Quote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
